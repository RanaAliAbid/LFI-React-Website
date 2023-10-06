export const metadata = {
  title: {
    default:'LFi Chain | Blockchain | LFi Token'
    // default: 'LFi Blockchain'
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
        <meta name="description" content="Explore the transformative potential of blockchain technology with LFi. Discover the innovative features of the LFi ecosystem now!" />
        <meta name="keywords" content="LFi Blockchain, Virtual machine hardware version compatibility, Virtual machine connection, Ethereum Virtual Machine compatibility, Blockchain technology, Ethereum Virtual Machine (EVM), Ethereum, Cryptocurrency, Dapps, Decentralized applications, LFi proof of stake, Proof of stake mining, POS, POS 2.0, LFi Ecosystem, LFi Token" />
      </head>
      <body>{children}</body>
    </html>
  )
}
