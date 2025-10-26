import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Serif display font for prominent headings
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makinthan - Software Developer",
  description:
    "Portfolio website of Makinthan - Software Developer showcasing projects, skills, and experience in modern web development.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Fallbacks for broader browser compatibility and theme color for mobile */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="theme-color"
          content="#0f172a"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Get theme preference immediately
                  var theme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var shouldUseDark = theme === 'dark' || (!theme && systemPrefersDark);
                  
                  var html = document.documentElement;
                  var body = document.body;
                  
                  if (shouldUseDark) {
                    html.classList.add('dark');
                    html.setAttribute('data-theme', 'dark');
                    body.setAttribute('data-theme', 'dark');
                    body.style.backgroundColor = '#0f172a';
                    body.style.color = '#f1f5f9';
                  } else {
                    html.classList.remove('dark');
                    html.setAttribute('data-theme', 'light');
                    body.setAttribute('data-theme', 'light');
                    body.style.backgroundColor = '#ffffff';
                    body.style.color = '#171717';
                  }
                  
                  // Add loading class to prevent transitions during hydration
                  body.classList.add('theme-loading');
                } catch (e) {
                  // Fallback to light theme
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.body.setAttribute('data-theme', 'light');
                  document.body.style.backgroundColor = '#ffffff';
                  document.body.style.color = '#171717';
                }
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Immediate theme application to prevent flash */
              html {
                --background: #ffffff;
                --foreground: #171717;
              }
              html.dark {
                --background: #0f172a;
                --foreground: #f1f5f9;
              }
              body {
                background-color: var(--background) !important;
                color: var(--foreground) !important;
              }
              /* Prevent transitions during hydration */
              .theme-loading,
              .theme-loading * {
                transition: none !important;
                animation-duration: 0s !important;
              }
            `,
          }}
        />
      </head>
      <body className="antialiased theme-loading">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
