import Head from 'next/head'
import Header from '../components/Header'
import Opera from '../components/Opera'
import { OperaData } from '../data/OperaData'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home({ title = "Cibbarta" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sito web di Cibbarta" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Header />

        <Opera>
          {OperaData.map((opera) => {
            return (
              <Image
                src={opera.url}
                alt={opera.name}
                key={opera.key}
                width={500}
                height={759}
              />
            )
          })}
        </Opera>
      </main>

      <Footer />
    </div>
  )
}
