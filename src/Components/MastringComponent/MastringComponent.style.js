import styled from "styled-components";

export const section = styled.section``;

export const div = styled.div`
    .dark_bg {
        width: 100%;
    }
    .height_div {
        padding: 500px;
        position: relative;
        p {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translate(-50%, 0);
            text-align: center;
            font-size: 18px;
        }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/a.jpg);
            background-position: center;
            background-size: cover;
            z-index: -1;
        }
    }
`;

export const p = styled.p`
    color: var(--mainColor);
`;
