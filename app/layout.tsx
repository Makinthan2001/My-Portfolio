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
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
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
                  
                  if (shouldUseDark) {
                    html.classList.add('dark');
                    html.setAttribute('data-theme', 'dark');
                  } else {
                    html.classList.remove('dark');
                    html.setAttribute('data-theme', 'light');
                  }
                } catch (e) {
                  // Fallback to light theme
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
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
              .theme-loading *,
              .theme-loading *:before,
              .theme-loading *:after {
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
