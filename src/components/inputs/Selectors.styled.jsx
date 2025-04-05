import styled from "styled-components";

export const StyledSelect = styled.select`
height: 30px;
width: 130px;
padding: 0px 32px 0px 12px;
border: 1px solid #f1f1f1;
background-color: red;
border-radius: 4px;
background-color: white;
cursor: pointer;
color: #444;
outline: none;

// Weird workaround to get a better arrow
appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;

  &:disabled{
  opacity: 0.5;
  }

&:focus {
  border-color: #3b82f6; // blue-500
}

& option[value=""]{
  color: #aaa;
}
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  height: 100%;
`;

export const SortButton = styled.button`
  height: 30px;
  border-radius: 4px;
  background-color: rgb(47, 124, 218);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
    border:none;
  &:disabled{
  opacity: 0.5;
  }
    &:hover:not(:disabled) {
    background-color: rgb(32, 144, 255);
    transition: background-color 0.2s ease-in-out;
    }

`;

export const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 3px;
    margin-bottom: 14px;
    & label{
        font-size: 14px;
        color: #aaa;
    }
`;

export const RangeInputContainer = styled.div`
    display: flex;
    gap: 8px;

`;

export const RangeInput = styled.input`
    width: 80px;
    height: 30px;
    padding: 0px 32px 0px 12px;
    
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }

    &::placeholder {
        color: #aaa;
    }
`;

export const BooleanContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    gap: 2px;
    padding: 0px 26px 0px 16px;
`;

export const BooleanLabel = styled.label`
    font-size: 14px;
    color: #333;
`;

export const BooleanCheckbox = styled.input`
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: ${({ theme }) => theme.primary};
`;