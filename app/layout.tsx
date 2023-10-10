import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'WikiRocket 🚀',
  description: 'Unlock limitless possibilities with our powerful search engine - find anything, anytime, anywhere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  )
}