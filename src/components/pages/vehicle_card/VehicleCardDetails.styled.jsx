import styled from 'styled-components';
export const DetailsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:2em;
    padding: 4px 16px;
    font-size: 0.7em;
`;
export const DetailsColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;
export const DetailLine = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
`;
export const DetailText = styled.div`
    color: #6c757d;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    gap: 4px;
`;
export const DetailEquipmentChip = styled.div`
    color: #6c757d;
    display:inline-block;
    padding: 2px 10px;
    align-items: center;
    text-transform: capitalize;
    border-radius: 16px;
    background-color: #f8f9fa;
    border: 1px solid #e9ecef;
    margin-right:3px;
`;
export const GenericIconWrapper = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
`;
export const FuelIconWrapper = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props =>
        props.$fuel == "petrol" ?
            "rgba(8, 167, 0, 0.8)"
            :
            "rgba(218, 156, 0, 0.8)"
    };
`;
