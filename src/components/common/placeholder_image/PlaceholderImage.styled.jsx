import styled from "styled-components";

export const PlaceholderBackground = styled.div`
height: 100%;
width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    svg {
        width: 50px;
        height: 50px;
        color: rgb(169, 169, 169)
    }
`;