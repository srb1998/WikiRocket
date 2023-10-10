import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white text-center">Search Anything</h1>
    </div>      
    </main>
  )
}
