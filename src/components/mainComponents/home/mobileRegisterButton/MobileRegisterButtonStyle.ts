import { breakPoints } from "src/common/styles/responsiveBreakpoint";
import styled from "styled-components";

export const RegisterButton = styled.button`
    display: none;

    @media ${breakPoints.mobile} {
        display: block;
        width: 100%;
        height: 3.25rem;
        position: fixed;
        bottom: 0rem;
        background-color: #FFE100;
        font-size: 0.875rem;
        font-weight: bold;
        text-align: center;
        z-index: 997;
    }
`