
document.querySelectorAll('*').forEach(el => {
  const style = getComputedStyle(el);
  if (style.position === 'fixed' && parseFloat(style.opacity) < 0.1 && parseInt(style.zIndex) > 999) {
    el.style.display = 'none';
  }
  if (style.pointerEvents === 'none' || style.userSelect === 'none') {
    el.style.pointerEvents = 'auto';
    el.style.userSelect = 'text';
  }
});
document.oncontextmenu = null;
