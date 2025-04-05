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
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;
