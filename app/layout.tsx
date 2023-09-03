import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { ProModal } from '@/components/pro-modal'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'AI Companion | Chat with anyone!',
  description: 'Create Custom AI | A project by Mohammed Harris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta name="author" content="AI, Chatbot, Mohammed Harris, Software Development, Cloud Development, Game Development" />
        <meta property="og:title" content="AI Companion | Chat with anyone!" />
        <meta property="og:description" content="Create Custom AI | A project by Mohammed Harris" />
        <meta property="og:image" content="https://ai-companion-black.vercel.app/home_page.png" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://ai-companion-black.vercel.app" />
        <meta property="twitter:image" content="https://ai-companion-black.vercel.app/home_page.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="AI Companion | Chat with anyone!" />
        <meta property="twitter:description" content="Create Custom AI | A project by Mohammed Harris" />
        <meta name="twitter:image:alt" content="AI Companion's Landing Page"/>
        <meta name="twitter:creator" content="@mohammedharris_"/>
        </Head>
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
