import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  describe('Rendering', () => {
    it('should render section title', () => {
      render(<Projects />)
      expect(screen.getByRole('heading', { name: /featured project/i })).toBeInTheDocument()
    })

    it('should render PrimeBuy project', () => {
      render(<Projects />)
      expect(screen.getByText(/primebuy/i)).toBeInTheDocument()
    })

    it('should render project description', () => {
      render(<Projects />)
      expect(screen.getByText(/full-featured e-commerce platform/i)).toBeInTheDocument()
    })
  })

  describe('Project Details', () => {
    it('should display test count', () => {
      render(<Projects />)
      expect(screen.getByText(/301/i)).toBeInTheDocument()
      expect(screen.getByText(/automated tests/i)).toBeInTheDocument()
    })

    it('should display CI/CD information', () => {
      render(<Projects />)
      expect(screen.getByText(/ci\/cd/i)).toBeInTheDocument()
    })

    it('should display Clean Architecture metric', () => {
      render(<Projects />)
      expect(screen.getByText(/clean/i)).toBeInTheDocument()
      expect(screen.getByText(/architecture/i)).toBeInTheDocument()
    })

    it('should display TDD badge', () => {
      render(<Projects />)
      expect(screen.getByText(/tdd/i)).toBeInTheDocument()
    })
  })

  describe('Tech Stack', () => {
    it('should display React badge', () => {
      render(<Projects />)
      expect(screen.getByText(/react/i)).toBeInTheDocument()
    })

    it('should display Node.js badge', () => {
      render(<Projects />)
      expect(screen.getByText(/node\.js/i)).toBeInTheDocument()
    })

    it('should display MySQL badge', () => {
      render(<Projects />)
      expect(screen.getByText(/mysql/i)).toBeInTheDocument()
    })

    it('should display Docker badge', () => {
      render(<Projects />)
      expect(screen.getByText(/docker/i)).toBeInTheDocument()
    })
  })

  describe('Links', () => {
    it('should render View Live Site link', () => {
      render(<Projects />)
      const link = screen.getByRole('link', { name: /view live site/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://primebuyinc.com/')
    })

    it('should render View Code link', () => {
      render(<Projects />)
      const link = screen.getByRole('link', { name: /view code/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://github.com/Sa4rg/ecommerce-primebuy')
    })

    it('should open links in new tab', () => {
      render(<Projects />)
      const link = screen.getByRole('link', { name: /view live site/i })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(<Projects />)
      expect(container.querySelector('section')).toBeInTheDocument()
    })

    it('should have carousel with accessible images', () => {
      render(<Projects />)
      
      // Verificar que existe el carousel
      expect(screen.getByRole('region', { name: /carousel/i })).toBeInTheDocument()
      
      // Verificar que tiene imágenes con alt text apropiado (buscar una específica)
      expect(screen.getByAltText('PrimeBuy Home - Landing page with featured products')).toBeInTheDocument()
    })
  })
})
