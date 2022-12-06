import styled from "styled-components";

export const StyledOpera = styled.div`
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 60px;

    div {
        width: 100%;
        height: 759px;
        position: relative;

        @media (min-width: 320px) and (max-width: 480px) {
            height: 300px;
        }
    }
`