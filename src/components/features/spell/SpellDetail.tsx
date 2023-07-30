/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

import './SpellDetail.css'

const SpellDetail = ({ spell }: any) => {
  const {
    name,
    desc,
    range,
    components,
    material,
    duration,
    level,
    damage,
    school,
    higher_level,
    casting_time,
  } = spell

  return (
    <Card variant="outlined" className="spell-card">
      <CardContent>
        <Typography variant="h5" component="div" className="spell-title">
          {name}
        </Typography>
        <Typography color="text.secondary" gutterBottom className="spell-level">
          Level {level} {school.name} spell
        </Typography>
        <Typography variant="body2" className="spell-desc">
          {desc[0]}
        </Typography>

        <List dense className="spell-list">
          <ListItem>
            <ListItemText primary="Range" secondary={range} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Components"
              secondary={components.join(', ')}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Material" secondary={material} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Duration" secondary={duration} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Casting Time" secondary={casting_time} />
          </ListItem>
        </List>

        {higher_level && (
          <>
            <Typography variant="h6" component="div" className="spell-title">
              At Higher Levels
            </Typography>
            <Typography variant="body2" className="spell-higher-level">
              {higher_level[0]}
            </Typography>
          </>
        )}

        {damage && (
          <>
            <Typography variant="h6" component="div" className="spell-title">
              Damage
            </Typography>
            {Object.keys(
              damage.damage_at_slot_level || damage.damage_at_character_level
            ).map((level) => (
              <Typography key={level} variant="body2" className="spell-damage">
                {`Level ${level}: ${
                  damage.damage_at_slot_level?.[level] ??
                  damage.damage_at_character_level?.[level]
                } ${damage.damage_type.name} damage`}
              </Typography>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default SpellDetail
