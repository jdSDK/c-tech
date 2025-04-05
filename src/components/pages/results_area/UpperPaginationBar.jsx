import * as Styled from "./UpperPaginationBar.styled";

const UpperPaginationBar = ({ metadata, resultsPerPage, setResultsPerPage }) => {
    const CountChanger = () => {
        return (
            <Styled.PerPageInput
                name="update-results-per-page"
                defaultValue={resultsPerPage}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        setResultsPerPage(parseInt(e.target.value));
                    }
                }}
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
                                metadata.filteredCount != metadata.totalCount && " for applied filters"
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