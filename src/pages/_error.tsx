import { Link, Alert, Box, Typography } from '@mui/material'
import React from 'react'

const ErrorPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EDF4FF',
        display: 'flex',
        alignItems: 'center',
        minHeight: '70vh',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '460px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <Alert severity="error">
          <Typography variant="h6" textAlign={'center'} gutterBottom>
            Ops Something went wrong with this page!
          </Typography>
        </Alert>
        <Typography
          variant="subtitle1"
          textAlign={'center'}
          sx={{ marginBottom: '8px', marginTop: '8px' }}
        >
          Please reload the page or try again later!
        </Typography>
        <Link href="/">Return to Homepage</Link>
      </Box>
    </Box>
  )
}

export default ErrorPage
