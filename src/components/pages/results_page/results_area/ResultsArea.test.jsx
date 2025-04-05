import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Vehicle from '../../../../models/Vehicle';

import '@testing-library/jest-dom';

import React from 'react';
import ResultsArea from './ResultsArea';

describe( 'ResultsArea', () => {
    it( 'Render empty result area when vehicles=[]', () => {
        render(
            <ResultsArea
                vehicles={ [] }
                favouriteToggle={ () => { } }
                isLoading={ false }
                handleViewDetail={ () => { } }
            />
        );

        const noResultsWrapper = screen.getByText( 'No vehicles found matching your criteria' );
        expect( noResultsWrapper ).toBeInTheDocument();
        const adjustFiltersText = screen.getByText( 'Adjust your filters' );
        expect( adjustFiltersText ).toBeInTheDocument();
    } );


    it( 'Render loading state when isLoading = True', () => {
        render(
            <ResultsArea
                vehicles={ [] }
                favouriteToggle={ () => { } }
                isLoading={ true }
                handleViewDetail={ () => { } }
            />
        );

        const loader = screen.getByText( 'Getting your Results' );
        expect( loader ).toBeInTheDocument();
    }
    );

    it( 'Render four VehicleCards with 4 vehicles in state', () => {
        const sampleVehicles = Vehicle.getSampleVehicles( 4 );
        render(
            <ResultsArea
                vehicles={ sampleVehicles }
                favouriteToggle={ () => { } }
                isLoading={ false }
                handleViewDetail={ () => { } }
            />
        );
        const vehicleCards = screen.getAllByLabelText( 'Vehicle Card' );
        expect( vehicleCards.length ).toBe( 4 );
    } );


} );