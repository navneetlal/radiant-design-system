import { useEffect, useState } from "react";

export interface IPaginationProps {
  initalPage?: number;
  initalPageSize?: number;
  onChange?: any;
}

function usePagination({
  initalPage = 1,
  initalPageSize = 10,
  onChange,
}: IPaginationProps) {
  const [pagination, setPagination] = useState({
    page: initalPage,
    pageSize: initalPageSize,
  });

  useEffect(() => {
    onChange && onChange(pagination.page, pagination.pageSize);
  }, [pagination.page, pagination.pageSize, onChange]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    setPagination({ ...pagination, page });
  const handlePageSizeChange = (pageSize: number) =>
    setPagination({ ...pagination, page: 1, pageSize });

  return {
    page: pagination.page,
    pageSize: pagination.pageSize,
    handlePageChange,
    handlePageSizeChange,
  };
}

export default usePagination;
