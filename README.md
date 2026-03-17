# Solana Yoga - Website Documentation

A premium, custom-designed website for Solana Yoga's instruction services in Miami.

## 🎨 Brand Identity

### Color Palette
- **Primary Colors:**
  - Soft Sage Green: `#A8B5A0`
  - Warm Sand: `#E8DCC4`

- **Secondary Colors:**
  - Deep Terracotta: `#C8997D`
  - Muted Teal: `#87B5B5`

- **Neutrals:**
  - Warm White: `#FAF8F5`
  - Light Grey: `#E5E5E5`
  - Medium Grey: `#9B9B9B`
  - Dark Grey: `#4A4A4A`

- **Accent:**
  - Sunset Coral: `#E09F7D`

### Typography
- **Headers:** Cormorant Garamond (Serif)
- **Body Text:** Inter (Sans-serif)
- **Accent/Script:** Dancing Script (Handwritten)

## 📁 File Structure

```
SolanaYoga/
│
├── index.html                 # Homepage with hero video
├── about.html                 # About page and credentials
├── services.html              # Service offerings
├── service-areas.html         # Miami neighborhood coverage
├── contact.html               # Booking and contact forms
│
├── css/
│   ├── styles.css            # Global styles and components
│   ├── about.css             # About page specific styles
│   ├── services.css          # Services page styles
│   ├── service-areas.css     # Service areas page styles
│   └── contact.css           # Contact page styles
│
├── js/
│   └── main.js               # All JavaScript functionality
│
└── images/
    ├── hero.mp4              # Hero section background video
    ├── pexels-cottonbro-4324101.jpg
    ├── pexels-elly-fairytale-3822688.jpg
    ├── pexels-elly-fairytale-3822864.jpg
    ├── pexels-elly-fairytale-3822906.jpg
    └── pexels-olly-3772502.jpg
```

## ✨ Features

### 1. Homepage (index.html)
- Full-screen video hero section with the provided hero.mp4
- About section brief introduction
- Services overview cards
- Service areas preview
- Testimonials slider with infinite scroll
- Newsletter signup
- Responsive navigation with mobile menu

### 2. About Page (about.html)
- Complete story and journey
- Credentials and certifications grid
- Teaching philosophy (6 core principles)
- Why Miami section
- Call-to-action for consultation

### 3. Services Page (services.html)
- Private Sessions (detailed breakdown)
- Small Group Classes (2-4 people)
- Corporate Wellness Programs
- Special Offerings (Prenatal, Restorative, Outdoor, Athletic)
- What's Included section
- FAQ section
- Session duration options
- "Ideal For" categories

### 4. Service Areas Page (service-areas.html)
- Brickell neighborhood details
- Downtown Miami coverage
- Midtown information
- Coconut Grove description
- Edgewater area
- Each area includes:
  - Popular session locations
  - Neighborhood vibe
  - Best times for practice
  - Notable spots

### 5. Contact Page (contact.html)
- Comprehensive booking form with:
  - Name, email, phone
  - Service type selection
  - Location/neighborhood
  - Experience level
  - Preferred session times
  - Goals and limitations
- Contact information sidebar
- Availability hours
- Consultation card
- Quick FAQ section
- Form validation and success state

## 🎯 Key Functionality

### Mobile Responsive
- Fully responsive design from 320px to 4K displays
- Mobile-first approach
- Hamburger menu for mobile navigation
- Touch-optimized buttons and forms
- Optimized images for different screen sizes

### Interactive Elements
1. **Navigation:**
   - Sticky navbar with scroll effect
   - Mobile menu toggle with animation
   - Active page highlighting
   - Smooth scrolling for anchor links

2. **Animations:**
   - Fade-in on scroll for cards and sections
   - Hover effects on buttons and cards
   - Testimonial slider with infinite scroll
   - Video background with optimization

3. **Forms:**
   - Real-time validation
   - Loading states
   - Success messages
   - Newsletter signup functionality

4. **Performance:**
   - Lazy loading for images
   - Video pause when out of viewport
   - Debounced scroll events
   - Optimized animations

### Accessibility Features
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus trap in mobile menu
- High contrast support
- Screen reader friendly
- Reduced motion support

