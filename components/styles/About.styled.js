import styled from "styled-components"

export const StyledAboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #1a1a1a;
    padding: 60px 0;
    font-size: 1.4rem;
    line-height: 1.4;

    @media (min-width: 320px) and (max-width: 480px) {
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.4;
        }
    }
`

export const StyledAbout = styled.div`
    flex: .6;
    @media (min-width: 320px) and (max-width: 480px) {
        flex: .8;
    }
`

export const StyledAboutText = styled.div`
   
`

export const StyledPortraitPicCol = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    width: 80%;
    height: 500px;
    margin: 40px auto;
    position: relative; // because it contains the image
    box-shadow: 0 8px 6px -6px black;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }

    img {
        object-fit: cover;
    }
`