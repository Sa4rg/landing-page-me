import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  describe('Rendering', () => {
    it('should render children text', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('should render as a button element by default', () => {
      render(<Button>Submit</Button>)
      const button = screen.getByRole('button')
      expect(button.tagName).toBe('BUTTON')
    })

    it('should apply custom className', () => {
      render(<Button className="custom-class">Button</Button>)
      expect(screen.getByRole('button')).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('should render primary variant by default', () => {
      render(<Button>Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary-600')
    })

    it('should render secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-gray-600')
    })

    it('should render outline variant', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-2')
      expect(button).toHaveClass('bg-transparent')
    })
  })

  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      
      render(<Button onClick={handleClick}>Click me</Button>)
      
      await user.click(screen.getByRole('button'))
      
      expect(handleClick).toHaveBeenCalledOnce()
    })

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      
      render(<Button onClick={handleClick} disabled>Click me</Button>)
      
      await user.click(screen.getByRole('button'))
      
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Disabled state', () => {
    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should apply disabled styles', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('opacity-50')
      expect(button).toHaveClass('cursor-not-allowed')
    })
  })

  describe('Sizes', () => {
    it('should render medium size by default', () => {
      render(<Button>Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-6')
      expect(button).toHaveClass('py-3')
    })

    it('should render small size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-4')
      expect(button).toHaveClass('py-2')
    })

    it('should render large size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('px-8')
      expect(button).toHaveClass('py-4')
    })
  })

  describe('Accessibility', () => {
    it('should have type="button" by default', () => {
      render(<Button>Button</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('should allow custom type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('should support aria-label', () => {
      render(<Button aria-label="Close dialog">X</Button>)
      expect(screen.getByRole('button', { name: /close dialog/i })).toBeInTheDocument()
    })
  })
})
