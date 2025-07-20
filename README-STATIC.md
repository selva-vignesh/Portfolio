# Static Portfolio Website

A complete static version of the portfolio website - no backend required!

## Features

✨ **Pure Static Website** - No server needed, just HTML/CSS/JS
🚀 **Easy Deployment** - Works on any static hosting (GitHub Pages, Netlify, Vercel)
📱 **Fully Responsive** - Beautiful on desktop, tablet, and mobile
🎨 **Modern Design** - Dark/light themes with smooth animations
⚡ **Fast Loading** - Optimized static assets

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your portfolio

### 3. Build for Production
```bash
npm run build
```
Built files will be in the `dist/` folder

## Deployment Options

### GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Set source to "GitHub Actions" or "Deploy from branch"
4. Use the included GitHub Actions workflow

### Netlify (Free)
1. Drag and drop the `dist/` folder to Netlify
2. Or connect your GitHub repository for automatic deployments

### Vercel (Free)
1. Import your GitHub repository
2. Vercel will automatically detect it's a Vite project

### Any Static Host
Upload the contents of the `dist/` folder to any web server

## Customization

### Personal Information
Edit `src/lib/constants.tsx`:
- Update your name, title, description
- Add your skills and experience
- Update project portfolio
- Change contact information

### Styling
- `src/index.css` - Main styles and color scheme
- `tailwind.config.ts` - Tailwind CSS configuration

### Contact Form
The contact form uses `mailto:` links by default. To use a form service:

1. **Formspree** (Free):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Netlify Forms** (Free with Netlify):
   ```html
   <form netlify>
   ```

3. **Getform** (Free tier available):
   ```html
   <form action="https://getform.io/f/YOUR_FORM_ID" method="POST">
   ```

## Project Structure

```
portfolio-website-static/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities and constants
│   └── pages/         # Page components
├── public/            # Static assets
├── dist/              # Built files (after npm run build)
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
└── tailwind.config.ts # Tailwind CSS config
```

## Key Differences from Full-Stack Version

- ❌ No backend server required
- ❌ No database dependencies
- ❌ No API routes
- ✅ All data stored in constants
- ✅ Contact form uses mailto or form services
- ✅ 100% static - works on any host

## Environment Variables

No environment variables needed! Everything is configured in the code.

## Performance

- **Build time**: ~30 seconds
- **Bundle size**: ~500KB gzipped
- **Load time**: <2 seconds on fast connections

This is a complete, production-ready static website that showcases your embedded systems and firmware development expertise professionally.