## 🚀 Deployment Instructions

### Option 1: Simple Hosting (Netlify/Vercel)
1. Create account on Netlify or Vercel
2. Drag and drop the entire folder
3. Site will be live instantly
4. Custom domain can be added in settings

### Option 2: Traditional Web Hosting
1. Upload all files via FTP to your web host
2. Ensure directory structure is maintained
3. Point domain to the hosting directory
4. Ensure SSL certificate is installed

### Option 3: GitHub Pages
1. Create a new repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Select the main branch as source
5. Site will be available at username.github.io/repo-name

## 📧 Contact Form Integration

The contact form currently logs data to console. To make it functional:

1. **Using a Backend Service:**
```javascript
// Replace the setTimeout in js/main.js with:
fetch('https://your-backend.com/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    // Show success message
})
.catch(error => {
    // Handle error
});
```

2. **Using FormSpree (Easy Solution):**
   - Sign up at formspree.io
   - Update form action: `<form action="https://formspree.io/f/YOUR_FORM_ID">`
   - No JavaScript changes needed

3. **Using Netlify Forms:**
   - Add `netlify` attribute to form: `<form netlify>`
   - Forms automatically work on Netlify hosting

## 🔧 Customization Guide

### Updating Content

1. **Change Contact Information:**
   - Update email: Search for `hello@solanayoga.com`
   - Update phone: Search for `(305) 555-1234`
   - Update Instagram: Search for `@solanayoga`

2. **Update Images:**
   - Replace images in `/images` folder
   - Keep same filenames or update references in HTML

3. **Modify Colors:**
   - Edit CSS variables in `css/styles.css` under `:root`
   - All colors will update automatically

4. **Add More Service Areas:**
   - Copy existing area section in `service-areas.html`
   - Update content and image references
   - Add to footer navigation

### SEO Optimization

1. **Title Tags:**
   - Each page has unique, descriptive title
   - Include keywords: "Miami yoga", "private instructor", etc.

2. **Meta Descriptions:**
   - Each page has custom meta description
   - 150-160 characters recommended

3. **Image Alt Text:**
   - All images have descriptive alt attributes
   - Important for accessibility and SEO

4. **Structured Data:**
   - Consider adding Schema.org LocalBusiness markup
   - Example in comment section of index.html

### Google Analytics Integration

Add before closing `</head>` tag:

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

## 📱 Testing Checklist

- [ ] Test all forms submit correctly
- [ ] Mobile menu opens and closes
- [ ] All internal links work
- [ ] External links open in new tab
- [ ] Video plays on homepage
- [ ] Images load properly
- [ ] Responsive on mobile (320px+)
- [ ] Responsive on tablet (768px+)
- [ ] Responsive on desktop (1024px+)
- [ ] Back to top button appears
- [ ] Newsletter signup works
- [ ] Contact form validation works
- [ ] Test in Chrome
- [ ] Test in Safari
- [ ] Test in Firefox
- [ ] Test in Edge

## 🎯 Performance Optimization

Current optimizations:
- ✅ Minified CSS (can be further compressed)
- ✅ Lazy loading images
- ✅ Video optimization (pauses when out of view)
- ✅ Debounced scroll events
- ✅ Compressed images
- ✅ Modern CSS Grid/Flexbox (no heavy frameworks)

Recommended future optimizations:
- Convert images to WebP format
- Implement service worker for offline capability
- Add resource hints (preconnect, prefetch)
- Enable Gzip compression on server
- Implement critical CSS

## 📞 Support

For questions or issues with the website:
- Review this documentation first
- Check browser console for errors
- Ensure all files are uploaded correctly
- Verify file paths are correct

## 🔐 Security Best Practices

1. Always use HTTPS (SSL certificate)
2. Implement CAPTCHA on contact form to prevent spam
3. Sanitize form inputs on backend
4. Keep dependencies updated
5. Implement CSP (Content Security Policy) headers

## 📝 License

This website is custom-built for Solana Yoga.
All rights reserved © 2024 Solana Yoga

---

**Built with care for mindful movement and authentic connection.**

Last Updated: November 2024
# SolanaYoga
