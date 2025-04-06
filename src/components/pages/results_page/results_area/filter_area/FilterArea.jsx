import { useState, useEffect } from "react";
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
    const [ uncommitedParams, setUncommitedParams ] = useState( queryParams );

    // Sync the uncommitedParams state with queryParams when queryParams changes
    // This is to ensure that the uncommitedParams are always in sync with the latest queryParams
    // This is important for the FilterArea to work correctly
    // and to avoid any issues with the filters and sorting options
    useEffect( () => {
        setUncommitedParams( queryParams );
    }, [ queryParams ] );
    // Handle the commit of uncommitedParams to queryParams
    const commitChanges = () => {
        setQueryParams( uncommitedParams );
    };


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
                        title="Filter by make"
                        options={ Vehicle.getMakeOptions() }
                        target="make"
                        queryParams={ uncommitedParams }
                        setQueryParams={ setUncommitedParams }
                    />
                    <Styled.Rule />
                    <FilterDropdown
                        title="Filter by model"
                        options={ Vehicle.getModelOptions() }

                        target="model"
                        queryParams={ uncommitedParams }
                        setQueryParams={ setUncommitedParams }
                    />
                    <Styled.Rule />
                    <FilterRange
                        title="Starting Bid range"
                        target="startingBid"
                        queryParams={ uncommitedParams }
                        setQueryParams={ setUncommitedParams }
                    />
                    <FilterBoolean
                        title="Show only favourites"
                        target="favourite"
                        queryParams={ uncommitedParams }
                        clearOnFalse={ true }
                        setQueryParams={ setUncommitedParams }
                    />
                </Styled.FilterContainer>
                <Styled.Rule />
                <Styled.SortContainer $alignEnd={ "flex-end" }>
                    <SortDropdown
                        title="Sort by"
                        options={ Vehicle.getSortOptions() }
                        queryParams={ uncommitedParams }
                        setQueryParams={ setUncommitedParams }
                    />
                    <SortInvertButton
                        queryParams={ uncommitedParams }
                        setQueryParams={ setUncommitedParams }
                    />
                </Styled.SortContainer>
                <Styled.Rule />
                <Styled.SubmitButton
                    className="commit-button"
                    onClick={ commitChanges }
                    disabled={ JSON.stringify( uncommitedParams ) === JSON.stringify( queryParams ) }
                >
                    <Funnel size={ 18 } color="white" strokeWidth={ 2 } /> Apply
                </Styled.SubmitButton>
            </Styled.FilterSortAreaContainer>

        </Collapsible>
    );
};
export default FilterArea;