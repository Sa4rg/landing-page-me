import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Section } from './Section'

describe('Section', () => {
  describe('Rendering', () => {
    it('should render children content', () => {
      render(<Section>Section content</Section>)
      expect(screen.getByText(/section content/i)).toBeInTheDocument()
    })

    it('should render as section element by default', () => {
      render(<Section data-testid="section">Content</Section>)
      expect(screen.getByTestId('section').tagName).toBe('SECTION')
    })

    it('should apply custom className', () => {
      render(<Section className="custom-class" data-testid="section">Content</Section>)
      expect(screen.getByTestId('section')).toHaveClass('custom-class')
    })
  })

  describe('Container', () => {
    it('should render with container by default', () => {
      render(
        <Section data-testid="section">
          <div data-testid="inner">Content</div>
        </Section>
      )
      const inner = screen.getByTestId('inner')
      expect(inner.parentElement).toHaveClass('container')
    })

    it('should not render container when container is false', () => {
      render(
        <Section container={false} data-testid="section">
          Content
        </Section>
      )
      expect(screen.getByTestId('section')).not.toHaveClass('container')
    })
  })

  describe('Spacing', () => {
    it('should apply medium spacing by default', () => {
      render(
        <Section data-testid="section">
          <div data-testid="inner">Content</div>
        </Section>
      )
      const inner = screen.getByTestId('inner')
      expect(inner.parentElement).toHaveClass('py-16')
    })

    it('should apply small spacing', () => {
      render(
        <Section spacing="sm" data-testid="section">
          <div data-testid="inner">Content</div>
        </Section>
      )
      const inner = screen.getByTestId('inner')
      expect(inner.parentElement).toHaveClass('py-8')
    })

    it('should apply large spacing', () => {
      render(
        <Section spacing="lg" data-testid="section">
          <div data-testid="inner">Content</div>
        </Section>
      )
      const inner = screen.getByTestId('inner')
      expect(inner.parentElement).toHaveClass('py-24')
    })

    it('should apply no spacing', () => {
      render(
        <Section spacing="none" data-testid="section">
          <div data-testid="inner">Content</div>
        </Section>
      )
      const inner = screen.getByTestId('inner')
      expect(inner.parentElement).toHaveClass('py-0')
    })
  })

  describe('ID attribute', () => {
    it('should apply id attribute for anchor navigation', () => {
      render(<Section id="about" data-testid="section">Content</Section>)
      expect(screen.getByTestId('section')).toHaveAttribute('id', 'about')
    })
  })

  describe('Accessibility', () => {
    it('should support aria-label', () => {
      render(
        <Section aria-label="About section" data-testid="section">
          Content
        </Section>
      )
      expect(screen.getByTestId('section')).toHaveAttribute('aria-label', 'About section')
    })

    it('should render as main when as prop is main', () => {
      render(<Section as="main" data-testid="section">Content</Section>)
      expect(screen.getByTestId('section').tagName).toBe('MAIN')
    })
  })

  describe('Background', () => {
    it('should render with white background by default', () => {
      render(<Section data-testid="section">Content</Section>)
      expect(screen.getByTestId('section')).toHaveClass('bg-white')
    })

    it('should render with gray background', () => {
      render(<Section background="gray" data-testid="section">Content</Section>)
      expect(screen.getByTestId('section')).toHaveClass('bg-gray-50')
    })

    it('should render with transparent background', () => {
      render(<Section background="transparent" data-testid="section">Content</Section>)
      expect(screen.getByTestId('section')).toHaveClass('bg-transparent')
    })
  })
})
