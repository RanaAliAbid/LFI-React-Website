import featureBanner from "../../public/img/feature-banner/lfi-software-wallet.jpg";

export const metadata = {
  title: {
    default:'Software Wallet | Decentralized App | Mint Tokens'
    // default: 'LFi Software Wallet'
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
        <meta name="description" content="LFi Software Wallet - Your gateway to seamless digital asset management. Explore security and convenience in one." />
        <meta name="keywords" content="software wallet, decentralized app, defi apps, wallet mining software, decentralized applications, secure wallet, user-friendly crypto wallet, swap and exchange cryptos, earn cryptos, mint tokens, mint LFi" />
        <meta property="og:image" content={featureBanner.src} />

      </head>
      <body>{children}</body>
    </html>
  )
}
