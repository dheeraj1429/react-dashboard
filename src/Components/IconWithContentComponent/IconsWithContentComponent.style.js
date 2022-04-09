import styled from "styled-components";

export const div = styled.div``;

export const h3 = styled.h3`
    color: var(--mainColor);
    font-size: 24px;
    font-weight: 300;
`;

export const i = styled.i`
    font-size: 50px;
    color: var(--mainColor);
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: var(--lightButtonCl);
    }
`;
