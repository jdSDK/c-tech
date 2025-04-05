import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { vi } from 'vitest';

import '@testing-library/jest-dom';

import FilterChipsSection from "./FilterChipsSection";

describe( "FilterChipsSection", () => {
    const mockSetQueryParams = vi.fn();

    const defaultProps = {
        queryParams: {
            filter: {
                make: "BMW",
                model: "3 Series",
            },
            rangeFilter: {
                price: { min: 1000, max: 5000 },
            },
        },
        setQueryParams: mockSetQueryParams,
    };

    const nullProps = {
        queryParams: {
            filter: {
                favourite: null,
                color: null,
            },
            rangeFilter: {
                price: { min: null, max: null },
            },
        },
        setQueryParams: mockSetQueryParams,
    };

    const favouriteActiveProps = {
        queryParams: {
            filter: {
                favourite: true,
            },
            rangeFilter: {
                price: { min: null, max: null },
            },
        },
        setQueryParams: mockSetQueryParams,
    };

    beforeEach( () => vi.clearAllMocks() );

    it( "Show 'Active Filters' header when filters are active", () => {
        render( <FilterChipsSection { ...defaultProps } /> );
        const activeFiltersHeader = screen.getByText( "Active Filters:" );
        expect( activeFiltersHeader ).toBeInTheDocument();
    } );

    it( "Doesn't show 'Active Filters' header when no filters are active", () => {
        render( <FilterChipsSection { ...nullProps } /> );
        expect( screen.queryByText( "Active Filters:" ) ).not.toBeInTheDocument();
    } );

    it( "Calls setQueryParams when a filter chip is cleared", () => {
        render( <FilterChipsSection { ...defaultProps } /> );
        const clearButton = screen.getAllByTitle( "Clear filter" )[ 0 ]; // Array
        fireEvent.click( clearButton );
        expect( mockSetQueryParams ).toHaveBeenCalledWith( expect.any( Function ) );
    } );

    it( "Shows the unique 'favourite' chip", () => {
        render( <FilterChipsSection { ...favouriteActiveProps } /> );
        expect( screen.queryByText( "Show only Favourites" ) ).toBeInTheDocument();
    } );
} );