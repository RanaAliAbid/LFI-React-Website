export const metadata = {
    title: {
        default: 'As Seen On'
    },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>{children}</body>
    </html>
  )
}
