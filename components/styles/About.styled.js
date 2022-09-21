import styled from "styled-components"

export const StyledAboutContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #1b1b1b;
    color: #fff;
    padding: 60px 0;
`

export const StyledAbout = styled.div`
    flex: .6;
    @media (min-width: 320px) and (max-width: 480px) {
        flex: .8;
    }
`

export const StyledAboutText = styled.div`
   
`