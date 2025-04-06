import styled, { keyframes } from 'styled-components';
import { popAndFadeIn } from "../../../common/Animations.styled";
// -------------------------------------------------------------------------------------------------
export const Card = styled.div`
background-color: #fff;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
width: 100%;
height: 190px;
display: flex;
align-items: center;
gap: 0.5em;
opacity: 0; // Start with opacity 0
animation: ${ popAndFadeIn } 0.5s ease-out forwards;
animation-delay: ${ props => Math.min( props.$index * 150, 1000 ) }ms;
`;
// -------------------------------------------------------------------------------------------------
export const CardImage = styled.img`
    height: 170px;
    aspect-ratio: 1/1;
    margin: 10px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);   
`;
export const PlaceholderContainer = styled.div`
    background-color: rgb( 213, 213, 213 );
    height: 170px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba( 0, 0, 0, 0.1 );
`;
// -------------------------------------------------------------------------------------------------
export const CardContents = styled.div`;
    padding: 2px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
// -------------------------------------------------------------------------------------------------
export const DetailSection = styled.div`;
    padding: 0px 0px;
    border-radius: 4px 4px 4px 4px;
    border-bottom: 1px solid rgb( 236, 236, 236 );
    display: flex;
    flex-grow: 1;
    font-size: 0.8em;
    justify-content: space - between;
    padding-bottom: 5px;
    margin-bottom: 5px;
`;
export const ImageContainer = styled.div`;
    position: relative;
    height: 170px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loader = styled.div`;
    font-size: 14px;
    color: #aaa;
    text-align: center;
`;