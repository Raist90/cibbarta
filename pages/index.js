import Head from 'next/head'
import Header from '../components/Header'
import Opera from '../components/Opera'
import { OperaData } from '../data/OperaData'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home({ title = "Cibbarta" }) {
  const [lightboxDisplay, setLightboxDisplay] = useState(false)
  const [imageToShow, setImageToShow] = useState("")

  const showImage = (image) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  }

  const hideLightBox = () => {
    setLightboxDisplay(false)
  }

  const showNext = (e) => {
    e.stopPropagation()
    let currentIndex = images.indexOf(imageToShow)
    if (currentIndex >= images.length - 1) {
      setLightboxDisplay(false)
    }
    else {
      let nextImage = images[currentIndex + 1]
      setImageToShow(nextImage)
    }
  }

  const showPrev = (e) => {
    e.stopPropagation()
    let currentIndex = images.indexOf(imageToShow)
    if (currentIndex <= 0) {
      setLightboxDisplay(false)
    }
    else {
      let nextImage = images[currentIndex - 1]
      setImageToShow(nextImage)
    }
  }

  const images = OperaData.map(item => item.url)
  const imageCards = images.map((image, index) => (
    <div key={OperaData[index].key}>
      <Image onClick={() => showImage(image)} src={image} fill sizes="100%" alt="immagine" />
    </div>
  ));

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Header />

        <Opera>
          {imageCards}
        </Opera>

        {
          lightboxDisplay ? (
            <div id="lightbox" onClick={hideLightBox}>
              <button onClick={showPrev}>&#8592;</button>
              <Image
                src={imageToShow}
                alt="immagine"
                width={400}
                height={300}
              />
              <button onClick={showNext}>&#8594;</button>
            </div>
          ) : ""
        }
      </main>

      <Footer />
    </>
  )
}