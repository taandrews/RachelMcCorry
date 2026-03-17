# 🚀 Quick Start Guide - Solana Yoga Website

## What You Have

A complete, production-ready website with:
- ✅ 5 fully functional pages
- ✅ Mobile-responsive design
- ✅ Contact forms
- ✅ Beautiful animations
- ✅ SEO optimized
- ✅ Hero video background
- ✅ Professional imagery

## Immediate Next Steps

### 1. Update Contact Information (5 minutes)

**Search and replace these across all HTML files:**

```
hello@solanayoga.com           →  YOUR_EMAIL@domain.com
(305) 555-1234                 →  YOUR_PHONE_NUMBER
@solanayoga                    →  @YOUR_INSTAGRAM
```

**Files to update:**
- index.html
- about.html
- services.html
- service-areas.html
- contact.html

### 2. Test the Website Locally

1. Open `index.html` in your browser
2. Click through all pages
3. Test the mobile menu (resize browser window)
4. Try submitting the contact form
5. Check all links work

### 3. Deploy to the Web

**Easiest Method - Netlify (Recommended):**

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag and drop your entire "SolanaYoga" folder
4. Site goes live immediately!
5. Get free HTTPS and custom domain support

**Alternative - Vercel:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import project
4. Deploy (takes 30 seconds)

### 4. Set Up Contact Form Submission

**Option A - FormSpree (Free & Easy):**

1. Sign up at [formspree.io](https://formspree.io)
2. Create new form
3. Copy your form endpoint
4. Update `contact.html` line 130:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

**Option B - Netlify Forms (If using Netlify):**

Just add `netlify` to the form tag:
```html
<form id="contactForm" netlify>
```

### 5. Add Google Analytics (Optional)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (looks like: G-XXXXXXXXXX)
3. Add this to each HTML page before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## Common Customizations

### Change Brand Colors

Edit `css/styles.css` lines 11-24:

```css
:root {
    --sage-green: #A8B5A0;      /* Change to your color */
    --warm-sand: #E8DCC4;       /* Change to your color */
    --terracotta: #C8997D;      /* Change to your color */
    --muted-teal: #87B5B5;      /* Change to your color */
    --sunset-coral: #E09F7D;    /* Change to your color */
}
```

### Add More Photos

1. Place new photos in `/images` folder
2. Update image references in HTML files
3. Recommended image sizes:
   - Hero images: 1920x1080px
   - Section images: 1200x800px
   - Thumbnails: 600x400px

### Update Service Areas

To add more Miami neighborhoods:

1. Open `service-areas.html`
2. Copy section with id="brickell" (lines 70-130)
3. Paste below and update:
   - Section ID
   - Neighborhood name
   - Description
   - Image reference
   - Highlights

### Modify Testimonials

Edit `index.html` around line 180:
- Change client names
- Update testimonial text
- Modify neighborhoods

## Website Pages Overview

| Page | Purpose | Key Features |
|------|---------|--------------|
| **index.html** | Homepage | Video hero, services overview, testimonials |
| **about.html** | About | Story, credentials, philosophy |
| **services.html** | Services | Private, group, corporate offerings |
| **service-areas.html** | Locations | Miami neighborhood coverage |
| **contact.html** | Contact/Booking | Form, contact info, FAQ |

## Mobile Responsiveness

The site automatically adjusts for:
- 📱 Phones (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Laptops (1024px - 1439px)
- 🖥️ Desktops (1440px+)

**Test on mobile:** Right-click in browser → "Inspect" → Click device icon

## Performance Tips

✅ **Already Optimized:**
- Lazy loading images
- Optimized video playback
- Minimal JavaScript
- Clean, efficient CSS
- Fast page load times

🎯 **Further Optimizations:**
- Compress images with [tinypng.com](https://tinypng.com)
- Convert images to WebP format
- Enable Gzip on your server
- Add CDN (Netlify/Vercel do this automatically)

## Troubleshooting

**Video not playing?**
- Check file path: `images/hero.mp4`
- Verify video file is in images folder
- Try different browser

**Mobile menu not working?**
- Clear browser cache
- Check JavaScript is enabled
- Verify `js/main.js` is loading

**Forms not submitting?**
- Check console for errors (F12)
- Ensure you've set up FormSpree or backend
- Test in different browser

**Images not loading?**
- Verify file paths are correct
- Check images are in `/images` folder
- Ensure file names match exactly (case-sensitive)

## Getting Help

1. Read the full README.md
2. Check browser console for errors (F12)
3. Verify all files uploaded correctly
4. Test in different browsers

## Launch Checklist

Before going live:

- [ ] Updated all contact information
- [ ] Tested on mobile device
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] All forms work
- [ ] All links function
- [ ] Images load properly
- [ ] Video plays correctly
- [ ] Checked spelling/grammar
- [ ] Set up SSL certificate (HTTPS)
- [ ] Connected custom domain
- [ ] Set up form submission
- [ ] Added Google Analytics
- [ ] Tested in Chrome
- [ ] Tested in Safari
- [ ] Tested in Firefox
- [ ] Submitted to Google Search Console

## Pro Tips

💡 **Update regularly:** Fresh testimonials and content improve SEO

💡 **Monitor forms:** Check form submissions weekly

💡 **Backup everything:** Keep a copy of all files

💡 **Track analytics:** Monitor visitor behavior and popular pages

💡 **Test changes:** Always test updates locally before deploying

💡 **Mobile first:** Most visitors will be on phones

## Support Resources

- **HTML/CSS Help:** [MDN Web Docs](https://developer.mozilla.org)
- **Form Services:** [FormSpree](https://formspree.io), [Netlify Forms](https://www.netlify.com/products/forms/)
- **Image Optimization:** [TinyPNG](https://tinypng.com)
- **Hosting:** [Netlify](https://netlify.com), [Vercel](https://vercel.com)
- **Domain Names:** [Namecheap](https://namecheap.com), [Google Domains](https://domains.google)

---

## 🎉 You're Ready to Launch!

Your beautiful, professional yoga website is complete and ready for the world.

**Questions?** Review the detailed README.md for comprehensive documentation.

**Good luck with your Miami yoga business! 🧘**
