document.getElementById('activate').onclick = () => {
  const key = document.getElementById('license').value.trim();
  if (!key) return alert("Entrez une clé");
  chrome.storage.local.set({licenseKey: key}, () => alert("Clé enregistrée"));
};
document.getElementById('smart').onclick = () => {
  chrome.storage.local.get(['licenseKey'], (res) => {
    if (!res.licenseKey || res.licenseKey.length < 8) {
      alert("Extension non activée");
    } else {
      chrome.tabs.query({active:true,currentWindow:true}, t => {
        chrome.scripting.executeScript({target:{tabId:t[0].id},files:['smart_fallback_capture.js']});
      });
    }
  });
};