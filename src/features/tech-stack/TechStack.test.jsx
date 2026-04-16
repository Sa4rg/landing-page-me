import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TechStack } from './TechStack'

describe('TechStack', () => {
  describe('Rendering', () => {
    it('should render section title', () => {
      render(<TechStack />)
      expect(screen.getByRole('heading', { name: /tech stack/i })).toBeInTheDocument()
    })

    it('should render section description', () => {
      render(<TechStack />)
      expect(screen.getByText(/technologies and tools/i)).toBeInTheDocument()
    })
  })

  describe('Categories', () => {
    it('should render Frontend category', () => {
      render(<TechStack />)
      expect(screen.getByRole('heading', { name: /frontend/i })).toBeInTheDocument()
    })

    it('should render Backend category', () => {
      render(<TechStack />)
      expect(screen.getByRole('heading', { name: /backend/i })).toBeInTheDocument()
    })

    it('should render DevOps category', () => {
      render(<TechStack />)
      expect(screen.getByRole('heading', { name: /devops/i })).toBeInTheDocument()
    })

    it('should render Tools category', () => {
      render(<TechStack />)
      expect(screen.getByRole('heading', { name: /^tools$/i })).toBeInTheDocument()
    })
  })

  describe('Frontend Technologies', () => {
    it('should display React', () => {
      render(<TechStack />)
      expect(screen.getByText(/^react$/i)).toBeInTheDocument()
    })

    it('should display Vite', () => {
      render(<TechStack />)
      expect(screen.getByText(/^vite$/i)).toBeInTheDocument()
    })

    it('should display Tailwind CSS', () => {
      render(<TechStack />)
      expect(screen.getByText(/tailwind css/i)).toBeInTheDocument()
    })

    it('should display Testing Library', () => {
      render(<TechStack />)
      expect(screen.getByText(/testing library/i)).toBeInTheDocument()
    })
  })

  describe('Backend Technologies', () => {
    it('should display Node.js', () => {
      render(<TechStack />)
      expect(screen.getByText(/node\.js/i)).toBeInTheDocument()
    })

    it('should display Express', () => {
      render(<TechStack />)
      expect(screen.getByText(/express/i)).toBeInTheDocument()
    })

    it('should display MySQL', () => {
      render(<TechStack />)
      expect(screen.getByText(/mysql/i)).toBeInTheDocument()
    })
  })

  describe('DevOps Technologies', () => {
    it('should display Docker', () => {
      render(<TechStack />)
      expect(screen.getByText(/docker/i)).toBeInTheDocument()
    })

    it('should display GitHub Actions', () => {
      render(<TechStack />)
      expect(screen.getByText(/github actions/i)).toBeInTheDocument()
    })

    it('should display Vercel', () => {
      render(<TechStack />)
      expect(screen.getByText(/vercel/i)).toBeInTheDocument()
    })
  })

  describe('Tools', () => {
    it('should display Vitest', () => {
      render(<TechStack />)
      expect(screen.getByText(/vitest/i)).toBeInTheDocument()
    })

    it('should display Sentry', () => {
      render(<TechStack />)
      expect(screen.getByText(/sentry/i)).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(<TechStack />)
      expect(container.querySelector('section')).toBeInTheDocument()
    })
  })
})
