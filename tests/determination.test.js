import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { follow, validateKey } from '../src/core/determination.js';
const key = JSON.parse(await readFile(new URL('../data/key.json', import.meta.url)));
const plants = JSON.parse(await readFile(new URL('../data/plants.json', import.meta.url)));
test('semua data terjangkau dan referensi utuh', () => assert.equal(validateKey(key, plants), true));
for (const [choices, expected] of [[[0], 'nanas'], [[1,0], 'singkong'], [[1,1], 'ubi-jalar']]) {
  test('jalur menuju ' + expected, () => assert.equal(follow(key, choices).plantId, expected));
}
test('pilihan tidak valid ditolak', () => {
  for (const path of [[2], [-1], [0,0], [0.5]]) assert.throws(() => follow(key, path));
});
test('siklus ditolak', () => {
  const broken = structuredClone(key);
  broken.nodes['1'].options[0].next = '1';
  assert.throws(() => validateKey(broken, plants), /Siklus/);
});
test('referensi putus ditolak', () => {
  const broken = structuredClone(key);
  broken.nodes['1'].options[0].next = 'hilang';
  assert.throws(() => validateKey(broken, plants), /tidak ditemukan/);
});
