import React from 'react'
import { render } from '@testing-library/react'
import SpellDetail from '../components/features/spell/SpellDetail'
import { mockSpell } from './mocks/data.mock'

describe('SpellDetail component', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<SpellDetail spell={mockSpell} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
