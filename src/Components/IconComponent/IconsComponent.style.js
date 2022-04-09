import styled from "styled-components";

export const div = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
    &:hover {
        background-color: var(--lightButtonCl);
    }
`;

export const i = styled.i`
    color: var(--mainColor);
`;
