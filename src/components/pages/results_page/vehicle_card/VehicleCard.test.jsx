import { render, screen } from '@testing-library/react';
import VehicleCard from './VehicleCard';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe( 'VehicleCard', () => {
    const mockVehicleWithoutImage = {
        image: null,
    };

    const mockFavouriteToggle = vi.fn();
    const mockHandleViewDetail = vi.fn();

    it( 'Placeholder is shown when there\'s no vehicle image', () => {
        render(
            <VehicleCard
                vehicle={ mockVehicleWithoutImage }
                index={ 0 }
                favouriteToggle={ mockFavouriteToggle }
                handleViewDetail={ mockHandleViewDetail }
            />
        );

        const placeholderElement = screen.getByLabelText( 'Image Placeholder' );
        expect( placeholderElement ).toBeInTheDocument();
    } );
} );