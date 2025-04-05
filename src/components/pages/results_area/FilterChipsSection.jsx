import { X } from "lucide-react";
import * as Styled from "./FilterChipsSection.styled";
import Vehicle from "../../../models/Vehicle";

const FilterChipsSection = ({ queryParams, setQueryParams }) => {

    const filters = queryParams.filter;
    const rangeFilters = queryParams.rangeFilter;

    const clearFilter = (key) => {
        filters[key] = null;
        setQueryParams(prev => ({
            ...prev,
            filter: {
                ...prev.filter,
                [key]: null
            }
        }));
    }
    const clearRangeFilter = (key) => {
        rangeFilters[key] = null;
        setQueryParams(prev => ({
            ...prev,
            rangeFilter: {
                ...prev.rangeFilter,
                [key]: {
                    min: null,
                    max: null
                }
            }
        }));
    }

    return (
        <Styled.FilterChipsContainer>
            {
                Object.keys(filters).map((key) => {
                    return (
                        filters[key] !== null && filters[key] !== undefined && filters[key] !== "" && (
                            <Styled.FilterChip key={key}>
                                <span>
                                    { // Special case for "favourites" where we want to show a different label
                                        key === "favourite" ?
                                            "Show only Favourites" :
                                            `${Vehicle.KEYWORD_FILTER_LABELS[key]}: ${filters[key]}`
                                    }
                                </span>
                                <Styled.FilterChipCloseButton title="Clear filter"
                                    onClick={() => clearFilter(key)}>
                                    <X size={16} strokeWidth={2.75} />
                                </Styled.FilterChipCloseButton>
                            </Styled.FilterChip>
                        )
                    );
                })
            }
            {
                Object.keys(rangeFilters).map((key) => {
                    return (
                        (rangeFilters[key]?.min || rangeFilters[key].max) && (

                            <Styled.FilterChip key={key}>

                                <span>{Vehicle.KEYWORD_FILTER_LABELS[key]}: {rangeFilters[key].min} - {rangeFilters[key].max}</span>
                                <Styled.FilterChipCloseButton title="Clear filter"
                                    onClick={() => clearRangeFilter(key)}>
                                    <X size={16} strokeWidth={2.75} />
                                </Styled.FilterChipCloseButton>
                            </Styled.FilterChip>
                        )
                    );
                }
                )

            }
        </Styled.FilterChipsContainer>

    );
}
export default FilterChipsSection;