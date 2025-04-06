import React, { useState, useEffect } from "react";
import * as Styled from "./Selectors.styled";


export const FilterBoolean = ( {
    title,
    clearOnFalse,
    target,
    setQueryParams,
    queryParams
} ) => {
    const [ value, setValue ] = useState( queryParams?.filter[ target ] );

    // Sync the value state with queryParams.filter[target] when queryParams changes
    useEffect( () => {
        setValue( queryParams?.filter[ target ] );
    }, [ queryParams ] );

    // Handle checkbox change event
    const handleCheckboxChange = ( e ) => {
        setQueryParams( ( prev ) => ( {
            ...prev,
            filter: {
                ...prev.filter,
                [ target ]: e.target.checked ? true : clearOnFalse ? null : false,
            },
        } ) );
    };

    return (
        <Styled.BooleanContainer>
            <Styled.BooleanCheckbox
                type="checkbox"
                checked={ value ?? false }
                onChange={ handleCheckboxChange }
            />
            <Styled.BooleanLabel>{ title }</Styled.BooleanLabel>
        </Styled.BooleanContainer>
    );
};

export const FilterDropdown = ( {
    title,
    options,
    condition = true, // Allows the dropdown to be disabled if condition is false
    target,
    setQueryParams,
    queryParams
} ) => {
    // Initialize the value state with the corresponding value from queryParams.filter[target]
    const [ value, setValue ] = useState( queryParams?.filter[ target ] || [] );
    // Sync the value state with queryParams.filter[target] when queryParams changes
    useEffect( () => {
        setValue( queryParams?.filter[ target ] || [] );
    }, [ queryParams ] );

    const handleChange = ( e ) => {
        const selectedValue = e.target.value;

        // Check if the value is already in the array
        const updatedArray = value.includes( selectedValue )
            ? value.filter( ( v ) => v !== selectedValue ) // Remove the value if it exists
            : [ ...value, selectedValue ]; // Add the value if it doesn't exist

        // Update the queryParams state with the updated array
        setQueryParams( ( prev ) => ( {
            ...prev,
            filter: {
                ...prev.filter,
                [ target ]: updatedArray.length > 0 ? updatedArray : null, // Set to null if the array is empty
            },
        } ) );
    };

    // Filter out selected options from the dropdown
    const availableOptions = options.filter( ( option ) => !value.includes( option ) );


    return (
        <Styled.SortContainer>
            <label>{ title }</label>
            <Styled.StyledSelect
                value="" // Always reset the dropdown to the placeholder after selection
                disabled={ !condition }
                onChange={ handleChange }
            >
                <option disabled value="">
                    - - - - -
                </option>
                { availableOptions.map( ( option, index ) => (
                    <option key={ index } value={ option }>
                        { option }
                    </option>
                ) ) }
            </Styled.StyledSelect>

            {/* Render selected values as chips or a list */ }
            <Styled.SelectedValuesContainer>
                { value.map( ( selectedValue, index ) => (
                    <Styled.SelectedValueChip key={ index }>
                        { selectedValue }
                        <Styled.RemoveButton
                            onClick={ () => {
                                // Remove the value when the chip's remove button is clicked
                                const updatedArray = value.filter( ( v ) => v !== selectedValue );
                                setQueryParams( ( prev ) => ( {
                                    ...prev,
                                    filter: {
                                        ...prev.filter,
                                        [ target ]: updatedArray.length > 0 ? updatedArray : null,
                                    },
                                } ) );
                            } }
                        >
                            ✕
                        </Styled.RemoveButton>
                    </Styled.SelectedValueChip>
                ) ) }
            </Styled.SelectedValuesContainer>
        </Styled.SortContainer>
    );
};

export const FilterRange = ( {
    title,
    target,
    setQueryParams,
    queryParams
} ) => {
    // Initialize the value state with the corresponding value from queryParams.rangeFilter[target] (min and max)
    const [ value, setValue ] = useState( {
        min: queryParams?.rangeFilter[ target ]?.min || null,
        max: queryParams?.rangeFilter[ target ]?.max || null,
    } );

    // Sync the value state with queryParams.rangeFilter[target] when queryParams changes
    useEffect( () => {
        setValue( {
            min: queryParams?.rangeFilter[ target ]?.min || null,
            max: queryParams?.rangeFilter[ target ]?.max || null,
        } );
    }, [ queryParams ] );

    const clearInput = ( field ) => {
        setQueryParams( ( prev ) => ( {
            ...prev,
            rangeFilter: {
                ...prev.rangeFilter,
                [ target ]: {
                    ...prev.rangeFilter[ target ],
                    [ field ]: null,
                },
            },
        } ) );
    };

    return (
        <Styled.RangeContainer>
            <label>{ title }</label>
            <Styled.RangeInputContainer>
                <Styled.RangeInputWrapper>
                    <Styled.RangeInput
                        type="text" // Change to "text" to remove up/down arrows
                        placeholder="Min"
                        value={ value.min || "" }
                        onChange={ ( e ) => {
                            setQueryParams( ( prev ) => ( {
                                ...prev,
                                rangeFilter: {
                                    ...prev.rangeFilter,
                                    [ target ]: {
                                        ...prev.rangeFilter[ target ],
                                        min: e.target.value
                                            ? parseInt( e.target.value )
                                            : null,
                                    },
                                },
                            } ) );
                        } }
                    />
                    { value.min && (
                        <Styled.ClearButton
                            onClick={ () => clearInput( "min" ) }
                            title="Clear Min"
                        >
                            ✕
                        </Styled.ClearButton>
                    ) }
                </Styled.RangeInputWrapper>
                <Styled.RangeInputWrapper>
                    <Styled.RangeInput
                        type="text" // Change to "text" to remove up/down arrows
                        placeholder="Max"
                        value={ value.max || "" }
                        onChange={ ( e ) => {
                            setQueryParams( ( prev ) => ( {
                                ...prev,
                                rangeFilter: {
                                    ...prev.rangeFilter,
                                    [ target ]: {
                                        ...prev.rangeFilter[ target ],
                                        max: e.target.value
                                            ? parseInt( e.target.value )
                                            : null,
                                    },
                                },
                            } ) );
                        } }
                    />
                    { value.max && (
                        <Styled.ClearButton
                            onClick={ () => clearInput( "max" ) }
                            title="Clear Max"
                        >
                            ✕
                        </Styled.ClearButton>
                    ) }
                </Styled.RangeInputWrapper>
            </Styled.RangeInputContainer>
        </Styled.RangeContainer> );
};