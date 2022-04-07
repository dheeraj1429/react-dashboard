import styled from "styled-components";

export const Button = styled.button`
    padding: 0.8rem 3rem;
    border: 1px solid var(--mainColor);
    background-color: transparent;
    color: var(--mainColor);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: var(--mainColor);
        background-color: var(--lightButtonCl);
        border: 1px solid var(--lightButtonCl);
    }
`;
