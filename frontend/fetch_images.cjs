const fs = require('fs');
const path = require('path');

const targets = [
  { id: 'hc-laptop-predator', query: 'Acer Predator Helios Neo 16 gaming laptop isolated white background' },
  { id: 'hc-laptop-01', query: 'ASUS ROG Zephyrus G16 OLED 2024 laptop white background' },
  { id: 'hc-desktop-01', query: 'Dell Alienware Aurora R16 desktop tower white background' },
  { id: 'hc-monitor-01', query: 'Samsung 49 Odyssey OLED G9 curved gaming monitor white background' },
  { id: 'hc-component-01', query: 'ASUS ROG Strix GeForce RTX 4090 OC graphics card white background' }
];

async function getImages(query) {
  try {
    const searchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(query);
    const res = await fetch(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const text = await res.text();
    const match = text.match(/vqd=([0-9-]+)/) || text.match(/vqd="([0-9-]+)"/);
    if (!match) return [];
    const vqd = match[1];

    const apiUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}`;
    const apiRes = await fetch(apiUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const data = await apiRes.json();
    return data.results || [];
  } catch (err) {
    console.error('Error fetching for', query, err.message);
    return [];
  }
}

async function run() {
  for (const t of targets) {
    console.log('Searching for:', t.query);
    const results = await getImages(t.query);
    console.log(`Found ${results.length} images for ${t.id}`);
    for (let i = 0; i < Math.min(results.length, 5); i++) {
      console.log(`[${i}] ${results[i].title} -> ${results[i].image}`);
    }
  }
}

run();
