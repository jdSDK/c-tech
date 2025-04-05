import React, { useState, useEffect } from "react";
import * as Styled from "./Selectors.styled";


export const FilterBoolean = ({
    title,
    clearOnFalse,
    target,
    setQueryParams,
    queryParams
}) => {
    const [value, setValue] = useState(queryParams?.filter[target]);

    // Sync the value state with queryParams.filter[target] when queryParams changes
    useEffect(() => {
        setValue(queryParams?.filter[target]);
    }, [queryParams]);

    // Handle checkbox change event
    const handleCheckboxChange = (e) => {
        setQueryParams((prev) => ({
            ...prev,
            filter: {
                ...prev.filter,
                [target]: e.target.checked ? true : clearOnFalse ? null : false,
            },
        }));
    }

    return (
        <Styled.BooleanContainer>
            <Styled.BooleanCheckbox
                type="checkbox"
                checked={value ?? false}
                onChange={handleCheckboxChange}
            />
            <Styled.BooleanLabel>{title}</Styled.BooleanLabel>
        </Styled.BooleanContainer>
    );
};

export const FilterDropdown = ({
    options,
    condition = true, // Allows the dropdown to be disabled if condition is false
    target,
    setQueryParams,
    queryParams
}) => {
    // Initialize the value state with the corresponding value from queryParams.filter[target]
    const [value, setValue] = useState(queryParams?.filter[target] || "");
    // Sync the value state with queryParams.filter[target] when queryParams changes
    useEffect(() => {
        setValue(queryParams?.filter[target] || "");
    }, [queryParams]);
    return (
        <Styled.SortContainer>
            <label></label>
            <Styled.StyledSelect
                value={value}
                disabled={!condition}
                onChange={(e) => {
                    // Update the queryParams state with the selected value
                    setQueryParams((prev) => ({
                        ...prev,
                        filter: {
                            ...prev.filter,
                            [target]: e.target.value,
                        },
                    }));
                }}
            >
                <option disabled value="">{target.toUpperCase()}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Styled.StyledSelect>
        </Styled.SortContainer>
    );
};

export const FilterRange = ({
    title,
    target,
    setQueryParams,
    queryParams
}) => {
    // Initialize the value state with the corresponding value from queryParams.rangeFilter[target] (min and max)
    const [value, setValue] = useState({
        min: queryParams?.rangeFilter[target]?.min || null,
        max: queryParams?.rangeFilter[target]?.max || null,
    });

    // Sync the value state with queryParams.rangeFilter[target] when queryParams changes
    useEffect(() => {
        setValue({
            min: queryParams?.rangeFilter[target]?.min || null,
            max: queryParams?.rangeFilter[target]?.max || null,
        });
    }, [queryParams]);


    return (
        <Styled.RangeContainer>
            <label>{title}</label>
            <Styled.RangeInputContainer>
                <Styled.RangeInput
                    type="number"
                    placeholder="Min"
                    value={value.min || ""}
                    onChange={(e) => {
                        setQueryParams((prev) => ({
                            ...prev,
                            rangeFilter: {
                                ...prev.rangeFilter,
                                [target]: {
                                    ...prev.rangeFilter[target],
                                    min: e.target.value ?
                                        parseInt(e.target.value)
                                        :
                                        null,
                                },
                            },
                        }));
                    }}
                />
                <Styled.RangeInput
                    type="number"
                    placeholder="Max"
                    value={value.max || ""}
                    onChange={(e) => {
                        setQueryParams((prev) => ({
                            ...prev,
                            rangeFilter: {
                                ...prev.rangeFilter,
                                [target]: {
                                    ...prev.rangeFilter[target],
                                    max: e.target.value ?
                                        parseInt(e.target.value)
                                        :
                                        null,
                                },
                            },
                        }));
                    }}
                />
            </Styled.RangeInputContainer>
        </Styled.RangeContainer>);
}