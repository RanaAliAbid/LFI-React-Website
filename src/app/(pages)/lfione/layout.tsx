
export const metadata = {
    title: {
        default: 'LFi One | Web 3 Smartphone | Mint Crypto'
        // default: 'LFi One'
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
                <meta name="description" content="Experience innovation with LFi One, revolutionizing communication. Explore cutting-edge features and redefine connectivity." />
                <meta name="keywords" content="LFi One, Mint, Crypto mint, Mint crypto, LFi Smart phone for token minting crypto, Web3 smartphone, Crypto mobile, Smart phone for token minting crypto, Crypto Smart phone, Web3 android device, LFi crypto smartphone." />
            </head>
            <body>{children}</body>
        </html>
    )
}
