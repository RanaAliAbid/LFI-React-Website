import Script from 'next/script';
import './globals.css'

export const metadata = {
    title: {
        default: 'LFi Dapps | Web3 SmartPhone | LFi One'
        // default: 'LFi - Build Your Independence'
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
                    <meta name="description" content="LFi is a decentralized platform designed to provide equal opportunities for wealth generation and financial independence through crypto."/>
                    <meta name="keywords" content="Decentralized network, Decentralized network blockchain, Decentralized wireless network, Mint crypto, Smart phone for token minting crypto, Web3 smartphone, Crypto mobile, Smart phone for token minting crypto, Crypto Smart phone, Web3 android device, LFi crypto smartphone, LFi decentralized network, Mint An NFT On LFi Phone"/>
                    <meta name="title" content="LFi Dapps | Web3 SmartPhone | LFi One"/>
                        {/* <!-- Google Tag Manager --> */}
                        <Script id="google-tag-manager">
                            {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PM28Q6F');   
                    `}
                        </Script>
                    </head>
                    <body>
                        {children}
                    </body>
                </html>
                )
}
