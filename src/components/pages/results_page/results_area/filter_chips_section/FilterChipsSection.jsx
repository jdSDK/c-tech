import { X, FunnelX } from "lucide-react";
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
                [ key ]: key == "favourite" ? null : [],
            }
        } ) );
    };
    const clearFilterArray = ( key, value ) => {
        if ( !filters[ key ] ) {
            filters[ key ] = []; // Ensure the key is initialized as an array
        }

        filters[ key ] = filters[ key ].filter( ( v ) => v !== value );

        setQueryParams( ( prev ) => ( {
            ...prev,
            filter: {
                ...prev.filter,
                [ key ]: filters[ key ],
            },
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
        if ( filters ) {
            if ( filters.make?.length > 0 || filters.model?.length > 0 || filters.favourite ) {
                return true;
            }
        }
        if ( rangeFilters ) {
            if ( Object.values( rangeFilters ).some( ( value ) => value.min || value.max ) ) {
                return true;
            }
        }
        return false;
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
        // Iterate "filters"
        Object.keys( filters ).map( ( key ) => {
            const filterValue = filters[ key ];
            if ( filterValue !== null && filterValue !== undefined ) {

                //  In case we have an array of filter values (e.g. make, model)
                if ( Array.isArray( filterValue ) ) {

                    // Iterate the array of filter values
                    return filterValue.map( ( value, index ) => {
                        const label = `${ Vehicle.KEYWORD_FILTER_LABELS[ key ] }: ${ value }`;

                        // Render one chip for each filter
                        return renderFilterChip( `${ key }: ${ index }`, label, () => {
                            clearFilterArray( key, value );
                        } );
                    } );
                }
                // Otherwise it's the "favourite" case or any other single value filter
                else {
                    const label = key === "favourite"
                        ? "Show only Favourites"
                        : `${ Vehicle.KEYWORD_FILTER_LABELS[ key ] }: ${ filterValue }`;
                    return renderFilterChip( key, label, () => clearFilter( key ) );
                }
            }
            return null;
        } )
    );
    const renderRangeFilters = () => (
        Object.keys( rangeFilters ).map( ( key ) => {
            const range = rangeFilters[ key ];
            if ( range?.min || range?.max ) {
                const label = ` 
                ${ range.min ? "€" + range.min + " <" : "" } 
                ${ [ Vehicle.KEYWORD_FILTER_LABELS[ key ] ] }
                ${ range.max ? "< " + "€" + range.max : "" }`;
                return renderFilterChip( key, label, () => clearRangeFilter( key ) );
            }
            return null;
        } )
    );


    return (
        <Styled.FilterChipsAndClearButtonWrapper>
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
            <div>
                {
                    hasFilters() &&
                    <Styled.ClearButtonWrapper>
                        <Styled.ClearButton
                            title="Clear all filters"
                            onClick={ () => setQueryParams( {
                                ...queryParams,
                                filter: {
                                    make: [],
                                    model: [],
                                    favourite: null,
                                },
                                rangeFilter: {
                                    startingBid: {
                                        min: null,
                                        max: null,
                                    },
                                    mileage: {
                                        min: null,
                                        max: null,
                                    },
                                    year: {
                                        min: null,
                                        max: null,
                                    },
                                },
                            } ) }
                            disabled={ !hasFilters() }
                        >
                            <FunnelX size={ 16 } strokeWidth={ 2 } /> Clear All Filters
                        </Styled.ClearButton>
                    </Styled.ClearButtonWrapper>

                }
            </div>



        </Styled.FilterChipsAndClearButtonWrapper>


    );
};
export default FilterChipsSection;