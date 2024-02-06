import React, { useState } from "react";
import CPagination from "./CPagination";

const CommonPagination = (props) => {
  const { pagination, onPageChange } = props;
  const { page, limit, totalRows } = pagination;
  const totalPages = Math.ceil(totalRows / limit);

  const [currentPage, setCurrentPage] = useState(page);
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <CPagination
      activePage={currentPage}
      pages={totalPages}
      onActivePageChange={(activePage) => handlePageChange(activePage)}
      align="end"
      // size="lg"
    />
  );
};

export default CommonPagination;
