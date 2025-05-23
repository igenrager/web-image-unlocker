
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveImage",
    title: "📥 Enregistrer cette image (Smart Saver)",
    contexts: ["image"]
  });

  chrome.contextMenus.create({
    id: "saveAllImages",
    title: "📦 Enregistrer toutes les images",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    id: "screenshotPage",
    title: "📸 Capturer la page",
    contexts: ["all"]
  });

  chrome.contextMenus.create({
    id: "cleanOverlays",
    title: "🧹 Supprimer les protections visuelles",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveImage" && info.srcUrl) {
    chrome.downloads.download({
      url: info.srcUrl,
      filename: "image_smart.png"
    }, () => {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Téléchargement terminé",
        message: "L’image a été enregistrée avec succès !"
      });
    });
  }
  else if (info.menuItemId === "saveAllImages") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
  else if (info.menuItemId === "screenshotPage") {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, dataUrl => {
      chrome.downloads.download({ url: dataUrl, filename: "screenshot.png" }, () => {
        chrome.notifications.create({
          type: "basic",
          iconUrl: "icon.png",
          title: "Capture enregistrée",
          message: "La capture d’écran a été enregistrée !"
        });
      });
    });
  }
  else if (info.menuItemId === "cleanOverlays") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["remove_overlays.js"]
    });
  }
});
