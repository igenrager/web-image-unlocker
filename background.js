
chrome.runtime.onInstalled.addListener(() => {
  try {
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
  } catch (e) {
    console.error("Erreur création menus contextuels :", e);
  }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!tab || !tab.id) return;

  if (info.menuItemId === "saveImage" && info.srcUrl) {
    chrome.downloads.download({
      url: info.srcUrl,
      filename: "image_smart.png"
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("Erreur téléchargement :", chrome.runtime.lastError.message);
      } else {
        try {
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Téléchargement terminé",
            message: "L’image a été enregistrée avec succès."
          }, () => {
            if (chrome.runtime.lastError) {
              console.warn("Erreur notification :", chrome.runtime.lastError.message);
            }
          });
        } catch (e) {
          console.warn("Notification échouée :", e);
        }
      }
    });
  } else if (info.menuItemId === "saveAllImages") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  } else if (info.menuItemId === "screenshotPage") {
    chrome.tabs.captureVisibleTab(tab.windowId, { format: "png" }, dataUrl => {
      if (chrome.runtime.lastError) {
        console.error("Erreur capture :", chrome.runtime.lastError.message);
      } else {
        chrome.downloads.download({ url: dataUrl, filename: "screenshot.png" }, () => {
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Capture enregistrée",
            message: "La capture d’écran a été enregistrée !"
          }, () => {
            if (chrome.runtime.lastError) {
              console.warn("Erreur notification (screenshot) :", chrome.runtime.lastError.message);
            }
          });
        });
      }
    });
  } else if (info.menuItemId === "cleanOverlays") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["remove_overlays.js"]
    });
  }
});
