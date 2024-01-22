import { useState } from 'react';
import { Pagination } from '@mui/material';

interface UsePaginationResult {
  currentPage: number;
  currentItems: any[]; // แทนที่ any ด้วยชนิดของข้อมูลที่คุณใช้
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const usePagination = (data: any[], itemsPerPage: number): UsePaginationResult => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    currentItems,
    handlePageChange,
  };
};

export default usePagination;