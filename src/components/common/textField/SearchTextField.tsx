import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import './SearchTextField.css'

/**
 * Represents the props used by the SearchTextField component for handling search functionality.
 * @interface SearchTextFieldProps
 * @property {string} searchQuery - The current search query string.
 * @property {(query: string) => void} onSearchChange - A callback function for handling search query changes.
 */
interface SearchTextFieldProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

const SearchTextField: React.FC<SearchTextFieldProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  function handleSearchChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const query = event.target.value
    onSearchChange(query)
  }

  function handleClearSearch(): void {
    onSearchChange('')
  }

  return (
    <TextField
      className="search-text-field" // Add the custom class name here
      fullWidth
      variant="outlined"
      placeholder="Search spell...."
      value={searchQuery}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {searchQuery && (
              <ClearIcon
                onClick={handleClearSearch}
                sx={{ cursor: 'pointer' }}
              />
            )}
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchTextField
