import Script from 'next/script';
import './globals.css'

export const metadata = {
    title: {
        default: 'LFi - Build Your Independence'
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
