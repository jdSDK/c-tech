import Vehicle from "../../../models/Vehicle"
import { useState, useEffect } from "react";

const SearchFilterArea = ({ queryParams, setQueryParams }) => {

    const FilterDropdown = ({ title, options, condition = true, target, setQueryParams, queryParams }) => {
        // Initialize the value state with the corresponding value from queryParams.filter[target]
        const [value, setValue] = useState(queryParams?.filter[target] || "");

        // Sync the value state with queryParams.filter[target] when queryParams changes
        useEffect(() => {
            setValue(queryParams?.filter[target] || "");
        }, [queryParams]);

        return (
            <div className="dropdown">
                <label>{title}</label>
                <select
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
                    <option value=""> - - - </option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    };


    return (
        <>
            <div style={{ background: "red" }}>
                <FilterDropdown
                    title="Make"
                    options={Vehicle.getMakeOptions()}
                    target="make"
                    queryParams={queryParams}
                    setQueryParams={setQueryParams}
                />
                <FilterDropdown
                    title="Model"
                    options={Vehicle.getModelOptions(queryParams?.filter?.make ? [queryParams.filter.make] : [])}
                    condition={queryParams?.filter?.make}
                    target="model"
                    queryParams={queryParams}
                    setQueryParams={setQueryParams}
                />
            </div>
        </>
    )
}
export default SearchFilterArea;