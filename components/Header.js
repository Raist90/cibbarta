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
                        <a>
                            <Image
                                src={logo}
                                alt="Cibbarta logo"
                                width={135}
                                height={44}
                            />
                        </a>
                    </Link>
                </StyledLogo>
                <StyledNav>
                    <StyledUl>
                        <StyledLi><Link href="/chi-sono">Chi sono</Link></StyledLi>
                        <StyledLi>3d Gallery</StyledLi>
                    </StyledUl>
                </StyledNav>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header