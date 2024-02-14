import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dynamite Trade',
  description: 'Invest your money with DTrade',
}

// Implement third-party tools such as authentication, dark mode within this file
// Do not adding any styles
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  )
}
