import './globals.css'
import Provider from './components/ThemeProvider'
import Header from './components/Header'
import { Montserrat } from 'next/font/google';
 
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
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
