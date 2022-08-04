import { StyledHeader } from "./styles/Header.styled.js"
import Image from "next/dist/client/image"
import logo from '../public/img/logo.png'

const Header = () => {
    return (
        <StyledHeader>
            <div className="logoContainer">
                <Image
                    src={logo}
                    alt="Cibbarta logo"
                    width={135}
                    height={44}
                />
            </div>
        </StyledHeader>
    )
}

export default Header