export const metadata = {
  title: {
    default: 'Software Wallet | Decentralized Blockchain | DeFi'
    // default: 'LFi Ecosystem'
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
        <meta name="description" content="LFi Ecosystem - Nurturing innovation across diverse projects. Explore a thriving ecosystem shaping tomorrow." />
        <meta name="keywords" content="software wallet, decentralized app, defi apps, wallet mining software, decentralized applications, secure wallet, user-friendly crypto wallet, swap and exchange cryptos, earn cryptos, mint tokens, mint LFi" />
      </head>
      <body>{children}</body>
    </html>
  )
}
