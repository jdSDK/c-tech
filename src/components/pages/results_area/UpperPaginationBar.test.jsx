import { describe, it, expect, beforeEach } from 'vitest';
import { render, rerender, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import React from 'react';
import UpperPaginationBar from './UpperPaginationBar';

// Tests for the UpperPaginationBar component (global)
describe('UpperPaginationBar', () => {
    it('Shows correct result range and result count', () => {
        render(
            <UpperPaginationBar
                metadata={{
                    totalCount: 100,
                    filteredCount: 80,
                    startIndex: 1,
                    endIndex: 10
                }}
                resultsPerPage={10}
                setResultsPerPage={() => { }}
            />
        );
        const input = screen.getByLabelText("Results Per Page");
        const countText = screen.getByText('Showing 1-10 of 80 results for applied filters');

        expect(input).toBeInTheDocument();
        expect(countText).toBeInTheDocument();
    });
});

// Tests for the inner CountChanger component
describe('CountChanger', () => {

    // Mockup update state function
    const mockSetResultsPerPage = vi.fn();

    // Restart the resultsPerPage value
    beforeEach(() => {
        mockSetResultsPerPage.mockClear();
    })

    it('Updates the input value on blur, not onChange', () => {
        render(
            <UpperPaginationBar
                metadata={{
                    totalCount: 100,
                    filteredCount: 80,
                    startIndex: 1,
                    endIndex: 10
                }}
                resultsPerPage={10}
                setResultsPerPage={mockSetResultsPerPage}
            />
        )
        const input = screen.getByLabelText("Results Per Page");

        fireEvent.change(input, { target: { value: '20' } });
        expect(input).toHaveValue('10');

        fireEvent.blur(input);
        expect(mockSetResultsPerPage).toHaveBeenCalledWith(20);

    }
    );

    it('Updates the input value on Enter keyUp, not onChange', () => {
        render(
            <UpperPaginationBar
                metadata={{
                    totalCount: 100,
                    filteredCount: 80,
                    startIndex: 1,
                    endIndex: 10
                }}
                resultsPerPage={10}
                setResultsPerPage={mockSetResultsPerPage}
            />
        )
        const input = screen.getByLabelText("Results Per Page");

        fireEvent.change(input, { target: { value: '20' } });
        expect(input).toHaveValue('10');

        fireEvent.keyUp(input, { key: 'Enter' });
        expect(mockSetResultsPerPage).toHaveBeenCalledWith(20);
    });

    it('Does not update the input value on invalid input (NaN, negative)', () => {
        render(
            <UpperPaginationBar
                metadata={{
                    totalCount: 100,
                    filteredCount: 80,
                    startIndex: 1,
                    endIndex: 10
                }}
                resultsPerPage={10}
                setResultsPerPage={mockSetResultsPerPage}
            />
        )
        const input = screen.getByLabelText("Results Per Page");

        // Try a string value
        fireEvent.change(input, { target: { value: 'NaN' } });
        expect(input).toHaveValue('NaN');

        // Attempt to commit to state
        fireEvent.blur(input);
        expect(mockSetResultsPerPage).not.toHaveBeenCalled();


        // Try a negative value
        const negativeValue = Math.floor(Math.random() * -100);
        fireEvent.change(input, { target: { value: negativeValue.toString() } });
        expect(input).toHaveValue(negativeValue.toString());

        // Attempt to commit to state
        fireEvent.blur(input);
        expect(mockSetResultsPerPage).not.toHaveBeenCalled();
    });

    it('Updates the input defaultValue on state change and not on change', () => {
        const { rerender } = render(
            <UpperPaginationBar
                metadata={{
                    totalCount: 100,
                    filteredCount: 80,
                    startIndex: 1,
                    endIndex: 10
                }}
                resultsPerPage={10}
                setResultsPerPage={mockSetResultsPerPage}
            />
        );

        // Grab input (mutable)
        let input = screen.getByLabelText("Results Per Page");

        // Input the new value
        const newValue = 20;
        expect(input).toHaveValue('10')
        fireEvent.change(input, { target: { value: newValue } });

        // Commit to state
        fireEvent.blur(input);
        expect(mockSetResultsPerPage).toHaveBeenCalledWith(newValue);

        // Simulate a re-render
        rerender(
            <UpperPaginationBar
                metadata={{
                    totalCount: 100,
                    filteredCount: 80,
                    startIndex: 1,
                    endIndex: newValue
                }}
                resultsPerPage={newValue} // Pass the updated value
                setResultsPerPage={mockSetResultsPerPage}
            />
        );

        // Re-Query the input value
        input = screen.getByLabelText("Results Per Page");


        // Check that the input value is updated to the new value
        expect(input).toHaveValue(newValue.toString());
    });
});






