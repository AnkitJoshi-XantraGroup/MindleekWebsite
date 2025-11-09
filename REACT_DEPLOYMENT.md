# React Mindleek Website - Deployment Guide for Hostinger

This is the **React version** of the Mindleek website with modern macOS-inspired design, featuring glassmorphism effects, smooth animations, and premium UI.

## 🎨 What's New in React Version

### macOS Design Features:
- ✨ **Glassmorphism Effects** - Frosted glass UI elements
- 🌊 **Smooth Animations** - Framer Motion powered interactions
- 🎯 **Premium Typography** - SF Pro Display & Inter fonts
- 💫 **Gradient Orbs** - Animated background elements
- 🔄 **Scroll Animations** - Elegant reveal effects
- 📱 **Fully Responsive** - Perfect on all devices
- 🌙 **Dark Mode Support** - System preference aware

### Technical Stack:
- ⚛️ React 18
- 🎬 Framer Motion (animations)
- ⚡ Vite (build tool)
- 🎨 Modern CSS with CSS Variables

---

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js 16+ installed
- npm or yarn package manager
- Your Hostinger hosting account
- Basic command line knowledge

---

## 🚀 Quick Start (Local Development)

### Step 1: Install Dependencies

```bash
# Navigate to project directory
cd MindleekWebsite

# Install dependencies
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Your site will open at `http://localhost:3000` 🎉

### Step 3: Make Changes

- Edit components in `src/components/`
- Modify styles in respective `.css` files
- Update colors in `src/index.css` (CSS variables)

---

## 📦 Building for Production

### Step 1: Create Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Step 2: Test Production Build Locally

```bash
npm run preview
```

Visit `http://localhost:4173` to test the production build.

---

## 🌐 Deploy to Hostinger

### Method 1: File Manager (Recommended)

#### Step 1: Build Your Project
```bash
npm run build
```

#### Step 2: Prepare Files
After building, you'll have a `dist` folder containing:
- `index.html`
- `assets/` folder (CSS, JS, images)

#### Step 3: Upload to Hostinger

