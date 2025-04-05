import styled from 'styled-components';

export const InfoContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 2px;
  padding: 12px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.div`
  font-size: 0.8em;
  color: #6c757d;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Count = styled.span`
  color: #111;
`;

export const PerPageInput = styled.input`
    width: 50px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 13px;
    text-align: center;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;