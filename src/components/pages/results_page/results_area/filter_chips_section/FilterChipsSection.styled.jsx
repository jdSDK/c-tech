import styled from "styled-components";
import { popAndFadeIn } from "../../../../common/Animations.styled";

export const FilterChipsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
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
    animation: ${ popAndFadeIn } 0.15s ease-out forwards;

    span {
        color:#777
    }

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
export const FilterChipsHeader = styled.div`
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const FilterChipsAndClearButtonWrapper = styled.div`
display:flex;
width:100%;
justify-content: space-between;
align-items: flex-start;
`;
export const ClearButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 16px;
margin-top: 12px;
`;
export const ClearButton = styled.div`
align-self: flex-start;
justify-self: flex-start;
cursor: pointer;
width: 120px;
padding: 8px 16px;
font-size: 12px;
background-color:rgb(255, 255, 255);
border-radius: 16px;

&:hover {
box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
transition: all 0.3s ease;
}
`;
