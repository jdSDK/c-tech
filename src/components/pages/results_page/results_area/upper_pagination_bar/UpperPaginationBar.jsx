import CountChanger from "../../../../common/count_changer/CountChanger";
import * as Styled from "./UpperPaginationBar.styled";

const UpperPaginationBar = ( {
    metadata,
    resultsPerPage,
    setResultsPerPage
} ) => {
    /*
    Display the results per page and the range/total number of results for the current query params.
    Lets you modify results per page with a CountChanger input.
    */
    const getFormattedPaginationInfo = () => {
        return `Showing ${ metadata.startIndex }-${ metadata.endIndex } of ${ metadata.filteredCount } results${ metadata.filteredCount !== metadata.totalCount ? " for applied filters" : "" }`;
    };

    const handleValueUpdateCommit = ( value ) => {
        setResultsPerPage( value );
    };

    return (
        <Styled.InfoContainer>
            <Styled.InfoText>
                Showing
                <CountChanger
                    minValue={ 1 }
                    maxValue={ 100 }
                    initialValue={ resultsPerPage }
                    handleValueUpdateCommit={ handleValueUpdateCommit }
                    inputLabel="Results Per Page"
                    inputPadding="0px 4px"
                    textColor="rgb(69, 69, 69)"
                />
                results per page
            </Styled.InfoText>
            <Styled.InfoText>
                {
                    metadata.totalCount ?
                        getFormattedPaginationInfo() :
                        <></>
                }
            </Styled.InfoText>
        </Styled.InfoContainer>
    );
};

export default UpperPaginationBar;