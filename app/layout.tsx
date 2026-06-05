import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tanay Sharma — Full Stack Developer',
  description: 'Full Stack Developer building scalable SaaS products and solving real-world business challenges. B.Tech CSE @ SKIT Jaipur.',
  keywords: ['Tanay Sharma', 'Full Stack Developer', 'React', 'Node.js', 'SaaS', 'Portfolio', 'Software Engineer', 'Jaipur'],
  authors: [{ name: 'Tanay Sharma' }],
  creator: 'Tanay Sharma',
  openGraph: {
    title: 'Tanay Sharma — Full Stack Developer',
    description: 'Building software products that solve real business problems.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanay Sharma — Full Stack Developer',
    description: 'Building software products that solve real business problems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0F] text-slate-50 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
