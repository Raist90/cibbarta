import Head from 'next/head'
import Header from '../components/Header'
import Opera from '../components/Opera'
import { OperaData } from '../data/OperaData'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useState } from 'react'
import FsLightbox from 'fslightbox-react'

export default function Home({ title = "Cibbarta" }) {
  const [toggler, setToggler] = useState(false);

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
                  onClick={() => setToggler(!toggler)}
                  src={opera.url}
                  alt={opera.name}
                  fill sizes="100%"
                />
              </div>
            )
          })}
        </Opera>
        <FsLightbox
          toggler={toggler}
          sources={
            OperaData.map((props) => {
              return (
                <span className='contienimi' key={props.key}>
                  <img
                    src={props.url}
                    alt={props.name}
                  />
                </span>
              )
            })
          }
        />
      </main>

      <Footer />
    </>
  )
}