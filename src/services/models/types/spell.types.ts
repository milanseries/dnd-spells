export interface ISpellListItem {
  index: string
  name: string
  url: string
}

export interface ISpellList {
  count: number
  results: ISpellListItem[]
}

interface DamageType {
  index: string
  name: string
  url: string
}

interface DamageAtLevel {
  [level: number]: string
}

interface Damage {
  damage_type: DamageType
  damage_at_slot_level: DamageAtLevel
  damage_at_character_level: DamageAtLevel
}

export interface School {
  index: string
  name: string
  url: string
}

export interface Class {
  index: string
  name: string
  url: string
}

interface Subclass {
  index: string
  name: string
  url: string
}

export interface ISpell {
  index: string
  higher_level?: string[]
  name: string
  desc: string[]
  range: string
  components: string[]
  material: string
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  damage: Damage
  school: School
  classes: Class[]
  subclasses: Subclass[]
  url: string
}
