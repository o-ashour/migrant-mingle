import './globals.css'
import { Buenard } from 'next/font/google'

export const text = Buenard({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Migrant Mingle App',
  description: 'A digital gathering place where first-generation immigrant students can mingle, exchange family recipes, get in touch with others, and update their statuses to maintain a sense of security',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={text.className}>{children}</body>
    </html>
  )
}
