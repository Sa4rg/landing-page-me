import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  describe('Rendering', () => {
    it('should render children content', () => {
      render(<Card>Card content</Card>)
      expect(screen.getByText(/card content/i)).toBeInTheDocument()
    })

    it('should render as article element by default', () => {
      render(<Card data-testid="card">Content</Card>)
      expect(screen.getByTestId('card').tagName).toBe('ARTICLE')
    })

    it('should apply custom className', () => {
      render(<Card className="custom-class" data-testid="card">Content</Card>)
      expect(screen.getByTestId('card')).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('should render default variant with white background', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('dark:bg-gray-800')
    })

    it('should render bordered variant', () => {
      render(<Card variant="bordered" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('border-2')
    })

    it('should render elevated variant with shadow', () => {
      render(<Card variant="elevated" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('shadow-lg')
    })

    it('should render outlined variant', () => {
      render(<Card variant="outlined" data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('border')
      expect(card).toHaveClass('bg-transparent')
    })
  })

  describe('Padding', () => {
    it('should apply medium padding by default', () => {
      render(<Card data-testid="card">Content</Card>)
      expect(screen.getByTestId('card')).toHaveClass('p-6')
    })

    it('should apply small padding', () => {
      render(<Card padding="sm" data-testid="card">Content</Card>)
      expect(screen.getByTestId('card')).toHaveClass('p-4')
    })

    it('should apply large padding', () => {
      render(<Card padding="lg" data-testid="card">Content</Card>)
      expect(screen.getByTestId('card')).toHaveClass('p-8')
    })

    it('should apply no padding', () => {
      render(<Card padding="none" data-testid="card">Content</Card>)
      expect(screen.getByTestId('card')).toHaveClass('p-0')
    })
  })

  describe('Hover Effect', () => {
    it('should apply hover effect when hoverable is true', () => {
      render(<Card hoverable data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('hover:shadow-xl')
      expect(card).toHaveClass('transition-shadow')
    })

    it('should not apply hover effect by default', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).not.toHaveClass('hover:shadow-xl')
    })
  })

  describe('Accessibility', () => {
    it('should render as div when as prop is div', () => {
      render(<Card as="div" data-testid="card">Content</Card>)
      expect(screen.getByTestId('card').tagName).toBe('DIV')
    })

    it('should render as section when as prop is section', () => {
      render(<Card as="section" data-testid="card">Content</Card>)
      expect(screen.getByTestId('card').tagName).toBe('SECTION')
    })

    it('should support aria attributes', () => {
      render(
        <Card aria-label="Project card" data-testid="card">
          Content
        </Card>
      )
      expect(screen.getByTestId('card')).toHaveAttribute('aria-label', 'Project card')
    })
  })

  describe('Rounded corners', () => {
    it('should have rounded corners by default', () => {
      render(<Card data-testid="card">Content</Card>)
      expect(screen.getByTestId('card')).toHaveClass('rounded-lg')
    })
  })
})
