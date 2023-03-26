import React from 'react';
import IconNext from './IconNext';
import IconPrevious from './IconPrevious';
import {
  ButtonNext,
  ButtonPrevious,
  PageNumber,
  PaginationContainer,
} from './style';

interface PaginationPropsType {
  currentPage: number;
  onClickPage: (e: React.MouseEvent) => void;
  onPrevious: () => void;
  onNext: () => void;
  totalPages: number;
}

const Pagination = ({
  currentPage,
  onPrevious,
  onNext,
  onClickPage,
  totalPages,
}: PaginationPropsType) => {
  return (
    <nav aria-label="Page navigation example" className="mt-4 text-center">
      <PaginationContainer>
        <ButtonPrevious
          aria-label="button-previous"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          <IconPrevious />
        </ButtonPrevious>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <PageNumber
            key={pageNum}
            id={pageNum.toString()}
            onClick={onClickPage}
            className={`${
              currentPage === pageNum
                ? 'bg-indigo-600 text-white hover:text-white hover:bg-indigo-600'
                : 'bg-white hover:bg-gray-100 hover:text-gray-700 text-gray-500 '
            }`}
            disabled={currentPage === pageNum}
          >
            {pageNum}
          </PageNumber>
        ))}

        <ButtonNext
          aria-label="button-next"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          <IconNext />
        </ButtonNext>
      </PaginationContainer>
    </nav>
  );
};

export default Pagination;
