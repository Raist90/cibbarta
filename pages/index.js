import Head from 'next/head'
import Header from '../components/Header'
import Opera from '../components/Opera'
import { OperaData } from '../data/OperaData'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home({ title = "Cibbarta" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Header />

        <Opera>
          {OperaData.map((opera) => {
            return (
              <div key={opera.key}>
                <Image
                  src={opera.url}
                  alt={opera.name}
                  fill sizes="100%"
                />
              </div>
            )
          })}
        </Opera>
      </main>

      <Footer />
    </>
  )
}
