import {
  StyledAboutContainer,
  StyledAbout,
  StyledAboutText,
  StyledPortraitPicCol,
} from "./styles/About.styled";
import Image from "next/image";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <StyledAboutContainer
        style={{ borderBottom: "1px solid rgba(0,0,0,.4)" }}
      >
        <StyledAbout>
          <StyledAboutText>
            <h1 className="text-center">About me</h1>
            <p>Here I am, Cibbarta:</p>

            <p>
              My real name is Emilia. This is my portfolio in which I delight
              with art and food creating "works" defined "food on paint".
            </p>

            <p>
              The idea came to me one April morning during lockdown. I was
              having breakfast with fellow travellers anxiety fear and stress
              due to the ongoing pandemic. A whirlwind of negative thoughts
              interrupted by a star of sugar signed Pan di Stelle, which fell on
              my favorite American placemat by Van Gogh.
            </p>

            <p>
              From that moment I couldn't think of art without food and vice
              versa.
            </p>
          </StyledAboutText>

          <StyledPortraitPicCol>
            <Image
              src="https://res.cloudinary.com/duniwzylb/image/upload/v1670321242/cibbarta/cibbarta-portrait_ipro5i.jpg"
              alt="Cibbarta portrait"
              fill
              sizes="100%"
            />
          </StyledPortraitPicCol>

          <StyledAboutText>
            <p>I have so many passions in life and I never stop dreaming.</p>

            <p>
              I was born and raised in Reggio di Calabria, I lived in Bologna
              for 10 years, then Malaga and now in Stockholm.
            </p>

            <p>Follow me on my Instagram channel: @cibbarta</p>
          </StyledAboutText>
        </StyledAbout>
      </StyledAboutContainer>

      <StyledAboutContainer style={{ paddingTop: "30px" }}>
        <StyledAbout>
          <StyledAboutText>
            <h1 className="text-center" style={{ marginTop: 0 }}>
              Chi Sono
            </h1>
            <p>Eccomi qua, Cibbarta:</p>

            <p>
              il mio vero nome è Emilia. Questo è il mio portfolio in cui mi
              diletto con l'arte ed il cibo creando delle “opere” definite “cibo
              su tela“.
            </p>

            <p>
              L'idea mi è venuta una mattina di aprile durante il lockdown.
              Facevo colazione un po' sovrappensiero con compagni di viaggio
              chiamati ansia, paura e stress per la pandemia in corso. Un
              turbinio di pensieri negativi interrotti da una stellina di
              zucchero firmata Pan di stelle, caduta sulla mia tovaglietta
              americana preferita, di Van Gogh.
            </p>

            <p>
              Da quel momento non sono riuscita più a pensare all'arte senza
              cibo e viceversa.
            </p>
          </StyledAboutText>

          <StyledPortraitPicCol>
            <Image
              src="https://res.cloudinary.com/duniwzylb/image/upload/v1670321242/cibbarta/cibbarta-portrait_ipro5i.jpg"
              alt="Cibbarta portrait"
              fill
              sizes="100%"
            />
          </StyledPortraitPicCol>

          <StyledAboutText>
            <p>Ho tante passioni nella vita e non smetto mai di sognare.</p>

            <p>
              Sono nata e cresciuta a Reggio di Calabria, ho vissuto a Bologna 10 anni, poi a Malaga e adesso vivo a Stoccolma.
            </p>

            <p>Seguitemi sul mio canale Instagram: @cibbarta</p>
          </StyledAboutText>
        </StyledAbout>
      </StyledAboutContainer>
      <Footer />
    </>
  );
};

export default About;
