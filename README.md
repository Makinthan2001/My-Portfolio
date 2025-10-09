# Makinthan's Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with cutting-edge technologies for optimal performance and user experience.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and visually appealing interface
- 🌓 **Dark/Light Theme** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Built with Next.js 15 and optimized for speed
- 🎭 **Smooth Animations** - Engaging animations with Framer Motion
- 💅 **Beautiful UI** - Styled with Tailwind CSS v4 and custom components
- 📧 **Contact Form** - Functional contact form with EmailJS integration
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Production Ready** - Optimized build and deployment ready
- 🎨 **Custom Favicon** - Personalized branding throughout
- 📊 **Interactive Elements** - Hover effects, animations, and smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Theme**: Custom React Context with localStorage persistence
- **Notifications**: React Hot Toast
- **Email Service**: EmailJS
- **Fonts**: Google Fonts (Geist, Playfair Display)
- **Development**: Turbopack for fast development builds
- **Deployment**: Vercel ready

## 🎯 Sections

- **Hero** - Introduction with profile image and call-to-action
- **About** - Personal story and background
- **Skills** - Technical skills with animated logos
- **Projects** - Portfolio projects with pink/violet themed cards
- **Education** - Academic background with timeline
- **Contact** - Contact form and social media links
- **Footer** - Additional contact info and branding

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Makinthan2001/My-Portfolio.git
cd madhan-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables** (Optional - for contact form)
   Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAIL_API_ID=your_emailjs_public_key
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update your personal information in these key files:

**`constants/index.tsx`** - Main data file:

```typescript
export const HERO = {
  name: "Your Name",
  greet: "Your Title",
  description: "Your description",
  profileImg: "/path/to/your/image.jpg",
};

export const SOCIAL_MEDIA_LINKS = [
  // Your social media links
];

export const PROJECTS = [
  // Your projects
];

export const EDUCATION = [
  // Your education details
];
```

**`app/layout.tsx`** - SEO metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Software Developer",
  description: "Portfolio website of Your Name...",
};
```

### Assets & Images

1. **Profile Image**: Add to `assets/` folder and update `constants/index.tsx`
2. **Project Images**: Add to `assets/` folder and reference in `PROJECTS` array
3. **Favicon**: Add `favicon.png` and `apple-touch-icon.png` to `public/` folder
4. **Resume**: Add `Your-Name-Resume.pdf` to `public/` folder

### Theme Colors

The portfolio uses a pink/violet color scheme. You can customize colors in:

- `app/globals.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind configuration
- Component files - Individual styling

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Create EmailJS Account**

   - Visit [EmailJS](https://emailjs.com) and create an account
   - Create a new service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

2. **Configure Environment Variables**

   ```env
   NEXT_PUBLIC_EMAIL_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAIL_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAIL_API_ID=your_public_key
   ```

3. **Template Variables**
   Your EmailJS template should include:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Optimized layout with reduced spacing
- **Tablet**: Medium spacing and adjusted components
- **Desktop**: Full layout with comfortable spacing
- **4K+**: Scaled appropriately for large screens

## 🎭 Animation Features

- **Page Transitions**: Smooth animations when scrolling
- **Component Animations**: Individual elements animate into view
- **Hover Effects**: Interactive hover states on cards and buttons
- **Theme Transitions**: Smooth color transitions when switching themes
- **Skill Animations**: Animated skill logos and progress indicators

## 📋 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**

   - Import your repository on [Vercel](https://vercel.com)
   - Vercel will auto-detect Next.js configuration

2. **Environment Variables**

   - Add your EmailJS environment variables in Vercel dashboard

3. **Deploy**
   - Every push to main branch will trigger automatic deployment

### Alternative Platforms

- **Netlify**: Full support for Next.js
- **Railway**: Easy deployment with git integration
- **DigitalOcean App Platform**: Container-based deployment
- **AWS Amplify**: Full-stack deployment solution

## 📁 Project Structure

```
madhan-portfolio/
├── app/                     # Next.js 15 App Router
│   ├── globals.css         # Global styles & animations
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── favicon.ico        # Default favicon
├── components/             # React components
│   ├── About.tsx          # About section
│   ├── ContactForm.tsx    # Contact form with EmailJS
│   ├── EducationSection.tsx # Education timeline
│   ├── Footer.tsx         # Footer with social links
│   ├── Hero.tsx           # Landing section
│   ├── Navbar.tsx         # Navigation with theme toggle
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills with animations
│   └── ...               # Additional components
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme management
├── constants/             # Site data and configuration
│   └── index.tsx          # All site content and data
├── assets/               # Images and media files
│   ├── hero-image.png    # Profile/hero images
│   ├── project1.png      # Project screenshots
│   └── ...              # Skill icons, etc.
├── public/               # Static files
│   ├── favicon.png       # Custom favicon
│   ├── apple-touch-icon.png # iOS icon
│   └── resume.pdf        # Downloadable resume
└── ...                  # Config files
```

## 🔧 Advanced Customization

### Adding New Sections

1. **Create Component**

   ```typescript
   // components/NewSection.tsx
   export const NewSection = () => {
     return <section id="new-section">...</section>;
   };
   ```

2. **Add to Constants**

   ```typescript
   // constants/index.tsx
   export const NEW_SECTION_DATA = [...]
   ```

3. **Update Navigation**

   ```typescript
   // Add to NAVIGATION_LINKS array
   { href: "#new-section", label: "New Section" }
   ```

4. **Include in Page**
   ```typescript
   // app/page.tsx
   import { NewSection } from "@/components/NewSection";
   ```

### Theme Customization

The theme system supports:

- **Automatic**: Follows system preference
- **Manual**: User can toggle between light/dark
- **Persistent**: Saves preference in localStorage
- **Smooth Transitions**: Animated theme changes

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Makinthan** - Full Stack Developer

- 📧 Email: mahinthan2001a@gmail.com
- 📱 Phone: +94 70 4079 547
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)
- 🐙 GitHub: [Makinthan2001](https://github.com/Makinthan2001)

---

⭐ **If you found this portfolio template helpful, please give it a star!**
