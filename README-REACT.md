# Mindleek Website - React with macOS Design

![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-FF0055)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![macOS Design](https://img.shields.io/badge/Design-macOS_Inspired-000000)

A stunning, production-ready React website for Mindleek AI Product Studio, featuring **macOS-inspired design** with glassmorphism effects, smooth animations, and premium UI/UX.

## ✨ Features

### 🎨 macOS-Inspired Design
- **Glassmorphism Effects**: Frosted glass UI elements with backdrop blur
- **Smooth Animations**: Powered by Framer Motion
- **Gradient Orbs**: Animated background elements
- **Premium Typography**: SF Pro Display & Inter fonts
- **Elegant Shadows**: Subtle depth and layering
- **Dark Mode Support**: Respects system preferences

### 🚀 Technical Features
- **React 18**: Latest React with hooks
- **Vite**: Lightning-fast build tool
- **Framer Motion**: Buttery-smooth animations
- **Responsive**: Perfect on all devices
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Code splitting & lazy loading
- **Accessibility**: WCAG compliant

### 📱 Sections
1. **Hero** - Eye-catching introduction with animated gradients
2. **Services** - Three key offerings with hover effects
3. **Projects** - Portfolio showcase
4. **Contact** - Functional form with validation
5. **Footer** - Company info and links

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation

```bash
# 1. Navigate to project
cd MindleekWebsite

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:3000` 🎉

---

## 📁 Project Structure

```
MindleekWebsite/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation with glassmorphism
│   │   ├── Hero.jsx         # Hero section with gradients
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Projects.jsx     # Projects portfolio
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global app styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & CSS variables
├── public/
│   └── favicon.png          # Website icon
├── index-react.html         # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README-REACT.md          # This file
```

---

## 🛠️ Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🎨 Customization

### Change Brand Colors

Edit `src/index.css`:

```css
:root {
  --primary: #007AFF;      /* macOS Blue */
  --secondary: #AF52DE;    /* macOS Purple */
  --accent: #FF9500;       /* macOS Orange */
}
```

### Update Content

**Hero Section** (`src/components/Hero.jsx`):
```jsx
<h1 className="hero-title">
  Your Headline <span className="text-gradient">with AI</span>
</h1>
```

**Services** (`src/components/Services.jsx`):
```jsx
const services = [
  {
    icon: '🚀',
    title: 'Your Service',
    description: 'Description here...',
    gradient: 'linear-gradient(135deg, #007AFF, #5AC8FA)',
  },
  // Add more services...
]
```

### Add New Component

1. Create file: `src/components/NewSection.jsx`
2. Create styles: `src/components/NewSection.css`
3. Import in `App.jsx`:
```jsx
import NewSection from './components/NewSection'
```
4. Add to render:
```jsx
<NewSection />
```

---

## 📦 Deployment to Hostinger

### Quick Deploy (3 Steps)

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload**
   - Log into Hostinger File Manager
   - Upload contents of `dist/` folder to `public_html/`

3. **Configure**
   - Create `.htaccess` file for SPA routing

📖 **Full Guide**: See [REACT_DEPLOYMENT.md](REACT_DEPLOYMENT.md)

---

## 🎯 Component Overview

### Navbar
- Fixed position with glassmorphism
- Smooth scroll navigation
- Responsive mobile menu
- Animated hamburger icon

### Hero
- Animated gradient orbs
- Glass badge
- Call-to-action buttons
- Stats counter
- Scroll indicator

### Services
- Three service cards
- Hover animations
- Icon gradients
- Scroll reveal

### Projects
- Portfolio grid
- Hover overlays
- Category badges
- Project details

### Contact
- Form validation
- Success/error states
- Contact info cards
- Animated submit

### Footer
- Multi-column layout
- Social links
- Animated heart
- Company info

---

## 🎬 Animations

All animations use **Framer Motion** for smooth, performant transitions:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Animation Types:
- **Fade In**: Elements fade in on load
- **Slide Up**: Content slides up on scroll
- **Hover**: Interactive hover states
- **Stagger**: Sequential animations
- **Page Transitions**: Smooth navigation

---

## 🌙 Dark Mode

Automatic dark mode based on system preferences:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f5f5f7;
    --bg-primary: #000000;
    /* ... */
  }
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */
```

All components are fully responsive with mobile-first design.

---

## ⚡ Performance

### Optimization Features:
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Lazy loading
- ✅ Minification
- ✅ Compression

### Lighthouse Scores (Target):
- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

---

## 🔧 Environment Variables

Create `.env` file:

```env
VITE_API_URL=https://api.yoursite.com
VITE_CONTACT_EMAIL=hello@mindleek.io
```

Usage:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

**Note**: Rebuild after changing `.env`!

---

## 🐛 Troubleshooting

### Common Issues

**Blank page after deployment:**
- Check console for errors
- Verify `.htaccess` file exists
- Check file paths in build

**Animations not working:**
- Verify `framer-motion` is installed
- Check browser compatibility
- Disable animations for motion-sensitive users

**Build fails:**
- Delete `node_modules`
- Run `npm install` again
- Check Node.js version (16+)

---

## 📚 Dependencies

### Main Dependencies:
- `react` - UI library
- `react-dom` - React DOM renderer
- `framer-motion` - Animation library
- `react-intersection-observer` - Scroll animations

### Dev Dependencies:
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ iOS Safari (latest)
- ✅ Chrome Mobile (latest)

---

## 📖 Learn More

### React
- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

### Vite
- [Vite Documentation](https://vitejs.dev)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🎯 Comparison: Static vs React

| Feature | Static Version | React Version |
|---------|---------------|---------------|
| **Technology** | HTML/CSS/JS | React + Vite |
| **Animations** | CSS only | Framer Motion |
| **Build Process** | None | Required |
| **Bundle Size** | ~50KB | ~200KB (optimized) |
| **Deployment** | Direct upload | Build then upload |
| **Maintainability** | Good | Excellent |
| **Scalability** | Limited | Unlimited |
| **Learning Curve** | Easy | Moderate |

---

## 🚀 What's Next?

### Suggested Enhancements:
1. **Blog Section** - Add a blog with MDX
2. **CMS Integration** - Connect to headless CMS
3. **Email Backend** - Set up contact form email
4. **Analytics** - Add Google Analytics
5. **SEO** - Implement advanced SEO
6. **Testing** - Add unit & E2E tests
7. **i18n** - Multi-language support

---

## 📝 License

This project is created for Mindleek Limited.

---

## 🙏 Acknowledgments

- Design inspired by Apple's macOS
- Built with modern web technologies
- Optimized for performance and accessibility

---

## 📞 Support

**For Deployment Help:**
- See [REACT_DEPLOYMENT.md](REACT_DEPLOYMENT.md)
- Hostinger Support: 24/7 live chat

**For Development Help:**
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Framer Motion: https://www.framer.com/motion/

---

**Made with ♥ and AI** | **Mindleek Limited** | **2025**

---

🎉 **Enjoy your beautiful, modern website!**
