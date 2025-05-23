
# Smart Image Saver

**Smart Image Saver** is a Chrome extension that lets you detect and save images from websites — even when right-click is blocked or the image is hidden inside HTML, CSS, canvas, or JavaScript tricks.

It works by scanning the page for different types of images and protection mechanisms, and intelligently choosing the best saving method:
- Direct download if the image is accessible
- Canvas extraction if rendered dynamically
- Full-page screenshot as a fallback
- Bypasses overlays and disables right-click blockers

## 🚀 Features

- ✅ Detects standard `<img>` elements and CSS `background-image`
- ✅ Captures canvas-rendered images and base64 images
- ✅ Automatically bypasses overlays (`pointer-events`, z-index traps, etc.)
- ✅ Disables right-click blocking code
- ✅ Smart fallback: takes screenshot if download isn't possible
- 🔐 Activation system for unlocking full features with a license key

## 🧰 Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**, select this folder

Once loaded, click on the extension icon or use the right-click context menu to test image extraction.

## ⚠️ License

This code is distributed for demonstration purposes only.  
You are **not allowed** to redistribute, sell, or integrate it commercially without written permission.

© 2024 Smart Image Saver — All rights reserved.
