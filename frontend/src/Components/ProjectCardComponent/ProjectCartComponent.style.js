import styled from "styled-components";

export const div = styled.div``;

export const imagePrv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    transition: all 0.3s ease;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mainColor);
        transition: all 0.3s ease;
        opacity: 0;
    }
`;

export const ProjectCartDiv = styled.div`
    width: 100%;
    height: 400px;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 2rem;
    &:hover .img_prev_div {
        transform: scale(1.2);
    }
    &:hover .open {
        visibility: visible;
    }
    &:hover .img_prev_div {
        &:before {
            opacity: 0.2;
            transform: scale(0.7);
            border-radius: 10px;
        }
    }
`;

export const open = styled.div`
    width: 70px;
    height: 70px;
    background-color: var(--dark);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    visibility: hidden;
`;

export const postConetnt = styled.div`
    padding-right: 1.3rem;
`;

export const p = styled.p`
    color: var(--lightSm);
    letter-spacing: normal;
    line-height: normal;
    font-size: 12px;
`;

export const i = styled.i`
    color: var(--mainColor);
    font-size: 20px;
`;
