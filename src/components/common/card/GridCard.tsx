import { Grid, Card } from '@mui/material'
import './GridCard.css'

interface GridCardProps {
  children: React.ReactElement
}

const GridCard: React.FC<GridCardProps> = ({ children }) => {
  return (
    <Grid item xs={4} md={3} lg={2}>
      <Card className={'grid-card'}>{children}</Card>
    </Grid>
  )
}

export default GridCard
