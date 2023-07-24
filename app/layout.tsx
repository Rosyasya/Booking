import './styles/globals.scss'
import type { Metadata } from 'next'
import Header from "@/app/components/ui/Header/Header";

export const metadata: Metadata = {
  title: 'Booking',
  description: 'Booking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
