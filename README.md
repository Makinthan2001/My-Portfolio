# Madhan's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 💅 Styled with Tailwind CSS
- 📱 Mobile-first approach
- 🌐 SEO optimized
- 📧 Contact form with EmailJS integration
- 🚀 Ready for deployment

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Email**: EmailJS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd madhan-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update the following files with your information:

1. **`constants/index.tsx`** - Update:

   - `HERO.name` - Your name
   - `HERO.greet` - Your title/role
   - `SOCIAL_MEDIA_LINKS` - Your social media links
   - `PROJECTS` - Your projects
   - `EDUCATION` - Your education details
   - Skills arrays with your technologies

2. **`app/layout.tsx`** - Update metadata:
   - `title` - Your name
   - `description` - Your description

### Assets

1. Add your images to the `assets/` folder
2. Add your resume to the `public/` folder as `resume.pdf`
3. Update image references in the constants file

### Email Integration (Optional)

To enable the contact form:

1. Create an account at [EmailJS](https://emailjs.com)
2. Create a service and template
3. Create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables if using EmailJS
4. Deploy!

### Other Platforms

This Next.js app can be deployed on any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Project Structure

```
madhan-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ...               # Add more components here
├── constants/            # Site data and content
│   └── index.tsx
├── assets/              # Images and media files
├── public/              # Static files
└── ...
```

## Adding New Sections

1. Create a new component in `components/`
2. Add the section data to `constants/index.tsx`
3. Import and use the component in `app/page.tsx`
4. Add navigation link to `NAVIGATION_LINKS`

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).
