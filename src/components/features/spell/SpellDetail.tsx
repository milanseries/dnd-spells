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
import { ISpell } from '../../../services/models/types/spell.types'

interface SpellDetailProps {
  spell: ISpell
}
const SpellDetail: React.FC<SpellDetailProps> = ({ spell }) => {
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
    <Card variant="outlined" className="spell-detail-card">
      <CardContent>
        <Typography variant="h5" component="div" className="spell-detail-title">
          {name}
        </Typography>
        <Typography
          color="text.secondary"
          gutterBottom
          className="spell-detail-level"
        >
          Level {level} {school.name} spell
        </Typography>
        <Typography variant="body2" className="spell-detail-desc">
          {desc[0]}
        </Typography>

        <List dense className="spell-detail-list">
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
            <Typography
              variant="h6"
              component="div"
              className="spell-detail-title"
            >
              At Higher Levels
            </Typography>
            <Typography variant="body2" className="spell-detail-higher-level">
              {higher_level[0]}
            </Typography>
          </>
        )}

        {damage && (
          <>
            <Typography
              variant="h6"
              component="div"
              className="spell-detail-title"
            >
              Damage
            </Typography>
            {Object.keys(
              damage?.damage_at_slot_level ||
                damage?.damage_at_character_level ||
                {}
            ).map((slotLevel) => {
              const damageValue =
                damage.damage_at_slot_level?.[
                  slotLevel as unknown as keyof typeof damage.damage_at_slot_level
                ] ??
                damage.damage_at_character_level?.[
                  slotLevel as unknown as keyof typeof damage.damage_at_character_level
                ]
              return (
                <Typography
                  key={slotLevel}
                  variant="body2"
                  className="spell-detail-damage"
                >
                  {`Level ${slotLevel}: ${damageValue ?? ''} ${
                    damage.damage_type.name
                  } damage`}
                </Typography>
              )
            })}
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default SpellDetail
