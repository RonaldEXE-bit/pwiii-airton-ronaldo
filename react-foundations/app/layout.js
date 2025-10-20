import './globals.css'

export const metadata = {
  title: 'React Foundations',
  description: 'Tutorial do Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
