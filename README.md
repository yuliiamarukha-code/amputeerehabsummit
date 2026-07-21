# Protez Summit Website

A static website for the **Amputee Rehab Summit 2025** - "Complex Approach of Physical Therapy at Amputations".

## 🎯 Project Overview

This is a responsive static website built with:

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript** - Interactive features and animations
- **jQuery** - DOM manipulation and event handling
- **Swiper.js** - Image sliders and carousels
- **WOW.js** - Scroll animations

## 📂 Project Structure

```
protez-summit/
├── index.html          # Main HTML file
├── css/                # Stylesheets
│   ├── main.css        # Main styles
│   ├── responsive.css  # Mobile/tablet responsive styles
│   └── animate.css     # Animation styles
├── js/                 # JavaScript files
│   ├── main.js         # Main functionality
│   ├── jquery.min.js   # jQuery library
│   └── wow.min.js      # WOW.js animations
├── img/                # Images and media files (LFS)
├── font/               # Custom fonts
└── libs/               # Third-party libraries
```

## 🚀 Getting Started

### Prerequisites

- **Git** (with Git LFS support)
- **Web browser** for viewing
- **Local web server** (optional, but recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ditagroupinc/protez-summit.git
   cd protez-summit
   ```

2. **Ensure Git LFS is installed:**

   ```bash
   # Install Git LFS if not already installed
   # On macOS:
   brew install git-lfs

   # On Ubuntu/Debian:
   sudo apt install git-lfs

   # Initialize LFS in your Git installation (one-time setup)
   git lfs install
   ```

3. **Download all LFS files:**

   ```bash
   # This downloads all large media files (images, videos)
   git lfs pull
   ```

4. **Verify files are downloaded:**
   ```bash
   # Check that large files show real sizes, not small pointer files
   ls -lh img/bg.mp4
   # Should show ~7.5MB, not a few bytes
   ```

## 🖥️ Running Locally

### VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Git LFS (Large File Storage)

This repository uses **Git LFS** to handle large media files efficiently.

### What files are stored in LFS?

- All images: `*.png`, `*.jpg`, `*.jpeg`
- All videos: `*.mp4`
- All SVG files: `*.svg`

### Common LFS Commands:

```bash
# Download all LFS files
git lfs pull

# Check which files are tracked by LFS
git lfs ls-files

# Check LFS status
git lfs status

# Download specific file patterns
git lfs pull --include="img/*.mp4"
```

### Troubleshooting LFS Issues:

**Problem:** Images appear as small text files or don't load

```bash
# Solution: Pull LFS files
git lfs pull
```

**Problem:** "This repository is over its data quota" error

```bash
# This means the GitHub LFS bandwidth limit was reached
# Contact repository owner or wait for quota reset
```

**Problem:** LFS files not downloading during clone

```bash
# Re-download LFS files manually
git lfs pull
```

## 🔄 Development Workflow

### Making Changes

1. **Edit HTML, CSS, or JS files** (these are regular Git files)
2. **Add and commit changes:**

   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   ```

3. **Push changes:**
   ```bash
   git push
   ```

### Adding New Media Files

When you add new images or videos, they'll automatically be handled by LFS:

```bash
# Add new image - automatically goes to LFS
cp new-image.png img/
git add img/new-image.png
git commit -m "Add new image"
git push  # LFS handles the large file automatically
```

## 🌐 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Scrolling Navigation** - Anchor links with smooth scrolling
- **Image Sliders** - Swiper.js powered carousels
- **Mobile Menu** - Collapsible navigation for mobile devices
- **Scroll Animations** - WOW.js powered entrance animations
- **Video Backgrounds** - Optimized video content

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Updating Content

- **Text content:** Edit `index.html`
- **Styling:** Modify files in `css/` directory
- **Functionality:** Update `js/main.js`

### Adding New Images

1. Add images to `img/` directory
2. Git LFS will automatically handle large files
3. Update HTML to reference new images

### Modifying Responsive Breakpoints

Edit `css/responsive.css` for mobile/tablet specific styles.

## 📄 License

This project is proprietary to DITA Group Inc.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure Git LFS is properly configured
5. Test locally
6. Submit a pull request

**Note:** This repository uses Git LFS for media files. Make sure to run `git lfs pull` after cloning to download all images and videos properly.
