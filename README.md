# Mansory Mobilje - Custom Furniture Website

A modern, responsive website for Mansory Mobilje, a custom furniture manufacturer. Features an interactive product customizer, portfolio gallery with detailed project pages, and an elegant user interface.

![Mansory Mobilje](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## ✨ Features

- **Interactive Product Customizer** - Real-time furniture color customization
- **Portfolio Gallery** - Showcase of completed projects
- **Project Detail Pages** - Dedicated pages for each project with:
  - Multiple project images in elegant gallery layout
  - Full-screen image carousel with swipe support
  - Project descriptions and details
  - "Request This Design" call-to-action
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Touch Gestures** - Swipe navigation on mobile devices
- **Smooth Animations** - Professional transitions and effects

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling (via CDN)
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mansory-mobilje.git
   cd mansory-mobilje
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   # Edit .env.local if you need to add API keys
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
mansory-mobilje/
├── assets/
│   └── images/           # Logo and furniture images
├── components/
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   ├── Gallery.tsx       # Portfolio gallery grid
│   ├── Hero.tsx          # Hero section
│   ├── ImageCarousel.tsx # Full-screen image viewer
│   ├── Navbar.tsx        # Navigation bar
│   ├── ProductCustomizer.tsx  # Color customization tool
│   └── ProjectDetail.tsx # Individual project pages
├── data/
│   └── projects.ts       # Project data with images & descriptions
├── App.tsx               # Main app with routing
├── index.tsx             # Entry point
├── types.ts              # TypeScript type definitions
└── index.html            # HTML template
```

## 🎨 Customization

### Adding New Projects

Edit `data/projects.ts`:

```typescript
{
  id: 7,
  title: 'Your Project Name',
  category: 'Category',
  image: 'thumbnail-url.jpg',
  description: 'Project description...',
  images: [
    'image1.jpg',  // Main featured image
    'image2.jpg',
    'image3.jpg',
    // Add more images...
  ]
}
```

### Color Scheme

Colors are defined in `index.html`:
- Gold: `#D4AF37`
- Dark: `#121212`

### Contact Information

Update contact details in `components/Contact.tsx` and `components/Navbar.tsx`.

## 📱 Mobile Features

- **Touch Swipe Navigation** - Swipe left/right in image carousel
- **Responsive Grid Layouts** - Adapts to all screen sizes
- **Mobile-Optimized UI** - Hidden arrow buttons on mobile, touch-friendly controls

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/mansory-mobilje/',
     // ... rest of config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Use gh-pages or manual upload to GitHub Pages
   ```

### Vercel

1. Import your GitHub repository
2. Vercel will auto-detect Vite
3. Deploy!

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

## 📄 License

This project is private and proprietary to Mansory Mobilje.

## 📞 Contact

**Mansory Mobilje**
- Phone: +383 45 297 275
- Email: mansorymobilje@gmail.com

---

Built with ❤️ for Mansory Mobilje
