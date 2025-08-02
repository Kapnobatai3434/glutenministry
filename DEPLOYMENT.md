# Cloudflare Pages Deployment Guide

## Overview
This Next.js blog application is configured for static export and deployment to Cloudflare Pages.

## Build Configuration
The application is configured with:
- **Static Export**: `output: 'export'` in `next.config.ts`
- **Build Directory**: `dist/` (configured in Next.js config)
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slashes**: Enabled for better static hosting

## Deployment Steps

### Option 1: Automatic Git Deployment
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave empty)

### Option 2: Manual Upload
1. Build the project locally:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist/` directory to Cloudflare Pages

## Build Settings for Cloudflare Pages

```
Build command: npm run build
Build output directory: dist
Root directory: (leave empty)
Environment variables: (none required)
```

## Features Included

✅ **Static Site Generation**: All pages pre-rendered at build time  
✅ **Blog Posts**: Markdown-based blog with front matter  
✅ **Decap CMS**: Admin interface at `/admin`  
✅ **Responsive Design**: Mobile-first with Tailwind CSS  
✅ **Typography**: Beautiful prose styling with @tailwindcss/typography  
✅ **Client-side Routing**: SPA-style navigation with fallbacks  

## File Structure

```
dist/
├── index.html              # Homepage
├── about/index.html         # About page
├── blog/index.html          # Blog listing
├── blog/[slug]/index.html   # Individual blog posts
├── admin/index.html         # Decap CMS admin
├── _next/                   # Next.js assets
├── _redirects               # Cloudflare Pages redirects
└── [static assets]          # Images, icons, etc.
```

## Redirects Configuration

The `_redirects` file handles:
- Admin route redirection (`/admin` → `/admin/index.html`)
- SPA fallback for client-side routing

## Content Management

- **Admin Interface**: Access at `https://yourdomain.com/admin`
- **Blog Posts**: Stored in `content/blog/` as Markdown files
- **Pages**: Stored in `content/pages/` as Markdown files
- **Media**: Upload to `public/images/` directory

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`
- Verify Next.js version compatibility

### Admin Interface Not Working
- Ensure Decap CMS is properly configured in `public/admin/config.yml`
- Check that the admin route redirects correctly
- Verify Git Gateway configuration for content management

### Images Not Loading
- Use relative paths for images in `public/` directory
- Ensure `images.unoptimized: true` is set in `next.config.ts`

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Static Assets**: Efficiently cached by Cloudflare's CDN
- **Bundle Size**: Minimized with Next.js optimization