import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'

function ChiSono({ title = 'Chi sono' }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <Header />

                <About />
            </main>
        </div>
    )
}

export default ChiSono