1. **Log into Hostinger**
   - Go to [hostinger.com](https://www.hostinger.com)
   - Click "Login"
   - Navigate to your hosting panel

2. **Open File Manager**
   - Click "File Manager" in your hosting dashboard
   - Navigate to `public_html` folder

3. **Clean Up**
   - Delete any existing files in `public_html`

4. **Upload Build Files**
   - Upload ALL contents from the `dist` folder
   - Make sure to upload:
     - `index.html` (to root of public_html)
     - `assets/` folder (entire folder)
     - `favicon.png`

5. **Set Permissions**
   - Right-click `index.html` → Permissions → Set to `644`
   - Right-click `assets` folder → Permissions → Set to `755`

#### Step 4: Configure for Single Page App

Create a `.htaccess` file in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes work correctly.

#### Step 5: Test Your Site
- Visit your domain (e.g., `https://mindleek.io`)
- Test all sections and navigation
- Check on mobile devices

---

### Method 2: FTP Upload

#### Step 1: Build Project
```bash
npm run build
```

#### Step 2: Get FTP Credentials

From Hostinger dashboard:
- Host: `ftp.yourdomain.com`
- Username: Your FTP username
- Password: Your FTP password
- Port: `21`

#### Step 3: Connect with FTP Client

Using FileZilla or similar:
1. Open FTP client
2. Connect using credentials above
3. Navigate to `public_html` in remote panel

#### Step 4: Upload Files

1. Delete existing files in `public_html`
2. Upload ALL contents from `dist` folder:
   - Drag and drop `index.html`
   - Drag and drop `assets/` folder
   - Drag and drop any other files

#### Step 5: Create .htaccess

Upload the `.htaccess` file content mentioned above.

---

## 🎨 Customization Guide

### Changing Colors

Edit `/src/index.css`:

```css
:root {
  /* Change these to customize your brand */
  --primary: #007AFF;      /* Main brand color */
  --secondary: #AF52DE;    /* Secondary brand color */
  --accent: #FF9500;       /* Accent color */
}
```

### Updating Content

**Hero Section:** Edit `src/components/Hero.jsx`
```jsx
<h1 className="hero-title">
  Your Custom Headline <span className="text-gradient">with AI</span>
</h1>
```

**Services:** Edit `src/components/Services.jsx`
```jsx
const services = [
  {
    icon: '🚀',
    title: 'Your Service',
    description: 'Your description...',
    // ...
  },
]
```

**Projects:** Edit `src/components/Projects.jsx`
**Contact:** Edit `src/components/Contact.jsx`

### Adding New Components

1. Create component file: `src/components/YourComponent.jsx`
2. Create styles: `src/components/YourComponent.css`
3. Import in `App.jsx`:
```jsx
import YourComponent from './components/YourComponent'
```
4. Add to App:
```jsx
<YourComponent />
```

---

## 🔧 Environment Variables (Optional)

Create `.env` file in root:

```env
VITE_API_URL=https://api.yoursite.com
VITE_CONTACT_EMAIL=hello@mindleek.io
```

Use in components:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

**Important:** Rebuild after changing `.env` file!

---

## ⚡ Performance Optimization

### Already Included:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Lazy loading
- ✅ Minification
- ✅ CSS optimization

### Additional Tips:

1. **Enable Hostinger Caching**
   - In Hostinger panel → Website → Speed
   - Enable caching

2. **Optimize Images**
   - Use WebP format
   - Compress before upload
   - Use `loading="lazy"` attribute

3. **Enable Cloudflare** (if available)
   - Hostinger → Advanced → Cloudflare
   - Enable for CDN benefits

---

## 🐛 Troubleshooting

### Site Shows Blank Page
**Solution:**
- Check browser console (F12) for errors
- Verify all files uploaded correctly
- Check `.htaccess` file exists
- Clear browser cache

### Routes Don't Work (404 Error)
**Solution:**
- Verify `.htaccess` file is uploaded
- Check mod_rewrite is enabled on server
- Contact Hostinger support if needed

### Styles Not Loading
**Solution:**
- Verify `assets` folder uploaded completely
- Check file permissions (644 for files, 755 for folders)
- Clear CDN cache if using Cloudflare

### Animations Not Working
**Solution:**
- Check if `framer-motion` is included in build
- Verify JavaScript is enabled in browser
- Check for console errors

---

## 📱 Testing Checklist

Before going live, test:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Mobile menu functions properly
- [ ] Contact form submits
- [ ] All animations play smoothly
- [ ] Works on mobile devices
- [ ] Works on tablets
- [ ] Works in different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Images load properly
- [ ] Favicon appears
- [ ] HTTPS/SSL is active

---

## 🔐 SSL Certificate Setup

### Step 1: Install SSL

1. Log into Hostinger
2. Go to SSL section
3. Click "Install SSL"
4. Choose "Free SSL" (Let's Encrypt)
5. Wait 10-15 minutes for activation

### Step 2: Force HTTPS

Add to `.htaccess`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📊 Analytics (Optional)

### Google Analytics

Add to `index-react.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

---

## 🔄 Updating Your Site

### Step 1: Make Changes Locally
- Edit your components/styles
- Test changes with `npm run dev`

### Step 2: Build New Version
```bash
npm run build
```

### Step 3: Upload to Hostinger
- Delete old files in `public_html`
- Upload new files from `dist` folder
- Keep `.htaccess` file

### Step 4: Clear Cache
- Clear browser cache (Ctrl+F5)
- Clear Hostinger cache (if enabled)
- Clear Cloudflare cache (if using)

---

## 💡 Pro Tips

1. **Keep Local Copy**: Always keep a local copy of your project

2. **Version Control**: Use Git to track changes
   ```bash
   git add .
   git commit -m "Update website"
   ```

3. **Backup Before Updates**: Download current version before uploading new

4. **Test Locally First**: Always test with `npm run preview` before deploying

5. **Monitor Performance**: Use Google PageSpeed Insights

---

## 🆘 Getting Help

### Hostinger Support
- **Live Chat**: Available 24/7 in dashboard
- **Knowledge Base**: https://support.hostinger.com
- **Email**: Through your account

### React/Vite Issues
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/

### Common Questions

**Q: Do I need to rebuild every time I make changes?**
A: Yes, run `npm run build` after any changes to generate new production files.

**Q: Can I use this with WordPress?**
A: This is a standalone React app. It replaces WordPress, not extends it.

**Q: Will my contact form send emails?**
A: You need to set up a backend or use a service like Formspree/EmailJS for email functionality.

**Q: Can I add a blog?**
A: Yes, but you'll need to integrate a headless CMS or build a custom solution.

---

## 🎉 Congratulations!

Your modern, macOS-inspired Mindleek website is now live!

### Next Steps:
1. ✅ Set up Google Analytics
2. ✅ Submit to Google Search Console
3. ✅ Create social media accounts
4. ✅ Set up email for contact form
5. ✅ Monitor performance and user feedback

---

**Need Help?** Check the troubleshooting section or contact Hostinger support!

**Enjoy your beautiful new website! 🚀**
