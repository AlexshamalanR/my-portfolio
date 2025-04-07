import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../About'

// Mock framer-motion since we don't need to test animations
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('About Component', () => {
  beforeEach(() => {
    render(<About />)
  })

  test('renders the About Me heading', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  test('renders profile image', () => {
    const profileImage = screen.getByAlt('Profile')
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('src', expect.stringContaining('profile.jpeg'))
  })

  test('renders experience stats', () => {
    expect(screen.getByText('2+')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('5+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
  })

  test('renders about text content', () => {
    const expectedTexts = [
      "I'm a passionate Backend Developer",
      "I specialize in API development",
      "When I'm not coding"
    ]

    expectedTexts.forEach(text => {
      expect(screen.getByText(expect.stringContaining(text))).toBeInTheDocument()
    })
  })

  test('has correct styling classes', () => {
    // Test for main container
    const mainSection = screen.getByRole('region', { name: /about/i })
    expect(mainSection).toHaveClass('py-20')

    // Test for profile image container
    const imageContainer = screen.getByAlt('Profile').parentElement
    expect(imageContainer).toHaveClass('relative', 'w-72', 'h-72')

    // Test for content card
    const contentCard = screen.getByText(/passionate Backend Developer/i).closest('div')
    expect(contentCard).toHaveClass('group', 'bg-secondary/30', 'rounded-xl')
  })
}) 