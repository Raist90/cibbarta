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
import Link from "next/link"


const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledLogo>
                    <Link href='/' passHref>
                        <Image
                            src={logo}
                            alt="Cibbarta logo"
                            width={135}
                            height={44}
                        />
                    </Link>
                </StyledLogo>
                <StyledNav>
                    <StyledUl>
                        <StyledLi><Link href="/chi-sono">About me</Link></StyledLi>
                        <StyledLi><Link href="/gallery">3d Gallery</Link></StyledLi>
                    </StyledUl>
                </StyledNav>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header