import React from "react";
import { Button } from "react-bootstrap";

interface PaginationProps {
  page: number;
  totalPages?: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  hasNextPage,
  hasPreviousPage,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="prev">
        <Button
          disabled={!hasPreviousPage}
          onClick={onPreviousPage}
          variant="primary"
        >
          Previous Page
        </Button>
      </div>

      <div className="page">
        Page {page}
        {totalPages && "/" + totalPages}
      </div>

      <div className="next">
        <Button disabled={!hasNextPage} onClick={onNextPage} variant="primary">
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
