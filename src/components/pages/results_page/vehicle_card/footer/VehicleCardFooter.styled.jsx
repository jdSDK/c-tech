import styled from "styled-components";

export const CardFooter = styled.div`
    padding: 0px;
    padding-left: 12px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-top: 4px;
    display: flex;
    font-size: 0.8em;
    justify-content: space-between;
    `;
export const CardFooterActions = styled.div`
    display: flex;
    gap: 0.5em;
    justify-conWtent: flex-end;
    align-items: center;
`;
export const CardFooterContextInfo = styled.div`
    display: flex;
    gap:0.3em;
    font-size: 0.8em;
    color: #6c757d;
    justify-content: flex-start;
    align-items: center;
    padding: 2px;
`;
export const CardFooterContextInfoIconWrapper = styled.div`
    color: rgb(214, 54, 54);
`;
export const CardFavouriteButton = styled.button`
    height: 26px;
    padding: 14px 12px;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid ${ ( props ) => ( props.$favourite ? "transparent" : "#bbb" ) };
    color: ${ ( props ) => ( props.$favourite ? "white" : "#bbb" ) };
    background-color: ${ ( props ) => ( props.$favourite ? "rgb(54, 148, 41)" : "white" ) };
    &:hover {
        border: 1px solid ${ ( props ) => ( props.$favourite ? "rgb(69, 175, 55)" : "rgb(53, 140, 255)" ) };
        background-color: ${ ( props ) => ( props.$favourite ? "rgb(69, 175, 55)" : "white" ) };
        color: ${ ( props ) => ( props.$favourite ? "white" : "#46B1C9" ) };
    }
`;
export const CardDetailButton = styled.button`
    border: 1px solid rgb(34, 119, 231);
    font-size: 0.8em;
    height: 26px;
    padding: 14px 12px;
    border-radius: 4px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: white;
    background-color:rgb(34, 119, 231);
    &:hover {
        border: 1px solid rgb(53, 140, 255);
        background-color: rgb(53, 140, 255);
    }
`;