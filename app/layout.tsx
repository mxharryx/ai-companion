import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { ProModal } from '@/components/pro-modal'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'AI Companion | Chat with anyone!',
  description: 'Welcome to AI Companion, an innovative project by Mohammed Harris. The platform empowers you to shape your AI companions with precision. Craft unique backstories and provide initial instructions through a simple seed chat. Powered by the cutting-edge Lambda model from Replicate, our AI companions are smart and adaptive. This SaaS-based solution operates on a subscription model, streamlining payments with Stripe integration (currently in test mode). Built with Next.js, React, Stripe, Prisma, MySQL, and the elegance of Tailwind CSS, this project embodies innovation and creativity. Join us on this journey, where the future of AI companions is yours to create.',
  referrer: 'origin-when-cross-origin',
  keywords: ['AI, Chatbot, Mohammed Harris, Software Development, Cloud Development, Game Development'],
  authors: [
    { name: 'Mohammed Harris', url: 'https://github.com/mxharryx' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProModal />
          {children}
          <Toaster />
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
