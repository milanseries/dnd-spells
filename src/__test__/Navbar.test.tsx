import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import Navbar from '../components/common/nav/Navbar'
import { mockNavigators } from './mocks/data.mock'

describe('Navbar component', () => {
  it('should links render correctly', () => {
    render(
      <BrowserRouter>
        <Navbar navigators={mockNavigators} />
      </BrowserRouter>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(mockNavigators.length)

    linkElements.forEach((linkElement, index) => {
      const navigator = mockNavigators[index]
      expect(linkElement).toHaveTextContent(navigator.name)
      expect(linkElement).toHaveAttribute('href', navigator.route)
    })
  })

  it('should active link is marked as "active"', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar navigators={mockNavigators} />
      </MemoryRouter>
    )

    const activeLinkElement = screen.getByText('About')
    expect(activeLinkElement).toHaveClass('active')
  })

  it('should non-active links do not have "active" class', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar navigators={mockNavigators} />
      </MemoryRouter>
    )

    const nonActiveLinkElements = screen.getAllByRole('link')
    nonActiveLinkElements.forEach((linkElement) => {
      if (linkElement.textContent !== 'About') {
        expect(linkElement).not.toHaveClass('active')
      }
    })
  })
})
