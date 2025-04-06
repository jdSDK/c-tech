import styled from 'styled-components';

export const Input = styled.input`
    width: 40px;
    padding: ${ props => props.$inputPadding ? props.$inputPadding : '0' };
    text-align: center;
    color: ${ props => props.$textColor ? props.$textColor : '#ddd' };
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 0 4px;
    border-color: ${ props => props.$isValid ? '' : 'red' };
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;
export const Tooltip = styled.div`
    position: absolute;
    bottom: 100%; // Position above the component
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    width: 150px;
    font-size: 12px;
    margin-bottom: 5px; // Distance from the component
    background-color: #222;
    color: white;
    border-radius: 4px;
    visibility: ${ ( { $isVisible } ) => ( $isVisible ? 'visible' : 'hidden' ) };
    opacity: ${ ( { $isVisible } ) => ( $isVisible ? 1 : 0 ) };
    transition: opacity 0.5s;
`;