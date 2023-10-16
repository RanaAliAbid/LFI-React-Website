import featureBanner from "../../public/img/feature-banner/lfi-ldao.jpg";


export const metadata = {
    title: {
        default: 'Smart Contract | DAO | Blockchain'
        // default: 'LFi L-DAO'
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
                <meta name="description" content="Unlock the power of decentralized autonomous organizations (DAOs) with LFi. Explore how DAOs are reshaping industries. Dive in today!" />
                <meta name="keywords" content="DAO, Dao meaning, Dao crypto, Daomaker, dao maker token, LFi DAO, LFi decentralized autonomous organization, Smart contract, Smart contract blockchain, Smart contracts explained, LFi Ecosystem" />
                <meta property="og:image" content={featureBanner.src} />

            </head>
            <body>{children}</body>
        </html>
    )
}
