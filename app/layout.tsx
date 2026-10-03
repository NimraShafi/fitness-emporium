import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fitness Emporium | Gym & Fitness Center in Gulshan-e-Iqbal, Karachi',
  description: 'Fitness Emporium in Gulshan-e-Iqbal, Karachi. Explore gym, cardio, group training, ladies fitness, female yoga and personal training options.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rNCIUwUKggdyzCivm2nEbADW4F3NT6.png',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rNCIUwUKggdyzCivm2nEbADW4F3NT6.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rNCIUwUKggdyzCivm2nEbADW4F3NT6.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
