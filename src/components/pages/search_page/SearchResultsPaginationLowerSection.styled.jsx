import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  padding: 0.6em 1em;
  background-color: white;
  gap: 1em;
  font-size: 16px;
`;
export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
export const PaginationButton = styled.button`
  padding: 0;
  height: 36px;
  border: none;
  border: ${props => (!props.$isActive && '1px solid #ddd')};
  background: ${props => (props.$isActive ? 'rgb(11, 117, 203)' : 'none')};
  color: ${props => (props.$isActive ? 'white' : '#222')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
border-radius: 4px;
  padding: 10px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
    &:hover {
        background: ${props => (props.$isActive ? 'rgb(11, 117, 203)' : 'none')};
        border: ${props => (!props.$isActive && '1px solid #ccc')};
    }
    &:disabled {
        background: #f0f0f0;
        color: #ccc;
        cursor: not-allowed;
    }
`;
export const PaginationInfo = styled.div`
    font-size: 0.8em;
    color: #555;
    width: 80px;
    text-align: center;
    font-weight: 500;
`;