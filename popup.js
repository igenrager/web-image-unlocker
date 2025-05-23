
document.getElementById('smart').onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, t => {
    chrome.scripting.executeScript({
      target: { tabId: t[0].id },
      files: ['smart_fallback_capture.js']
    });
  });
};
