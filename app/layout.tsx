
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Docker Test App',
  description: 'Simple Next.js app for Docker testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ 
        fontFamily: 'system-ui, sans-serif', 
        margin: 0, 
        padding: '2rem',
        backgroundColor: '#f5f5f5' 
      }}>
        {children}
      </body>
    </html>
  )
}
