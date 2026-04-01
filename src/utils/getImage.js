export function getImage(path) {
  // 如果是外部網址 → 直接回傳
  if (path.startsWith("http")) {
    return path;
  }

  // 如果是本地圖片 → 自動加 base
  return `${import.meta.env.BASE_URL}${path}`;
}