import React, { useEffect, useState } from "react";
import Vehicle from "../../models/Vehicle";
import { ArrowDown01, ArrowUp01, ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import { SortButton, SortContainer, StyledSelect } from "./Selectors.styled";

export const SortDropdown = ({ title, options, setQueryParams, queryParams }) => {
    const [value, setValue] = useState(queryParams?.sort.sortBy || "");

    useEffect(() => {
        setValue(queryParams?.sort.sortBy || "");
    }, [queryParams]);

    const handleSelectChange = (e) => {
        setQueryParams((prev) => ({
            ...prev,
            sort: {
                ...prev.sort,
                sortBy: e.target.value,
            },
        }));
    };

    return (
        <SortContainer>
            <StyledSelect value={value} onChange={handleSelectChange}>
                <option value="">
                    SORT BY
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {Vehicle.KEYWORD_FILTER_LABELS[option]}
                    </option>
                ))}
            </StyledSelect>
        </SortContainer>
    );
};

export const SortInvertButton = ({ setQueryParams, queryParams }) => {
    const handleClick = () => {
        setQueryParams((prev) => ({
            ...prev,
            sort: {
                ...prev.sort,
                ascending: !prev.sort.ascending,
            },
        }));
    };

    return (
        <SortButton
            onClick={handleClick}
            disabled={queryParams.sort.sortBy === null}
            title="Invert order"
        >
            {queryParams.sort.ascending ?
                Vehicle.isKeywordStringField(queryParams.sort.sortBy) ?
                    <ArrowDownAZ size={20} strokeWidth={2} />
                    :
                    <ArrowDown01 size={20} strokeWidth={2} />

                : Vehicle.isKeywordStringField(queryParams.sort.sortBy) ?
                    <ArrowUpAZ size={20} strokeWidth={2} />
                    :
                    <ArrowUp01 size={20} strokeWidth={2} />
            }
        </SortButton>
    );
};