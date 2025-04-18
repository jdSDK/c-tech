import styled from 'styled-components';

export const CardHeader = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3em;
`;
export const CardHeaderVehicleInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:0.3em;
    font-size: 18px;
`;
export const CardHeaderYear = styled.div`
    font-weight: light;
    color:rgb(157, 166, 174);
    @media (max-width: 1550px) {
        font-size: 16px;
    }
`;
export const CardHeaderTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 1550px) {
        font-size: 16px;
    }
`;
export const CardHeaderEngineSize = styled.div`
    @media (max-width: 1550px) {
        font-size: 16px;
    }
`;
export const CardHeaderPrice = styled.div`
    font-size: 18px;
    margin-left: 6px;
    align-items: flex-end;
    display: flex;
    gap: 3px;
    font-weight: light;
    @media (max-width: 1550px) {
        font-size: 16px;
    }
`;
export const CardHeaderPriceLabel = styled.span`
    font-size: 18px;
    color:rgb(157, 166, 174);
    margin-right: 4px;
    @media (max-width: 1550px) {
        font-size: 16px;
    }
`;