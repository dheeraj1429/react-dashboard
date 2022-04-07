import styled from "styled-components";

export const NavbarLi = styled.li`
    color: var(--mainColor);
    list-style: none;
    margin: 0 4rem;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    letter-spacing: 1.4px;
    &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: var(--lightButtonCl);
        transition: all 0.3s ease;
    }
    &:hover {
        color: var(--lightButtonCl);
        &:after {
            width: 100%;
        }
    }
`;
