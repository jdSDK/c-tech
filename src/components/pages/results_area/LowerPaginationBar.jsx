import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Styled from './LowerPaginationBar.styled';
import { useState } from 'react';

const LowerPaginationBar = ({
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

    const CountChanger = () => {
        return (
            <Styled.PageInput
                name="update-page"
                defaultValue={currentPage}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        handlePageChange(parseInt(e.target.value, 10));
                    }
                }}
            />
        )
    }

    return (
        <Styled.PaginationContainer>
            <Styled.PaginationControls>
                <Styled.PaginationButton
                    onClick={() => handlePageChange(1)}
                    disabled={!hasPreviousPage}
                    $isActive={false}
                >
                    <ChevronFirst size={16} />
                </Styled.PaginationButton>
                <Styled.PaginationButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!hasPreviousPage}
                    $isActive={false}
                >
                    <ChevronLeft size={16} />
                </Styled.PaginationButton>

                <Styled.PaginationInfo>
                    <CountChanger /> of {pageCount}
                </Styled.PaginationInfo>

                <Styled.PaginationButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    $isActive={false}
                >
                    <ChevronRight size={16} />
                </Styled.PaginationButton>
                <Styled.PaginationButton
                    onClick={() => handlePageChange(lastPage)}
                    disabled={!hasNextPage}
                    $isActive={false}
                >
                    <ChevronLast size={16} />
                </Styled.PaginationButton>



            </Styled.PaginationControls>
        </Styled.PaginationContainer>
    );
};

export default LowerPaginationBar;

