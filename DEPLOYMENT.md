# Deployment Guide

This guide will help you deploy your React landing page to free hosting platforms.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Test Locally**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view your app.

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect React and deploy automatically
6. Your site will be live in minutes!

**Note:** The `vercel.json` file is already configured for you.

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

**Note:** The `netlify.toml` file is already configured for you.

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/modern-landing-page",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: Surge.sh

1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Build your project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   cd build
   surge
   ```
   Follow the prompts to set up your domain.

## Custom Domain

All platforms above support custom domains:
- **Vercel**: Add domain in project settings
- **Netlify**: Add domain in site settings
- **GitHub Pages**: Add CNAME file in repository

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (should be 14+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Routing Issues
- All platforms are configured to handle React Router (if you add it later)
- The configuration files handle SPA routing correctly

### Styling Issues
- Make sure Bootstrap CSS is imported in `src/index.js`
- Check that all component CSS files are imported

## Need Help?

- Check the main [README.md](./README.md) for more information
- Review the component files in `src/components/`
- All styling is in component-specific CSS files

