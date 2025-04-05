import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';

import '@testing-library/jest-dom';

import VehicleCardFooter from './VehicleCardFooter';

describe( 'VehicleCardFooter', () => {
    const mockVehicle = {
        location: 'New York',
        favourite: false,
    };
    const mockFavouriteToggle = vi.fn();
    const mockHandleViewDetail = vi.fn();

    it( 'Renders the card correctly (location, button favourite w/ correct text)', () => {
        render(
            <VehicleCardFooter
                vehicle={ mockVehicle }
                favouriteToggle={ mockFavouriteToggle }
                handleViewDetail={ mockHandleViewDetail }
            />
        );
        const location = screen.getByText( mockVehicle.location );
        const favouriteButton = screen.getByText( 'Save' );
        const viewOfferButton = screen.getByText( 'View Offer' );

        expect( location ).toBeInTheDocument();
        expect( favouriteButton ).toBeInTheDocument();
        expect( viewOfferButton ).toBeInTheDocument();
    } );

    it( 'Toggle toggleFavourite function when the button is clicked', () => {
        render(
            <VehicleCardFooter
                vehicle={ mockVehicle }
                favouriteToggle={ mockFavouriteToggle }
                handleViewDetail={ mockHandleViewDetail }
            />
        );

        const favouriteButton = screen.getByLabelText( 'Favourite' );
        fireEvent.click( favouriteButton );

        expect( mockFavouriteToggle ).toHaveBeenCalledWith( mockVehicle );
    } );

    it( 'Calls the sidebar opening function when the offer button is clicked', () => {
        render(
            <VehicleCardFooter
                vehicle={ mockVehicle }
                favouriteToggle={ mockFavouriteToggle }
                handleViewDetail={ mockHandleViewDetail }
            />
        );

        const viewOfferButton = screen.getByLabelText( 'View Offer' );
        fireEvent.click( viewOfferButton );

        expect( mockHandleViewDetail ).toHaveBeenCalledWith( mockVehicle );
    } );
} );