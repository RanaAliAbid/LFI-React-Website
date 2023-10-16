import mintingmachine from '../../../../public/img/feature-banner/lfi-minting-machine.jpg';  


export const metadata = {
  title: {
    default: 'LFi Minting Machine'
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

        <meta property="og:image" content={mintingmachine.src} />
      </head>
      <body>{children}</body>
    </html>
  )
}
