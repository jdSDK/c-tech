import { useState } from "react";
import * as Styled from "./FilterArea.styled";
import Vehicle from "../../../../../models/Vehicle";
import { FilterBoolean, FilterDropdown, FilterRange } from "../../../../inputs/FilterSelectors";
import { SortDropdown, SortInvertButton } from "../../../../inputs/SortSelectors";
import { Funnel, Minus, Plus } from "lucide-react";
import Collapsible from 'react-collapsible';

const FilterArea = ( {
    queryParams,
    setQueryParams
} ) => {

    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <Collapsible
            trigger={
                <Styled.FilterSortAreaTriggerComponent title="Show/Hide Filters & Sorting options">
                    <Styled.IconArea>
                        <Funnel size={ 20 } color="#aaa" strokeWidth={ 2 } />
                        <span>Filters & Sorting</span>
                    </Styled.IconArea>
                    { isOpen ?
                        <Minus size={ 20 } color="#aaa" strokeWidth={ 2 } />
                        :
                        <Plus size={ 20 } color="#aaa" strokeWidth={ 2 } />
                    }
                </Styled.FilterSortAreaTriggerComponent>
            }
            onOpen={ () => setIsOpen( true ) }
            onClose={ () => setIsOpen( false ) }
            transitionTime={ 200 }
            easing="ease-in-out"
        >
            <Styled.FilterSortAreaContainer>
                <Styled.FilterContainer>
                    <FilterDropdown
                        title="Make"
                        options={ Vehicle.getMakeOptions() }
                        target="make"
                        queryParams={ queryParams }
                        setQueryParams={ setQueryParams }
                    />
                    <FilterDropdown
                        title="Model"
                        options={ Vehicle.getModelOptions( queryParams?.filter?.make ? [ queryParams.filter.make ] : [] ) }
                        condition={ queryParams?.filter?.make }
                        target="model"
                        queryParams={ queryParams }
                        setQueryParams={ setQueryParams }
                    />
                    <FilterBoolean
                        title="Favourites"
                        target="favourite"
                        queryParams={ queryParams }
                        clearOnFalse={ true }
                        setQueryParams={ setQueryParams }
                    />

                    <FilterRange
                        title="Starting Bid"
                        target="startingBid"
                        queryParams={ queryParams }
                        setQueryParams={ setQueryParams }
                    />
                </Styled.FilterContainer>

                <Styled.SortContainer>
                    <SortDropdown
                        title="Sort by"
                        options={ Vehicle.getSortOptions() }
                        queryParams={ queryParams }
                        setQueryParams={ setQueryParams }
                    />
                    <SortInvertButton
                        queryParams={ queryParams }
                        setQueryParams={ setQueryParams }
                    />
                </Styled.SortContainer>
            </Styled.FilterSortAreaContainer>
        </Collapsible>
    );
};
export default FilterArea;