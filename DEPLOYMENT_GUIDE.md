# Mindleek Website - Hostinger Deployment Guide

This guide will walk you through deploying your Mindleek website to Hostinger hosting.

## 📋 Prerequisites

Before you begin, make sure you have:
- An active Hostinger hosting account
- Your Hostinger login credentials
- The website files (downloaded from this repository)

## 📁 Website Files

Your website consists of the following files:

```
MindleekWebsite/
├── index.html           # Main HTML file
├── styles.css           # Stylesheet
├── script.js            # JavaScript functionality
├── favicon.png          # Website icon
└── DEPLOYMENT_GUIDE.md  # This file
```

## 🚀 Deployment Steps

### Method 1: Using Hostinger File Manager (Recommended for Beginners)

#### Step 1: Log into Hostinger

1. Go to [https://www.hostinger.com](https://www.hostinger.com)
2. Click "Login" in the top right corner
3. Enter your email and password

#### Step 2: Access File Manager

1. From your Hostinger dashboard, locate your hosting plan
2. Click on "File Manager" or "Manage" then "File Manager"
3. You'll be taken to the file manager interface

#### Step 3: Navigate to public_html

1. In the file manager, find and open the `public_html` folder
   - This is the root directory where your website files need to be placed
   - Anything in this folder will be publicly accessible on your domain

#### Step 4: Clean Up Existing Files (if needed)

1. If there are any default files (like `index.html`, `default.html`, etc.), you can:
   - Select them by clicking the checkboxes
   - Click "Delete" or right-click and choose "Delete"
   - Confirm the deletion

#### Step 5: Upload Your Website Files

1. Click the "Upload" button in the file manager toolbar
2. Click "Select Files" or drag and drop your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `favicon.png`
3. Wait for the upload to complete (you'll see a progress bar)
4. Verify all files are uploaded by checking the file list

#### Step 6: Set Permissions (Usually Not Required)

Hostinger typically sets correct permissions automatically, but if needed:
1. Right-click on `index.html`
2. Select "Permissions" or "Change Permissions"
3. Set to `644` (Read and Write for owner, Read-only for others)

#### Step 7: Test Your Website

1. Open your web browser
2. Go to your domain (e.g., `https://yourdomain.com` or `https://mindleek.io`)
3. Your website should now be live!

---

### Method 2: Using FTP Client (For Advanced Users)

#### Step 1: Get Your FTP Credentials

1. Log into your Hostinger account
2. Go to your hosting dashboard
3. Find "FTP Accounts" or "FTP Access"
4. Note down:
   - **FTP Host/Server**: Usually `ftp.yourdomain.com` or an IP address
   - **FTP Username**: Your FTP username
   - **FTP Password**: Your FTP password
   - **Port**: Usually `21` for FTP or `22` for SFTP

#### Step 2: Download an FTP Client

If you don't have one, download:
- **FileZilla** (Free): [https://filezilla-project.org/](https://filezilla-project.org/)
- **Cyberduck** (Free, Mac): [https://cyberduck.io/](https://cyberduck.io/)
- **WinSCP** (Free, Windows): [https://winscp.net/](https://winscp.net/)

#### Step 3: Connect to Your Server

**Using FileZilla:**
1. Open FileZilla
2. Click "File" → "Site Manager" → "New Site"
3. Enter your FTP credentials:
   - Host: `ftp.yourdomain.com`
   - Port: `21`
   - Protocol: `FTP - File Transfer Protocol`
   - Encryption: `Use explicit FTP over TLS if available`
   - Logon Type: `Normal`
   - User: Your FTP username
   - Password: Your FTP password
4. Click "Connect"

#### Step 4: Navigate to public_html

1. In the right panel (Remote site), navigate to the `public_html` folder
2. In the left panel (Local site), navigate to where you saved the website files

#### Step 5: Upload Files

1. Select all website files in the left panel:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `favicon.png`
2. Drag them to the `public_html` folder in the right panel
3. Wait for the transfer to complete

#### Step 6: Verify Upload

1. Check that all files are present in the `public_html` folder
2. File sizes should match the original files

#### Step 7: Test Your Website

1. Open your browser
2. Visit your domain
3. Your website should be live!

---

## 🔧 Customization Guide

### Updating Content

#### 1. Changing Text Content

To modify text on your website:
1. Open `index.html` in a text editor (Notepad++, VS Code, Sublime Text)
2. Find the section you want to change
3. Edit the text between the HTML tags
4. Save the file
5. Re-upload to your server

**Example:**
```html
<!-- Original -->
<h1 class="hero-title">We bring ideas to life with AI</h1>

<!-- Modified -->
<h1 class="hero-title">Your Custom Headline Here</h1>
```

#### 2. Changing Colors

To change the color scheme:
1. Open `styles.css`
2. Find the `:root` section at the top
3. Modify the color values:

```css
:root {
    /* Change these colors */
    --primary-color: #4B73FF;      /* Main brand color */
    --secondary-color: #FF66F4;    /* Accent color */
    --accent-color: #FE7B02;       /* Highlight color */
}
```

4. Save and re-upload `styles.css`

#### 3. Adding Images

To add real images instead of placeholders:
1. Prepare your images (recommended: JPG or PNG, optimized for web)
2. Upload images to `public_html` folder (or create an `images` subfolder)
3. Edit `index.html` to reference your images:

**In Project Cards:**
```html
<!-- Original -->
<div class="project-placeholder">AI Product</div>

<!-- Replace with -->
<img src="images/project1.jpg" alt="Project Name">
```

4. Save and upload changes

#### 4. Updating Contact Form

**Important:** The contact form currently shows messages in the browser but doesn't send emails.

To make it functional, you have two options:

**Option A: Use a Form Service (Easiest)**
1. Sign up for a service like:
   - [Formspree](https://formspree.io/) (Free tier available)
   - [Getform](https://getform.io/) (Free tier available)
   - [EmailJS](https://www.emailjs.com/) (Free tier available)

2. Follow their integration instructions
3. Update the form in `index.html` with their code

**Option B: Use PHP Email (Requires PHP knowledge)**
1. Create a `contact.php` file with email sending code
2. Update the form action in `index.html`:
```html
<form class="contact-form" action="contact.php" method="POST">
```

---

## 🌐 Setting Up Your Domain

### If You Have a New Domain

1. **Purchase Domain** (if not already done):
   - You can buy through Hostinger or transfer from another registrar

2. **Point Domain to Hosting**:
   - Usually automatic if purchased through Hostinger
   - If external domain, update nameservers to Hostinger's:
     - `ns1.dns-parking.com`
     - `ns2.dns-parking.com`
   - DNS propagation can take 24-48 hours

### Setting Up SSL Certificate (HTTPS)

1. Log into Hostinger dashboard
2. Find "SSL" or "Security" section
3. Click "Install SSL" or "Setup SSL"
4. Choose "Free SSL" (Let's Encrypt)
5. Click "Install" or "Activate"
6. Wait 10-15 minutes for activation
7. Force HTTPS redirect (optional):
   - Create/edit `.htaccess` file in `public_html`
   - Add this code:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Website loads at your domain
- [ ] All pages/sections are accessible
- [ ] Navigation menu works correctly
- [ ] Mobile menu works on mobile devices
- [ ] Contact form displays properly
- [ ] All text is readable and correct
- [ ] Colors and fonts look correct
- [ ] Website is responsive on mobile devices
- [ ] Favicon appears in browser tab
- [ ] HTTPS/SSL is working (padlock in address bar)

---

## 🐛 Troubleshooting

### Website Shows "Index of /" or File List
**Solution:** Make sure your file is named exactly `index.html` (lowercase)

### 404 Error - Page Not Found
**Solution:** Verify files are in the `public_html` folder, not in a subfolder

### Changes Don't Appear
**Solutions:**
1. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Wait a few minutes for changes to propagate
3. Try accessing in incognito/private browsing mode

### Styling Looks Broken
**Solution:**
1. Verify `styles.css` is in the same folder as `index.html`
2. Check file names are exactly correct (case-sensitive)

### Mobile Menu Not Working
**Solution:**
1. Verify `script.js` is uploaded
2. Check browser console for errors (F12 → Console tab)

### SSL Certificate Not Working
**Solutions:**
1. Wait 15-30 minutes after installation
2. Clear browser cache
3. Contact Hostinger support if issue persists

---

## 📞 Support Resources

### Hostinger Support
- **Knowledge Base**: [https://support.hostinger.com](https://support.hostinger.com)
- **Live Chat**: Available 24/7 from your Hostinger dashboard
- **Email Support**: Available through your account

### Website Help
- For HTML/CSS questions: [MDN Web Docs](https://developer.mozilla.org/)
- For general web hosting: [Hostinger Tutorials](https://www.hostinger.com/tutorials)

---

## 🎉 Congratulations!

Your Mindleek website should now be live and accessible to the world!

### Next Steps:
1. Test your website thoroughly
2. Share your website URL with colleagues/clients
3. Consider adding Google Analytics for visitor tracking
4. Set up regular backups through Hostinger
5. Keep your content updated

---

## 📝 Notes

- **Backups**: Hostinger usually provides automatic backups, but it's good practice to keep local copies
- **Updates**: When updating, always keep backup copies of your current files
- **Performance**: Consider enabling caching in Hostinger dashboard for faster loading
- **Security**: Keep your Hostinger login credentials secure

---

**Need help?** If you encounter any issues not covered in this guide, don't hesitate to contact Hostinger support or consult their extensive knowledge base.

Good luck with your website! 🚀
