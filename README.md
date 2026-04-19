# QRVEX — QR Designer + File Tools Platform

<div align="center">

![QRVEX Logo](https://img.shields.io/badge/QRVEX-QR%20Designer%20%2B%20File%20Tools-C84B31?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI3IiBmaWxsPSIjQzg0QjMxIi8+PC9zdmc+)

**The all-in-one creative tool for designers, creators & hustlers**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![No Server Required](https://img.shields.io/badge/Server-None%20Required-blueviolet?style=flat-square)](#)
[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Site-C84B31?style=for-the-badge)](https://dharani25007-code.github.io/toolzen/)

### 🌐 [**Try it Live → dharani25007-code.github.io/toolzen**](https://dharani25007-code.github.io/toolzen/)

</div>

---

## ✨ Overview

**QRVEX** is a fully browser-based, zero-dependency web app that combines a professional-grade QR Code Designer with a comprehensive File Tools suite — all running 100% in-browser with no backend, no uploads, and no privacy concerns.

> 🚀 **Just open the HTML file — no installation, no server, no sign-up required.**

---

## 🎯 Key Features at a Glance

| Feature | Details |
|---|---|
| 🎨 QR Module Shapes | **42+** unique shapes (Classic, Dots, Diamond, Star, Hex, DNA, Pac-Man, etc.) |
| 👁️ Eye / Finder Styles | **18** styles (Square, Heart, Cloud, Triforce, Bubbly, Arrow, etc.) |
| 🌈 Gradient Presets | **12** built-in presets + custom foreground & background colors |
| 📄 File Converters | **22+** conversion types, all client-side |
| 📦 File Compressor | Image, PDF, ZIP — compress up to 80% |
| 🖼️ Image Toolkit | Convert, resize, crop, grayscale |
| 💳 Business Card Export | **8** premium card themes → 820×460px PNG |
| ⚡ Batch QR | Multi-URL QR generation + bulk ZIP download |
| 🔍 QR Decoder | Drag & drop any QR image to decode |
| 🌙 Dark Mode | Full light/dark theme toggle |
| 📱 Responsive | Mobile-first, hamburger navigation |

---

## 🗂️ Project Structure

```
qr vex/
└── qr_vex.html          # Complete single-file app (HTML + CSS + JS)
```

> Everything is self-contained in one `.html` file — styles, scripts, and markup.

---

## 🚀 Getting Started

### Open Directly (Recommended)

1. Download `qr_vex.html`
2. Open it in any modern browser (Chrome, Firefox, Edge, Safari)
3. That's it — no installation needed!

### Host It (Optional)

You can also host it on any static file server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js / npx
npx serve .

# Using VS Code
# Install "Live Server" extension → Right-click → Open with Live Server
```

Then visit `http://localhost:8080/qr_vex.html`

---

## 🎨 QR Designer

### Link → QR (Encode)

Generate stunning, fully customizable QR codes from any URL.

**42+ Module Shapes:**
`Classic` · `Rounded` · `Dots` · `Diamond` · `Star` · `Hexagon` · `Leaf` · `Arrow` · `Organic` · `Cross` · `Wave` · `Pixel` · `Bubble` · `Flame` · `Crystal` · `Triangle` · `Gear` · `Heart` · `Zigzag` · `Plus` · `Moon` · `Ring` · `Shield` · `Octagon` · `Rhombus` · `Bowtie` · `Raindrop` · `Fish` · `Pinwheel` · `Mosaic` · `Spark` · `Petal` · `Clover` · `DNA` · `Cloud` · `Eye` · `Lightning` · `PacMan` · `Badge` · `Puzzle` · `Squircle` · `Flag`

**18 Finder Eye Styles:**
`Square` · `Rounded` · `Circle` · `Leaf` · `Shield` · `Star` · `Diamond` · `Arrow` · `Hexagon` · `Cross` · `Heart` · `Cloud` · `Octagon` · `Triforce` · `Curved` · `Bubbly` · `Pinch` · `Squircle`

**Color Options:**
- 16 preset foreground colors + custom color picker
- 16 gradient end colors + custom picker
- 14 background colors + custom picker

**12 Gradient Presets:**
`Sunset` · `Emerald` · `Cosmic` · `Gold` · `Fire` · `Midnight` · `Ocean` · `Candy` · `Forest` · `Dark` · `Pastel` · `Aurora`

**Effects:**
- 🌈 Gradient overlay
- 💫 Animate (pulse/glow animation)
- 🔲 Scan line overlay
- 🖼️ Frame border
- ✨ Glow effect
- 🌑 Drop shadow

**Other Options:**
- Center logo injection (upload your own or auto-fetch favicon)
- Output size slider: 200px – 600px
- Download as **PNG** or **SVG**
- Copy to clipboard
- QR history sidebar (thumbnails of recent QRs)

---

### QR → Link (Decode)

Upload any QR code image to instantly decode and extract the embedded URL or text.

- Drag & drop or click to upload
- Supports PNG, JPG, WebP
- Clickable link if URL detected

---

### Batch QR Generator

Generate QR codes for multiple URLs at once.

- Paste one URL per line
- Preview thumbnails in grid
- Download all as a **ZIP archive** (named by domain)

---

### Auto Brand Kit

Enter any website URL to:
- Auto-fetch its **favicon**
- Extract a brand **color palette**
- Apply colors & generate branded QR with one click

---

### Business Card Export

Fill in your contact info and export a print-ready business card with an embedded QR code.

**8 Card Themes:** `Dark Ink` · `Clean White` · `Bold Red` · `Navy Blue` · `Forest` · `Gold` · `Purple` · `Pink`

- Output: **820 × 460px PNG** (print-ready)
- Includes: Name, Job Title, Company, Phone, Email, Website, QR Code

---

## 🔄 File Tools (22+ Converters)

All conversions happen entirely **in your browser** — files are never uploaded to any server.

| Tool | Description |
|---|---|
| **Word → PDF** | Convert `.docx` to PDF, preserving formatting |
| **PDF → Word** | Extract PDF text → editable `.docx` |
| **PPT → PDF** | Convert `.pptx` presentations to PDF |
| **Excel → PDF** | Convert `.xlsx` spreadsheets to PDF |
| **Image → PDF** | Combine multiple images into one PDF |
| **PDF → Images** | Extract PDF pages as PNG images (ZIP download) |
| **Merge PDFs** | Combine multiple PDFs into one |
| **Split PDF** | Split PDF into individual pages or ranges |
| **TXT → PDF** | Convert plain text to formatted PDF |
| **HTML → PDF** | Convert HTML files to PDF |
| **CSV → PDF** | Turn CSV data into a formatted PDF table |
| **PDF → Text** | Extract text content from any PDF |
| **Watermark PDF** | Add custom watermark text to every page |
| **Edit PDF Metadata** | Change PDF title, author, and creator info |
| **PDF Rotate** | Rotate pages 90°, 180°, or 270° |
| **Add Page Numbers** | Add page numbers (choose position & style) |
| **Image Converter** | Convert between JPG, PNG, WebP, GIF |
| **JSON → CSV** | Convert JSON arrays to CSV spreadsheet |
| **CSV → JSON** | Convert CSV to structured JSON arrays |
| **Image → Grayscale** | Convert color images to black & white |
| **Resize Image** | Scale image to 25%, 50%, 75%, or 200% |
| **Crop Image** | Center-crop images (removes 10% border) |

---

## 📦 File Compressor

| Tool | Description |
|---|---|
| **Image Compressor** | Compress JPG/PNG/WebP — choose High/Medium/Low/Tiny quality |
| **PDF Compressor** | Reduce PDF size by up to 80% |
| **ZIP Creator** | Pack multiple files into a single `.zip` archive |
| **Batch Image Compress** | Compress multiple images at once → ZIP download |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | App structure & semantic markup |
| **Vanilla CSS3** | Custom design system, animations, dark mode |
| **Vanilla JavaScript** | All logic — QR generation, file processing, UI |
| **[qrcode.js](https://github.com/davidshimjs/qrcodejs)** | QR code generation (CDN) |
| **[jsQR](https://github.com/cozmo/jsQR)** | QR code decoding (CDN) |
| **[JSZip](https://stuk.github.io/jszip/)** | ZIP archive creation (CDN) |
| **[pdf-lib](https://pdf-lib.js.org/)** | PDF manipulation (CDN) |
| **[Mammoth.js](https://github.com/mwilliamson/mammoth.js)** | Word `.docx` parsing (CDN) |
| **Google Fonts** | Syne, Instrument Sans, DM Mono |

> **Zero build tools.** No npm, no webpack, no React — pure HTML/CSS/JS.

---

## 🌗 Dark Mode

Click the ☀️/🌙 toggle in the top-right corner to switch between light and dark themes. The preference is applied instantly with smooth CSS transitions.

---

## 📱 Responsive Design

QRVEX is fully responsive:
- **Desktop (>1050px):** Full split-panel layout
- **Tablet (640–1050px):** Stacked layout, hamburger nav
- **Mobile (<640px):** Compact layout, optimized typography

---

## 🔒 Privacy

- ✅ **100% client-side** — all processing happens in your browser
- ✅ **No server uploads** — your files never leave your device
- ✅ **No accounts or sign-up**
- ✅ **No tracking or analytics**

---

## 📸 Screenshots

> Open `qr_vex.html` in your browser to see the live app with all features.

**Sections:**
- 🏠 **Home** — Hero, feature grid, how-it-works steps
- 📱 **QR Designer** — Encode, Decode, Batch, Brand Kit, Business Card
- 🔄 **File Tools** — 22+ converters with drag-and-drop
- 📦 **Compressor** — Image, PDF, ZIP compression

---

## 🙌 Credits

Built with ❤️ using open-source libraries:
- [qrcode.js](https://github.com/davidshimjs/qrcodejs) — MIT License
- [jsQR](https://github.com/cozmo/jsQR) — Apache 2.0 License
- [JSZip](https://stuk.github.io/jszip/) — MIT License
- [pdf-lib](https://pdf-lib.js.org/) — MIT License
- [Mammoth.js](https://github.com/mwilliamson/mammoth.js) — BSD License

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<div align="center">

Made with ❤️ by **Dharanidharan**

**QRVEX** — *Create. Convert. Compress.*

</div>
