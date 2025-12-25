# Sammunat LLC Landing Page

A clean, professional landing page for Sammunat LLC built with React.js and Bootstrap.

## Features

- 🎨 **Clean Design** - Simple, professional saffron-themed design
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast Performance** - Lightweight and optimized
- 🎭 **Smooth Animations** - Subtle animations for better UX
- 🎯 **Easy Navigation** - Smooth scrolling between sections
- 🎨 **Bootstrap Integration** - Professional styling with Bootstrap 5

## Tech Stack

- **React.js** - Frontend framework
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **AOS** - Animate on scroll library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

This project can be easily deployed to various free hosting platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `build`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/modern-landing-page",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## Project Structure

```
modern-landing-page/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── About.js
│   │   ├── Testimonials.js
│   │   ├── CTA.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Sections

1. **Navbar** - Sticky navigation with smooth scroll
2. **Hero** - Welcome section with company introduction
3. **Features** - Key services offered
4. **About** - About Sammunat LLC with statistics
5. **Testimonials** - Client testimonials
6. **CTA** - Contact call-to-action
7. **Footer** - Footer with links and contact information

## Customization

- Colors can be customized in `src/index.css` using CSS variables
- Content can be modified in respective component files
- Styling can be adjusted in component-specific CSS files

## License

This project is open source and available under the MIT License.

