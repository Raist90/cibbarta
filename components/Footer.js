import { StyledFooter, StyledP } from './styles/Footer.styled'

const Footer = () => {
    return (
        <StyledFooter>
            <StyledP>
                © <span>{(new Date().getFullYear())}</span> copyright Cibbarta | All rights reserved
            </StyledP>
        </StyledFooter>
    )
}

export default Footer