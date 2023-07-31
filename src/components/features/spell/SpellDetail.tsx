import { Card, Grid, Divider, CardContent, Typography } from '@mui/material'

import './SpellDetail.css'
import { ISpell } from '../../../services/models/types/spell.types'

interface SpellDetailProps {
  spell: ISpell
}
const SpellDetail: React.FC<SpellDetailProps> = ({ spell }) => {
  return (
    <Card variant="outlined" className="spell-detail-card">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">{spell.name}</Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{spell.desc}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Damage</Typography>
            {spell.damage?.damage_at_slot_level ? (
              <>
                {Object.entries(spell.damage.damage_at_slot_level).map(
                  ([level, damage]) => (
                    <Typography variant="body1" key={level}>
                      {`Level ${level} Damage: ${damage}`}
                    </Typography>
                  )
                )}
              </>
            ) : (
              <Typography variant="body1">N/A</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Higher Levels</Typography>
            {spell.higher_level ? (
              <Typography variant="body1">{spell.higher_level}</Typography>
            ) : (
              <Typography variant="body1">N/A</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Range: {spell.range}</Typography>
            <Typography variant="body1">
              Components: {spell.components.join(', ')}
            </Typography>
            <Typography variant="body1">Material: {spell.material}</Typography>
            <Typography variant="body1">Duration: {spell.duration}</Typography>
            <Typography variant="body1">
              Casting Time: {spell.casting_time}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SpellDetail
