import { Pagination } from '@mui/material'
import './Pagination.css'

/**
 * Represents the props used by the SimplePaginator component for pagination.
 * @interface SimplePaginatorProps
 * @property {number} totalCount - The total number of items to be paginated.
 * @property {number} currentPage - The current active page.
 * @property {(page: number) => void} onPageChange - A callback function for handling page changes.
 */
interface SimplePaginatorProps {
  totalCount: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const ITEMS_PER_PAGE = 20 // Define the number of items to display per page
const SimplePaginator: React.FC<SimplePaginatorProps> = ({
  totalCount,
  currentPage,
  onPageChange,
}) => {
  function handlePageChange(
    event: React.ChangeEvent<unknown>,
    page: number
  ): void {
    onPageChange(page)
  }

  return (
    <Pagination
      count={Math.ceil(totalCount / ITEMS_PER_PAGE)}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      size="large"
    />
  )
}

export default SimplePaginator
