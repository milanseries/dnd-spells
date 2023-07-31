// Sample data for testing
export const mockSpellListItem = {
  index: 'test-spell',
  name: 'Test Spell',
  url: '/api/test-spell',
}

export const mockSpellsList = {
  results: [
    { index: '1', name: 'Spell 1', url: '/api/1' },
    { index: '2', name: 'Spell 2', url: '/api/2' },
    { index: '3', name: 'Spell 3', url: '/api/3' },
    { index: '4', name: 'Spell 4', url: '/api/4' },
  ],
  count: 3,
}

export const mockSpell = {
  index: 'acid-arrow',
  name: 'Acid Arrow',
  desc: [
    'A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.',
  ],
  higher_level: [
    'When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.',
  ],
  range: '90 feet',
  components: ['V', 'S', 'M'],
  material: "Powdered rhubarb leaf and an adder's stomach.",
  ritual: false,
  duration: 'Instantaneous',
  concentration: false,
  casting_time: '1 action',
  level: 2,
  attack_type: 'ranged',
  damage: {
    damage_type: {
      index: 'acid',
      name: 'Acid',
      url: '/api/damage-types/acid',
    },
    damage_at_slot_level: {
      '2': '4d4',
      '3': '5d4',
      '4': '6d4',
      '5': '7d4',
      '6': '8d4',
      '7': '9d4',
      '8': '10d4',
      '9': '11d4',
    },
  },
  school: {
    index: 'evocation',
    name: 'Evocation',
    url: '/api/magic-schools/evocation',
  },
  classes: [
    {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/classes/wizard',
    },
  ],
  subclasses: [
    {
      index: 'lore',
      name: 'Lore',
      url: '/api/subclasses/lore',
    },
    {
      index: 'land',
      name: 'Land',
      url: '/api/subclasses/land',
    },
  ],
  url: '/api/spells/acid-arrow',
}

// Sample navigators for testing
export const mockNavigators = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  { name: 'Contact', route: '/contact' },
]
