import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './components/header/header.scss'

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Bruno L. Gomes',
  description: 'Bruno L. Gomes test for frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
