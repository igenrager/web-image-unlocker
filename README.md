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

## 🧪 Demo Version

This repository contains a **limited demo version**:
- Detection and UI are active
- Image saving is disabled without activation

To try it:
1. Load the extension manually (see below)
2. Use "Smart Save" or right-click → "Save image"
3. View detected protections or fallbacks

## 🧰 Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**, select this folder

Once loaded, click on the extension icon or use the right-click context menu to test image extraction.

## 🔐 Pro Version (Full Access)

The Pro version allows you to:
- Save any image, even those rendered via JavaScript or canvas
- Automatically trigger fallback capture when download is blocked
- Remove overlays and visual traps with one click

🎫 [Buy a license](https://yourdomain.com)  
📩 Need help? Contact: [you@example.com](mailto:you@example.com)

## ⚠️ License

This code is distributed for demonstration purposes only.  
You are **not allowed** to redistribute, sell, or integrate it commercially without written permission.

© 2024 Smart Image Saver — All rights reserved.
