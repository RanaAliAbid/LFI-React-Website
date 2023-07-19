export const metadata = {
    title: {
        default: 'LFi - L-DAO'
    },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
