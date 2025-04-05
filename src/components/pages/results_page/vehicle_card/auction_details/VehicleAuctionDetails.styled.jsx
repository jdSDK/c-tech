import styled from 'styled-components';

export const AuctionDetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    padding: 4px 16px;
    font-size: 0.7em;
`;
export const Label = styled.div`
    color: #6c757d;
`;

export const AuctionDate = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
`;

export const AuctionDateValue = styled.div`
`;
export const AuctionDaysLeft = styled.div`

font-size: 12px;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 0.3em;
    color: ${ props => props.$urgent ? 'red' : 'green' };}
`;

