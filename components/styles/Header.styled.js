import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    z-index: 2;
    border-bottom: 1px solid #000;
    padding: 5px;
    align-items: center;
    color: #fff;
    justify-content: center;
    font-weight: 800;
`

export const StyledContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const StyledLogo = styled.div`
    margin-right: 10px;
`

export const StyledNav = styled.nav`
    display: flex;
`

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    text-transform: uppercase;
    margin: 0;
`

export const StyledLi = styled.li`
    margin: 0 10px;
`