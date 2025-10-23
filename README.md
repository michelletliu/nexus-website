# Nexus - Intercollegiate Entrepreneurship Society

A modern, responsive landing page for Nexus, Southern California's First Intercollegiate Entrepreneurship Society. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts for all devices
- **Modern UI**: Clean, professional design with teal color palette and smooth animations
- **Interactive Components**: Hover effects, smooth scrolling, and mobile navigation
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimized
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🎨 Design System

### Colors
- **Primary Teal**: #14b8a6, #0d9488, #0f766e
- **Gradients**: Custom teal gradients for hero and footer sections
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Playfair Display (serif) for elegant titles
- **Body**: Inter (sans-serif) for readability

### Components
- Header with navigation and mobile menu
- Hero section with call-to-action
- University partners showcase
- Mission and values sections
- Photo gallery
- Join us section with application buttons
- Footer with social links and credits

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Deployment**: Vercel (v0 compatible)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nexus-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and design system
│   ├── layout.tsx       # Root layout with fonts and metadata
│   └── page.tsx         # Main page component
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section
    ├── UniversityPartners.tsx
    ├── WhoWeAre.tsx     # Mission and partners
    ├── WhatWeDo.tsx     # Values and gallery
    ├── JoinUs.tsx       # Application section
    └── Footer.tsx       # Footer with social links
```

## 🎯 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with v0 integration

### Manual Deployment
```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Update the color palette in `src/app/globals.css`:
```css
:root {
  --teal-500: #14b8a6;
  --teal-600: #0d9488;
  /* ... */
}
```

### Content
Edit the content in each component file:
- `src/components/Hero.tsx` - Main title and subtitle
- `src/components/WhoWeAre.tsx` - Mission statement
- `src/components/WhatWeDo.tsx` - Values and description

### Images
Replace placeholder images in the gallery section with actual photos from your events.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Nexus - Southern California's First Intercollegiate Entrepreneurship Society.

## 👥 Credits

**Made by Emily Shen & Michelle Liu**

---

Built with ❤️ for the entrepreneurial community
