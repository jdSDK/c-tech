import styled from "styled-components";

export const FilterSortAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    background: rgb(223, 223, 223);
    background-image: linear-gradient(180deg, rgb(247, 247, 247) 0%, rgb(246, 246, 246) 100%);
    border: 1px solid #eee;
    border-radius: 0px 0px 8px 8px;
    padding:20px 20px;
    padding-bottom: 60px;
    font-size: 14px;
`;
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
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
export const Rule = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin: 12px 0;
`;
export const SortContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;
export const FilterSortAreaTriggerComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 3, 5, 0.05);
    align-items: center;
    padding: 10px 20px;
    background: rgb(255, 255, 255);
    cursor: pointer;
`;
export const SubmitButton = styled.button`
    height: 30px;
    border-radius: 4px;
    background-color: rgb(47, 124, 218);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    align-self: center;
    width: 70%;
    gap:10px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 20px;
    margin-top: 20px;
    &:disabled {
        opacity: 0.5;
    }
     
    &:hover:!disabled {
        background-color: rgb(75, 148, 243);
    }
    transition: background-color 0.2s ease-in-out;
`;

