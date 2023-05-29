import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './components/ThemeProvider'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <main className='py-12 px-48'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
