import featureBanner from "../../public/img/feature-banner/lfi-bridge.jpg";


export const metadata = {
  title: {
    default: 'Cross-chain Bridge | Blockchain | Crypto Bridge'
    // default: 'LFi Bridge'
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
        <meta name="description" content="LFi Bridge - Where possibilities converge, and blockchain ecosystems unite. Explore seamless connectivity and growth."/>
        <meta name="keywords" content="bridge crypto, blockchain bridges, cross chain bridge crypto, best crypto bridge, crypto bridge swap, best cross chain bridge, bridge in crypto, multi chain bridge" />
        <meta property="og:image" content={featureBanner.src}/>

      </head>
      <body>{children}</body>
    </html>
  )
}
