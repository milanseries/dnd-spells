# Project Name

Spells listing of Dungeons and Dragons

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Tools and Libraries Used](#tools-and-libraries-used)
  - [Setup](#setup)
  - [Demo](#demo)
  - [API Documentation](#api-documentation)
  - [Result Response](#result-response)
  - [License](#license)

## Project Description

A website that lists all the spells for the Dungeons & Dragons (D&D) API, allowing users to mark spells as favorites and view them in the favorites page.

## Tools and Libraries Used

List of tools and libraries used in the project:

- Typescript
- MaterialUI
- React-Query
- React-Router
- Axios
- ESLint (with Airbnb standard) & Prettier
- React Testing Library

## Setup

Instructions on how to set up the project locally. Include steps like:

1. Clone the repository: `git clone https://github.com/milanseries/dnd-spells.git`
2. Navigate to the project directory: `cd dnd-spells`
3. Install dependencies: `yarn install`
4. Configure environment variables:

   - Create a .env file in the root of the project.
   - Add the following line to the .env file:

   ```bash
     REACT_APP_BASE_API_ENDPOINT=https://www.dnd5eapi.co/api/
   ```

   - Save the .env file.

5. Start the project: `yarn run dev`
6. To run test: `yarn run test`
7. To build production read code: `yarn run build`

## Demo

Link to a live demo of the project <https://dnd-spells-fav.netlify.app/>

## API Documentation

- Base URL: `https://www.dnd5eapi.co/api`
- Endpoints:
  - `https://www.dnd5eapi.co/api/spells`
  - `https://www.dnd5eapi.co/api/spells/<index>`

## Result Response


- `https://www.dnd5eapi.co/api/spells`

```json
{
  "count": 319,
  "results": [
    {
      "index": "acid-arrow",
      "name": "Acid Arrow",
      "url": "/api/spells/acid-arrow"
    },
    {
      "index": "acid-splash",
      "name": "Acid Splash",
      "url": "/api/spells/acid-splash"
    }
  ]
}
```

- `https://www.dnd5eapi.co/api/spells/acid-arrow`

```json
{
  "index": "acid-arrow",
  "name": "Acid Arrow",
  "desc": [
    "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
  ],
  "higher_level": [
    "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
  ],
  "range": "90 feet",
  "components": ["V", "S", "M"],
  "material": "Powdered rhubarb leaf and an adder's stomach.",
  "ritual": false,
  "duration": "Instantaneous",
  "concentration": false,
  "casting_time": "1 action",
  "level": 2,
  "attack_type": "ranged",
  "damage": {
    "damage_type": {
      "index": "acid",
      "name": "Acid",
      "url": "/api/damage-types/acid"
    },
    "damage_at_slot_level": {
      "2": "4d4",
      "3": "5d4",
      "4": "6d4",
      "5": "7d4",
      "6": "8d4",
      "7": "9d4",
      "8": "10d4",
      "9": "11d4"
    }
  },
  "school": {
    "index": "evocation",
    "name": "Evocation",
    "url": "/api/magic-schools/evocation"
  },
  "classes": [
    {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/classes/wizard"
    }
  ],
  "subclasses": [
    {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
    },
    {
      "index": "land",
      "name": "Land",
      "url": "/api/subclasses/land"
    }
  ],
  "url": "/api/spells/acid-arrow"
}
```

## License

MIT, Apache 2.0)
