import styled, { keyframes } from 'styled-components';
export const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;
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
animation: ${fadeIn} 0.5s ease-out forwards;
animation-delay: ${props => props.$index * 150}ms;
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
// -------------------------------------------------------------------------------------------------
export const CardContents = styled.div`
padding: 2px;
width: 100%;
display: flex;
flex-direction: column;
`;
// -------------------------------------------------------------------------------------------------
export const CardDetails = styled.div`
padding: 0px 0px;
border-radius: 4px 4px 4px 4px;
border-bottom: 1px solid rgb(236, 236, 236);
display: flex;
flex-grow: 1;
font-size: 0.8em;
justify-content: space-between;
padding-bottom: 5px;
margin-bottom:5px;
`;