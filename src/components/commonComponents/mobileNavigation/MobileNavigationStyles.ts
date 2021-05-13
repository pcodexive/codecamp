import { breakPoints } from "src/common/styles/responsiveBreakpoint";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;

    @media ${breakPoints.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 100vh;
        padding: 10rem 5rem;
        background-color: #6B6C73;
    }
`

export const Division = styled.div`
    @media ${breakPoints.mobile} {
        width: 1.25rem;
        height: 0.25rem;
        background-color: #FFE100;
    }
`

export const Menu = styled.div`
    @media ${breakPoints.mobile} {
        font-weight: bold;
        font-size: 1.5rem;  
        color: white;
    }
`