import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/src/components/structure/header'
import HeroSection from '@/src/components/structure/hero-section'
import Footer from '@/src/components/structure/footer'
import GlobalImpact from '@/src/components/structure/global-impact'
import DashboardPreview from '@/src/components/structure/dashboard-preview'
import ContactSection from '@/src/components/structure/contact-section'

export const metadata: Metadata = {
  title: 'Verdantis - VITS',
  description: 'Sistema de Rastreamento Visual de Informações - Transparência do campo ao mercado',
 icons: {
    icon: '/agro-logo-2.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header/>
        <HeroSection/>
        <GlobalImpact/>
        <DashboardPreview/>
        {children}
        <ContactSection/>
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
