import { describe, it, expect, beforeEach } from 'vitest';
import { render, rerender, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import React from 'react';
import LowerPaginationBar from './LowerPaginationBar';

const test_default = <LowerPaginationBar
    queryParams={ {
        pagination: {
            page: 1,
            perPage: 10
        }
    } }
    currentPage={ 1 }
    setQueryParams={ () => { } }
    metadata={ {
        pageCount: 10,
        lastPage: 10,
        hasNextPage: true,
        hasPreviousPage: false,
        filteredCount: 100,
        startIndex: 1,
        endIndex: 10
    } }
/>;

describe( "LowerPaginationBar", () => {
    it( "Renders correctly", () => {
        render( test_default );
        const input = screen.getByLabelText( "Update Page" );
        expect( input ).toBeInTheDocument();
        expect( input ).toHaveValue( "1" );
    } );

    it( "Shows correct Last Page number", () => {
        render( test_default );
        const lastPageButton = screen.getByText( "of 10 pages" );
        expect( lastPageButton ).toBeInTheDocument();


    }
    );



} );

