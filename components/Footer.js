import { StyledFooter, StyledP } from './styles/Footer.styled'
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
    return (
        <StyledFooter>
            <ScrollToTop smooth />
            <StyledP>
                © <span>{(new Date().getFullYear())}</span> copyright Cibbarta | All rights reserved
            </StyledP>
        </StyledFooter>
    )
}

export default Footer