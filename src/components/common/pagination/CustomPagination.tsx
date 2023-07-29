import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  ISpellState,
  setCurrentPage,
} from '../../../store/features/spellsSlice'
import './Pagination.css'
import { RootState } from '../../../store/store'

export const ITEMS_PER_PAGE = 20 // Define the number of items to display per page

const CustomPagination = ({ spells }: any) => {
  const dispatch = useDispatch()
  const { currentPage } = useSelector(
    (state: RootState): ISpellState => state.spells
  )

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    dispatch(setCurrentPage(page))
  }

  return (
    <Pagination
      count={Math.ceil(spells?.length / ITEMS_PER_PAGE)}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      size="large"
    />
  )
}

export default CustomPagination
