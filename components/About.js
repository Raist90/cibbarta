import {
    StyledAboutContainer,
    StyledAbout,
    StyledAboutText,
    StyledPortraitPicCol
} from './styles/About.styled'
import Image from 'next/image'
import Footer from './Footer'

const About = ({ title = "Chi sono" }) => {
    return (
        <>
            <StyledAboutContainer>
                <StyledAbout>
                    <StyledAboutText>
                        <h1 className='text-center'>Chi Sono</h1>
                        <p>Eccomi qua,  Cibbarta:</p>

                        <p>il mio vero nome è Emilia. Questo è il mio portfolio in cui mi diletto con l’arte ed il cibo creando delle “opere” definite “cibo su tela“.</p>

                        <p>L’idea mi è venuta una mattina di aprile durante il lockdown. Facevo colazione un po’ sovrappensiero con compagni di viaggio chiamati ansia, paura e stress per la pandemia in corso. Un turbinio di pensieri negativi interrotti da una stellina di zucchero firmata Pan di stelle, caduta sulla mia tovaglietta americana preferita, di Van Gogh.</p>

                        <p>Da quel momento non sono riuscita più a pensare all’arte senza cibo e viceversa.</p>
                    </StyledAboutText>

                    <StyledPortraitPicCol>
                        <Image
                            src='https://res.cloudinary.com/duniwzylb/image/upload/v1670321242/cibbarta/cibbarta-portrait_ipro5i.jpg'
                            alt="Cibbarta portrait"
                            fill sizes="100%"
                        />
                    </StyledPortraitPicCol>

                    <StyledAboutText>
                        <p>Ho tante passioni nella vita e non smetto mai di sognare.</p>

                        <p>Sono nata e cresciuta a Reggio di Calabria, dove ho frequentato scuola ed Università.</p>

                        <p>Poi a 24 anni mi sono trasferita a Bologna e ci ho vissuto per 10 anni, prima per continuare gli studi all’Alma Mater poi per lavoro.</p>

                        <p>Da qualche tempo ho lasciato Bologna ed il lavoro a tempo indeterminato in Banca che avevo lì per seguire nuovamente i miei sogni. Molti mi hanno dato della “pazza” ma io voglio provarci fino alla FINE.</p>

                        <p>Fino alla fine 🙂</p>

                        <p>Seguitemi sul mio canale Instagram: @cibbarta</p>
                    </StyledAboutText>
                </StyledAbout>
            </StyledAboutContainer>
            <Footer />
        </>
    )
}

export default About