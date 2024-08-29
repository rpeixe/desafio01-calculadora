import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CCC;
    background-color: #0AF;
    box-sizing: border-box;

    color: #FFF;
    font-size: 24px;
    font-weight: 700;

    flex: ${props => props.$flex || "1"};
    box-sizing: border-box;

    &:hover {
        opacity: 0.6;
    }
`