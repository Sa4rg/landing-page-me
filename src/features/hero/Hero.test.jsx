import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  describe('Rendering', () => {
    it('should render name', () => {
      render(<Hero />)
      expect(screen.getByText(/sara arguello/i)).toBeInTheDocument()
    })

    it('should render title', () => {
      render(<Hero />)
      expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument()
    })

    it('should render tagline', () => {
      render(<Hero />)
      expect(screen.getByText(/building scalable solutions with clean architecture/i)).toBeInTheDocument()
    })
  })

  describe('CTAs', () => {
    it('should render View Projects button', () => {
      render(<Hero />)
      expect(screen.getByRole('button', { name: /view projects/i })).toBeInTheDocument()
    })

    it('should render Download CV button', () => {
      render(<Hero />)
      expect(screen.getByRole('button', { name: /download cv/i })).toBeInTheDocument()
    })

    it('should call onViewProjects when View Projects is clicked', async () => {
      const user = userEvent.setup()
      const handleViewProjects = vi.fn()
      
      render(<Hero onViewProjects={handleViewProjects} />)
      
      await user.click(screen.getByRole('button', { name: /view projects/i }))
      
      expect(handleViewProjects).toHaveBeenCalledOnce()
    })
  })

  describe('Social Links', () => {
    it('should render GitHub link', () => {
      render(<Hero />)
      const githubLink = screen.getByRole('link', { name: /github/i })
      expect(githubLink).toBeInTheDocument()
      expect(githubLink).toHaveAttribute('href', 'https://github.com/Sa4rg')
    })

    it('should render LinkedIn link', () => {
      render(<Hero />)
      const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    })

    it('should render Email link', () => {
      render(<Hero />)
      const emailLink = screen.getByRole('link', { name: /email/i })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'))
    })

    it('should open social links in new tab', () => {
      render(<Hero />)
      const githubLink = screen.getByRole('link', { name: /github/i })
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<Hero />)
      const heading = screen.getByRole('heading', { name: /sara arguello/i })
      expect(heading.tagName).toBe('H1')
    })

    it('should have semantic structure', () => {
      const { container } = render(<Hero />)
      expect(container.querySelector('section')).toBeInTheDocument()
    })
  })
})
