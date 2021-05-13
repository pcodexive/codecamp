import { breakPoints } from "src/common/styles/responsiveBreakpoint"
import styled from "styled-components"

export const BackgroundDisabledWrapper = styled.div`
    position: fixed;
    z-index: 998;
    width: 100vw;
    height: 100vh;
    background-color: rgba(211, 211, 211, 0.5);

    @media ${breakPoints.mobile} {
        position: fixed;
        z-index: 998;
        width: 100vw;
        height: 100vh;
        background-color: white;
    }
`

export const Wrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 5%;
    margin-left: -24.75rem;
    background-color: white;
    width: 49.5rem;
    padding: 3.375rem;
    z-index: 999;
    height: 90vh;
    ::-webkit-scrollbar {
        width: 0px;
    }

    @media ${breakPoints.mobile} {
        position: fixed;
        left: 0;
        top: 2rem;
        margin-left: 0rem;
        width: 100vw;
        height: 100vh;
        padding: 1rem;
    }
`

export const Header = styled.div`
    text-align: right;
`

export const CloseButton = styled.img`
    width: 1.125rem;
    height: 1.125rem;
    cursor: pointer;
`

export const Title = styled.p`
    font-size: 2.25rem;
    font-weight: bold;
    padding-top: 0.375rem;
    text-align: center;
    margin-bottom: 2rem;

    @media ${breakPoints.mobile} {
        font-size: 1.25rem;
    }
`

export const Body = styled.div`
    height: 90%;
    overflow: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
`

export const InputWrapper = styled.div`
    @media ${breakPoints.mobile} {
        /* width: 90%; */
    }
`

export const Question = styled.p`
    font-size: 1rem;
    font-weight: bold;
    padding-top: 1.25rem;

    @media ${breakPoints.mobile} {
        font-size: 0.875rem;
    }
`

export const Star = styled.span`
    color: #FFE100;
    font-weight: bold;
`

export const TextInput = styled.input`
    height: 3.5rem;
    margin-top: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #EDEDEE;
    width: 100%;

    @media ${breakPoints.mobile} {
        height: 2.625rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
`

export const RadioWrapper = styled.div`
    padding-top: 1rem;

    @media ${breakPoints.mobile} {
    
    }
`

export const RadioInput = styled.input`
    margin-top: 1rem;
    cursor: pointer;

    @media ${breakPoints.mobile} {
    
    }
`

export const Label = styled.label`
    padding-left: 0.5rem;
    font-size: 1rem;
    color: #1D1D22;
    cursor: pointer;

    @media ${breakPoints.mobile} {
        padding-left: 0.25rem;
        font-size: 0.875rem;
        color: #1D1D22;
    }
`

export const TextAreaWrapper = styled.div`
    margin-top: 1rem;

    @media ${breakPoints.mobile} {
    }
`

export const TextArea = styled.textarea`
    margin-top: 0.75rem;
    width: 100%;
    padding: 1rem;
    background-color: #EDEDEE;

    @media ${breakPoints.mobile} {
    }
`

export const TermsAgreementWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    @media ${breakPoints.mobile} {
    }
`

export const Checkbox = styled.input`
    cursor: pointer;

    @media ${breakPoints.mobile} {
    }
`

export const AgreementLabel = styled.label`
    padding-left: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    @media ${breakPoints.mobile} {
        padding-left: 0.25rem;
        font-size: 0.875rem;
        font-weight: bold;
    }
`

export const TermsDetailWrapper = styled.div`
    @media ${breakPoints.mobile} {
    
    }
`

export const ShowAgreementDetailButton = styled.span`
    font-weight: bold;
    cursor: pointer;
    
    @media ${breakPoints.mobile} {
        font-size: 0.7rem;
    }
`

export const TermsDetail = styled.div`
    width: 684px;
    margin-top: 10px;
    margin-left: 10px;
    height: 200px;
    overflow-y: scroll;

    b {
        font-weight: bold;
    }

    @media ${breakPoints.mobile} {
        font-size: 0.75rem;
        height: 10rem;
        width: 90vw;
    } 
`

export const Table = styled.table`
    width: 670px;
    text-align: center;

    @media ${breakPoints.mobile} {
        font-size: 0.5rem;
        padding: 0.25rem;
        width: 88vw;
    }
`

export const Th = styled.td`
    border: 1px solid black;
    padding: 0.25rem;
    font-weight: bold;
`

export const Tr = styled.tr`
    border: 1px solid black;
`

export const Td = styled.td`
    border: 1px solid black;
    width: 33vw;
    padding: 0.25rem;
`

export const RegisterButton = styled.button`
    width: 100%;
    height: 2.75rem;
    background-color: #FFE100;
    margin: 2.5rem 0rem;
    font-weight: bold;
    cursor: pointer;

    @media ${breakPoints.mobile} {
        width: 100%;
        height: 2.75rem;
        background-color: #FFE100;
        margin: 2.5rem 0rem;
        font-weight: bold;
    }
`