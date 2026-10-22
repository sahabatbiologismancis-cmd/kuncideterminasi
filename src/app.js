import { follow, validateKey } from './core/determination.js';
const root = document.querySelector('#app');
try {
  const load = async path => {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Data gagal dimuat');
    return response.json();
  };
  const [key, plants] = await Promise.all([load('./data/key.json'), load('./data/plants.json')]);
  validateKey(key, plants);
  let choices = [];
  function element(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    root.append(el);
    return el;
  }
  function button(label, action) {
    const el = element('button', label);
    el.type = 'button';
    el.addEventListener('click', action);
  }
  function controls() {
    if (choices.length) button('Kembali', () => { choices.pop(); render(); });
    button('Mulai ulang', () => { choices = []; render(); });
  }
  function render() {
    root.replaceChildren();
    const node = follow(key, choices);
    element('p', 'Pilihan yang sudah dicatat: ' + choices.length);
    if (node.plantId) {
      const plant = plants.find(p => p.id === node.plantId);
      element('h2', 'Kandidat: ' + plant.localName);
      element('i', plant.scientificName);
      element('p', 'Famili: ' + plant.family);
      element('p', Object.values(plant.morphology).join(' · '));
      element('p', plant.notes);
      element('p', 'Hasil sementara dalam dataset contoh. Bandingkan dengan tanaman nyata dan konfirmasikan kepada guru.');
    } else {
      element('h2', node.question);
      node.options.forEach((option, i) => button(option.label, () => { choices.push(i); render(); }));
      button('Belum tahu / ciri tidak cocok', () => {
        root.replaceChildren();
        element('h2', 'Identifikasi belum dapat ditentukan');
        element('p', 'Amati ulang beberapa daun dan batang. Catat ciri yang berbeda, lalu diskusikan dengan guru. Tumbuhan mungkin berada di luar dataset.');
        controls();
      });
    }
    controls();
  }
  render();
} catch {
  root.textContent = 'Kunci gagal dimuat. Periksa data dan jalankan melalui server HTTP, lalu muat ulang halaman.';
}
