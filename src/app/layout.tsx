import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from "@/context/ThemeContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lamamia',
  description: 'Lamamia is project made with next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
