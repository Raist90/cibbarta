import {
    StyledHeader,
    StyledContainer,
    StyledLogo,
    StyledNav,
    StyledUl,
    StyledLi
} from "./styles/Header.styled.js"
import Image from "next/dist/client/image"
import logo from '../public/img/logo.png'


const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledLogo>
                    <Image
                        src={logo}
                        alt="Cibbarta logo"
                        width={135}
                        height={44}
                    />
                </StyledLogo>
                <StyledNav>
                    <StyledUl>
                        <StyledLi>Chi sono</StyledLi>
                        <StyledLi>3d Gallery</StyledLi>
                    </StyledUl>
                </StyledNav>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header