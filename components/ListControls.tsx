import React from 'react';

interface ListControlsProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  sortOrder: string;
  onItemsPerPageChange: (value: number) => void;
  onSortOrderChange: (value: string) => void;
}

const ListControls = ({
  currentPage,
  totalItems,
  itemsPerPage,
  sortOrder,
  onItemsPerPageChange,
  onSortOrderChange,
}: ListControlsProps) => {
  // Calculate the range of items being displayed
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 text-sm">
      <div className="mb-4 md:mb-0">
        Showing {startItem} - {endItem} of {totalItems}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2">Show per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="border rounded p-1 px-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="sortOrder" className="mr-2">Sort by:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value)}
            className="border rounded p-1 px-2"
          >
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ListControls;