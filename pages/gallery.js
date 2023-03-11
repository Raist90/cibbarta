import Header from "../components/Header";
import styles from "../styles/gallery.module.css";
import Footer from "../components/Footer"

const gallery = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>3d Gallery</h1>
        <figure className={styles.galleryContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.artsteps.com/embed/60ae0fdb6147f312a961c3df/560/315"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </figure>
      </main>

      <Footer />
    </>
  );
};

export default gallery;
