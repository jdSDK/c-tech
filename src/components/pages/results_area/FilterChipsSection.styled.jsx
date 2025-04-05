import styled from "styled-components";
import { popAndFadeIn } from "../../common/Animations.styled";

export const FilterChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0;
    font-size: 13px;
    user-select: none;
`;
export const FilterChip = styled.div`
    background-color:rgb(222, 222, 222);
    border-radius: 16px;
    height: 30px;
    padding: 0 12px;
    transition: all 0.3s ease;
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    span {
        color:#777
    }
    animation: ${popAndFadeIn} 0.15s ease-out forwards;

    &:hover {
        background-color:rgb(233, 233, 233);
    }
`;
export const FilterChipCloseButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #aaa;
    transition: all 0.3s ease;
`;
