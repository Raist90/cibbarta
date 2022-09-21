import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'

function ChiSono({ title = 'Chi sono' }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Chi sono" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet" />
            </Head>

            <main>
                <Header />

                <About />
            </main>
        </div>
    )
}

export default ChiSono