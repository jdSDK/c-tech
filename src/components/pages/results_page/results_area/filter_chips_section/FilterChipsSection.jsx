import { X } from "lucide-react";
import * as Styled from "./FilterChipsSection.styled";
import Vehicle from "../../../../../models/Vehicle";

const FilterChipsSection = ( {
    queryParams,
    setQueryParams
} ) => {

    const filters = queryParams.filter;
    const rangeFilters = queryParams.rangeFilter;

    const clearFilter = ( key ) => {
        filters[ key ] = null;
        setQueryParams( prev => ( {
            ...prev,
            filter: {
                ...prev.filter,
                [ key ]: null
            }
        } ) );
    };
    const clearRangeFilter = ( key ) => {
        rangeFilters[ key ] = null;
        setQueryParams( prev => ( {
            ...prev,
            rangeFilter: {
                ...prev.rangeFilter,
                [ key ]: {
                    min: null,
                    max: null
                }
            }
        } ) );
    };

    const hasFilters = () => {
        // Helper function to check if any filter is set for visual indication
        return Object.keys( filters ).some( ( key ) => {
            return filters[ key ] !== null;
        } ) || Object.keys( rangeFilters ).some( ( key ) => {
            const range = rangeFilters[ key ];
            return range?.min || range?.max;
        } );
    };

    const renderFilterChip = ( key, label, onClear ) => (
        <Styled.FilterChip key={ key }>
            <span>{ label }</span>
            <Styled.FilterChipCloseButton title="Clear filter" onClick={ onClear }>
                <X size={ 16 } strokeWidth={ 2.75 } />
            </Styled.FilterChipCloseButton>
        </Styled.FilterChip>
    );
    const renderFilters = () => (
        Object.keys( filters ).map( ( key ) => {
            if ( filters[ key ] !== null && filters[ key ] !== undefined && filters[ key ] !== "" ) {
                const label = key === "favourite"
                    ? "Show only Favourites"
                    : `${ Vehicle.KEYWORD_FILTER_LABELS[ key ] }: ${ filters[ key ] }`;
                return renderFilterChip( key, label, () => clearFilter( key ) );
            }
            return null;
        } )
    );
    const renderRangeFilters = () => (
        Object.keys( rangeFilters ).map( ( key ) => {
            const range = rangeFilters[ key ];
            if ( range?.min || range?.max ) {
                const label = `${ Vehicle.KEYWORD_FILTER_LABELS[ key ] }: ${ range.min } - ${ range.max }`;
                return renderFilterChip( key, label, () => clearRangeFilter( key ) );
            }
            return null;
        } )
    );


    return (
        <Styled.FilterChipsContainer>
            {
                hasFilters() &&
                <Styled.FilterChipsHeader aria-label="Active Filters">
                    Active Filters:
                </Styled.FilterChipsHeader>
            }
            {
                renderFilters()
            }
            {
                renderRangeFilters()
            }

        </Styled.FilterChipsContainer>

    );
};
export default FilterChipsSection;