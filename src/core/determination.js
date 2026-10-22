export function validateKey(key, plants) {
  const ids = new Set(plants.map(p => p.id));
  if (ids.size !== plants.length) throw new Error('ID tumbuhan duplikat');
  const nodes = key.nodes;
  const reached = new Set(), leaves = new Set();
  function visit(id, ancestors = new Set()) {
    if (ancestors.has(id)) throw new Error('Siklus pada kunci');
    const node = nodes[id];
    if (!node) throw new Error('Simpul tidak ditemukan: ' + id);
    reached.add(id);
    if (node.plantId) {
      if (!ids.has(node.plantId)) throw new Error('Tumbuhan tidak ditemukan');
      leaves.add(node.plantId);
      return;
    }
    if (!node.question || node.options?.length !== 2) throw new Error('Perlu dua pilihan');
    for (const option of node.options) {
      if (!option.label) throw new Error('Label kosong');
      visit(option.next, new Set([...ancestors, id]));
    }
  }
  visit(key.start);
  if (reached.size !== Object.keys(nodes).length) throw new Error('Simpul tidak terjangkau');
  if (leaves.size !== ids.size) throw new Error('Tumbuhan tidak terjangkau');
  return true;
}
export function follow(key, choices = []) {
  let id = key.start;
  for (const choice of choices) {
    const node = key.nodes[id];
    if (!Number.isInteger(choice) || !node.options?.[choice]) throw new Error('Pilihan tidak valid');
    id = node.options[choice].next;
  }
  return key.nodes[id];
}
