// 自動複製 index.html 內容到 404.html，讓 GitHub Pages 支援 SPA fallback
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('404.html 已建立！');
} else {
  console.error('找不到 index.html，請先執行 build');
}
