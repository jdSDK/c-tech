import Vehicle from "../../../models/Vehicle"
import { FilterBoolean, FilterDropdown, FilterRange } from "../../inputs/FilterSelectors";
import { Funnel, Minus, Plus } from "lucide-react";
import styled from "styled-components";
import { SortDropdown, SortInvertButton } from "../../inputs/SortSelectors";
import Collapsible from 'react-collapsible';
import React, { useState } from "react";

const FilterSortAreaContainer = styled.div`
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

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
`;
const IconArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
`;
const SortContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;
const FilterSortAreaTriggerComponent = styled.div`
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


const FilterArea = ({ queryParams, setQueryParams }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible
            trigger={
                <FilterSortAreaTriggerComponent title="Show/Hide Filters & Sorting options">
                    <IconArea>
                        <Funnel size={20} color="#aaa" strokeWidth={2} />
                        <span>Filters & Sorting options</span>
                    </IconArea>
                    {isOpen ?
                        <Minus size={20} color="#aaa" strokeWidth={2} />
                        :
                        <Plus size={20} color="#aaa" strokeWidth={2} />
                    }
                </FilterSortAreaTriggerComponent>
            }
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            transitionTime={200}
            easing="ease-in-out"
        >
            <FilterSortAreaContainer>
                <FilterContainer>
                    <FilterDropdown
                        title="Make"
                        options={Vehicle.getMakeOptions()}
                        target="make"
                        queryParams={queryParams}
                        setQueryParams={setQueryParams}
                    />
                    <FilterDropdown
                        title="Model"
                        options={Vehicle.getModelOptions(queryParams?.filter?.make ? [queryParams.filter.make] : [])}
                        condition={queryParams?.filter?.make}
                        target="model"
                        queryParams={queryParams}
                        setQueryParams={setQueryParams}
                    />
                    <FilterBoolean
                        title="Favourites"
                        target="favourite"
                        queryParams={queryParams}
                        clearOnFalse={true}
                        setQueryParams={setQueryParams}
                    />

                    <FilterRange
                        title="Starting Bid"
                        target="startingBid"
                        queryParams={queryParams}
                        setQueryParams={setQueryParams}
                    />
                </FilterContainer>

                <SortContainer>
                    <SortDropdown
                        title="Sort by"
                        options={Vehicle.getSortOptions()}
                        queryParams={queryParams}
                        setQueryParams={setQueryParams}
                    />
                    <SortInvertButton
                        queryParams={queryParams}
                        setQueryParams={setQueryParams}
                    />
                </SortContainer>

            </FilterSortAreaContainer>
        </Collapsible>
    )
}
export default FilterArea;