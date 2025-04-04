import { InfoContainer, InfoText, Count } from "./SearchResultsPaginationUpperSection.styled";
import styled from "styled-components";

const PerPageInput = styled.input`
    width: 50px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 13px;
    text-align: center;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const SearchResultsPaginationUpperSection = ({ metadata, resultsPerPage, setResultsPerPage }) => {
    const CountChanger = () => {
        return (
            <PerPageInput
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
        <InfoContainer>
            <InfoText>
                Showing <CountChanger /> results per page
            </InfoText>
            <InfoText>
                Found <Count>{metadata.filteredCount}</Count> results
            </InfoText>
        </InfoContainer>
    );
};

export default SearchResultsPaginationUpperSection;