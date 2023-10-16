import featureBanner from "../../public/img/feature-banner/lfi-launchpad.jpg";

export const metadata = {
    title: {
        default:'LFi Launchpad | Tokens | dApps'
        // default: 'LFi Launchpad'
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
        <meta name="description" content="LFi Launchpad - Igniting innovation and supporting visionary projects. Explore a platform for groundbreaking ideas."/>
        <meta name="keywords" content="launchpad, LFi launchpad, tokens, cryptos, dapps" />
        <meta property="og:image" content={featureBanner.src} />

      </head>
      <body>{children}</body>
    </html>
  )
}
