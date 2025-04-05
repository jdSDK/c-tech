import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Styled from './LowerPaginationBar.styled';
import { useState, useEffect } from 'react';
import CountChanger from '../../../../common/count_changer/CountChanger';

const LowerPaginationBar = ( {
    queryParams,
    handlePageChange,
    metadata,
    currentPage,
} ) => {
    const {
    } = queryParams.pagination;
    const {
        pageCount,
        lastPage,
        hasNextPage,
        hasPreviousPage,
    } = metadata;

    return (
        <Styled.PaginationContainer>
            <Styled.PaginationControls>
                <Styled.PaginationButton
                    onClick={ () => handlePageChange( 1 ) }
                    disabled={ !hasPreviousPage }
                    $isActive={ false }
                >
                    <ChevronFirst size={ 16 } />
                </Styled.PaginationButton>
                <Styled.PaginationButton
                    onClick={ () => handlePageChange( currentPage - 1 ) }
                    disabled={ !hasPreviousPage }
                    $isActive={ false }
                >
                    <ChevronLeft size={ 16 } />
                </Styled.PaginationButton>

                <Styled.PaginationInfo>
                    <CountChanger
                        initialValue={ currentPage }
                        handleValueUpdateCommit={ handlePageChange }
                        minValue={ 1 }
                        maxValue={ pageCount }
                        inputLabel="Update Page"
                        textColor={ 'rgb(0, 109, 225)' }
                    />
                    of { pageCount }
                </Styled.PaginationInfo>

                <Styled.PaginationButton
                    onClick={ () => handlePageChange( currentPage + 1 ) }
                    disabled={ !hasNextPage }
                    $isActive={ false }
                >
                    <ChevronRight size={ 16 } />
                </Styled.PaginationButton>
                <Styled.PaginationButton
                    onClick={ () => handlePageChange( lastPage ) }
                    disabled={ !hasNextPage }
                    $isActive={ false }
                >
                    <ChevronLast size={ 16 } />
                </Styled.PaginationButton>



            </Styled.PaginationControls>
        </Styled.PaginationContainer>
    );
};

export default LowerPaginationBar;