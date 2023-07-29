import { Box, CircularProgress } from '@mui/material'
import './LoadingSpinner.css'

const LoadingSpinner: React.FC = () => {
  return (
    <Box className="loading-spinner-container">
      <Box className="loading-spinner-box">
        <CircularProgress />
      </Box>
    </Box>
  )
}

export default LoadingSpinner
