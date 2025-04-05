import * as Styled from "./UpperPaginationBar.styled";
import { useState, useRef } from "react";

const UpperPaginationBar = ({
    metadata,
    resultsPerPage,
    setResultsPerPage
}) => {
    /*
    Display the results per page and the range/total number of results for the current query params.
    Uses Ref to store the input value for the CountChanger to prevent losing focus on the input
    field when state is updated.
    The CountChanger works with both blur and enter key press to update the results per page.
    The input field is validated to ensure that the value is a positive integer.
    */
    const valueRef = useRef(resultsPerPage);
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) && value > 0) {
            valueRef.current = value;
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleValueUpdate = () => {
        if (isValid && valueRef.current > 0) {
            setResultsPerPage(parseInt(valueRef.current, 10));
        } else {
            valueRef.current = resultsPerPage;
            setIsValid(true);
        }
    };

    const CountChanger = () => {
        return (
            <Styled.PerPageInput
                name="update-results-per-page"
                defaultValue={resultsPerPage}
                isValid={isValid}
                onChange={handleInputChange}
                onKeyUp={(e) => { if (e.key === "Enter") handleValueUpdate() }}
                onBlur={handleValueUpdate}
            />
        )
    }
    return (
        <Styled.InfoContainer>
            <Styled.InfoText>
                Showing <CountChanger /> results per page
            </Styled.InfoText>
            <Styled.InfoText>
                {
                    metadata.totalCount ?
                        <>
                            Showing
                            <Styled.Count>
                                {
                                    metadata.startIndex
                                }
                            </Styled.Count>
                            -
                            <Styled.Count>
                                {
                                    metadata.endIndex
                                }
                            </Styled.Count>
                            of
                            <Styled.Count>
                                {
                                    metadata.filteredCount
                                }
                            </Styled.Count>
                            results
                            {
                                metadata.filteredCount != metadata.totalCount
                                && " for applied filters"
                            }
                        </>
                        :
                        <></>
                }
            </Styled.InfoText>
        </Styled.InfoContainer>
    );
};

export default UpperPaginationBar;