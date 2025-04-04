import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationContainer, PaginationControls, PaginationButton, PaginationInfo } from './SearchResultsPaginationLowerSection.styled';

const SearchResultsPaginationLowerSection = ({
    queryParams,
    setQueryParams,
    setResultsPerPage,
    metadata
}) => {
    const {
        page,
        perPage
    } = queryParams.pagination;
    const {
        currentPage,
        pageCount,
        lastPage,
        hasNextPage,
        hasPreviousPage,
        filteredCount,
        startIndex,
        endIndex
    } = metadata;

    const handlePageChange = (newPage) => {
        setQueryParams(prev => ({
            ...prev,
            pagination: {
                ...prev.pagination,
                page: newPage
            }
        }));
    };

    return (
        <PaginationContainer>
            <PaginationControls>
                <PaginationButton
                    onClick={() => handlePageChange(1)}
                    disabled={!hasPreviousPage}
                    $isActive={false}
                >
                    <ChevronFirst size={16} />
                </PaginationButton>
                <PaginationButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!hasPreviousPage}
                    $isActive={false}
                >
                    <ChevronLeft size={16} />
                </PaginationButton>

                <PaginationInfo>
                    {currentPage} of {pageCount}
                </PaginationInfo>

                <PaginationButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    $isActive={false}
                >
                    <ChevronRight size={16} />
                </PaginationButton>
                <PaginationButton
                    onClick={() => handlePageChange(lastPage)}
                    disabled={!hasNextPage}
                    $isActive={false}
                >
                    <ChevronLast size={16} />
                </PaginationButton>



            </PaginationControls>
        </PaginationContainer>
    );
};

export default SearchResultsPaginationLowerSection;

