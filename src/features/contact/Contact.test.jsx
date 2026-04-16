import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  describe('Rendering', () => {
    it('should render section title', () => {
      render(<Contact />)
      expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
    })

    it('should render contact description', () => {
      render(<Contact />)
      expect(screen.getByText(/looking for opportunities/i)).toBeInTheDocument()
    })
  })

  describe('Contact Links', () => {
    it('should render email link', () => {
      render(<Contact />)
      const emailLink = screen.getByRole('link', { name: /send email/i })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
    })

    it('should render GitHub link', () => {
      render(<Contact />)
      const githubLink = screen.getByRole('link', { name: /github profile/i })
      expect(githubLink).toBeInTheDocument()
      expect(githubLink).toHaveAttribute('href', 'https://github.com/Sa4rg')
      expect(githubLink).toHaveAttribute('target', '_blank')
    })

    it('should render LinkedIn link', () => {
      render(<Contact />)
      const linkedinLink = screen.getByRole('link', { name: /linkedin profile/i })
      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
      expect(linkedinLink).toHaveAttribute('target', '_blank')
    })
  })

  describe('Footer', () => {
    it('should render footer text', () => {
      render(<Contact />)
      expect(screen.getByText(/built with/i)).toBeInTheDocument()
    })

    it('should mention Clean Architecture', () => {
      render(<Contact />)
      expect(screen.getByText(/clean architecture/i)).toBeInTheDocument()
    })

    it('should mention TDD', () => {
      render(<Contact />)
      expect(screen.getByText(/tdd/i)).toBeInTheDocument()
    })

    it('should display author name', () => {
      render(<Contact />)
      expect(screen.getAllByText(/sara arguello/i).length).toBeGreaterThan(0)
    })

    it('should display current year', () => {
      render(<Contact />)
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(<Contact />)
      expect(container.querySelector('section')).toBeInTheDocument()
      expect(container.querySelector('footer')).toBeInTheDocument()
    })

    it('should have accessible link labels', () => {
      render(<Contact />)
      expect(screen.getByRole('link', { name: /send email/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /github profile/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /linkedin profile/i })).toBeInTheDocument()
    })
  })
})
