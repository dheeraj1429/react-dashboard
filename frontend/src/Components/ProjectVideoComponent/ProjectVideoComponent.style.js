import styled from "styled-components";

export const div = styled.div`
    .project_vid_div {
        width: 100%;
        height: 90%;
        border-radius: 20px;
        position: relative;
        background-color: var(--dark);
        padding: 1rem;
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            min-height: 100%;
        }
    }
`;
