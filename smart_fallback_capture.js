
const images = new Set();
document.querySelectorAll("img").forEach(img => images.add(img.src));
Array.from(images).forEach((src, i) => {
  const a = document.createElement("a");
  a.href = src;
  a.download = `fallback_image_${i}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
