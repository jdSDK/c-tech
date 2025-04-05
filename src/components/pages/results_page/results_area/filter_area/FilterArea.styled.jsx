import styled from "styled-components";

export const FilterSortAreaContainer = styled.div`
    display: flex;
    flex-direction: row:
    width: 100%;
    justify-content: space-between;
    background: rgb(223, 223, 223);
    background-image: linear-gradient(180deg, rgb(247, 247, 247) 0%, rgb(255, 255, 255) 100%);
    border: 1px solid #eee;
    border-radius: 0px 0px 8px 8px;
    padding: 10px 20px;
    font-size: 14px;
`;
export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
`;
export const IconArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
`;
export const SortContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;
export const FilterSortAreaTriggerComponent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    border: 1px solid #eee;
    border-radius: 8px 8px 0px 0px;
    box-shadow: 0 0 5px rgba(0, 3, 5, 0.05);
    align-items: center;
    padding: 10px 20px;
    background: rgb(255, 255, 255);
    cursor: pointer;
`;
