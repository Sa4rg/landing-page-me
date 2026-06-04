import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  describe('Rendering', () => {
    it('should render section title as plural', () => {
      render(<Projects />)
      expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument()
    })

    it('should render PrimeBuy project', () => {
      render(<Projects />)
      expect(screen.getByText(/primebuy e-commerce/i)).toBeInTheDocument()
    })

    it('should render Shift Control project', () => {
      render(<Projects />)
      expect(screen.getByText(/shift control/i)).toBeInTheDocument()
    })

    it('should render project descriptions', () => {
      render(<Projects />)
      expect(screen.getByText(/full-featured e-commerce platform/i)).toBeInTheDocument()
      expect(screen.getByText(/internal mobile application/i)).toBeInTheDocument()
    })
  })

  describe('Project Details', () => {
    it('should display PrimeBuy test count', () => {
      render(<Projects />)
      expect(screen.getByText(/301/i)).toBeInTheDocument()
      expect(screen.getByText(/automated tests/i)).toBeInTheDocument()
    })

    it('should display Shift Control test count', () => {
      render(<Projects />)
      expect(screen.getByText(/205\+/i)).toBeInTheDocument()
      expect(screen.getByText(/backend tests/i)).toBeInTheDocument()
    })

    it('should display CI/CD information for both projects', () => {
      render(<Projects />)
      const cicdElements = screen.getAllByText(/ci\/cd/i)
      expect(cicdElements.length).toBeGreaterThan(0)
    })

    it('should display architecture metrics', () => {
      render(<Projects />)
      expect(screen.getByText(/clean/i)).toBeInTheDocument()
      expect(screen.getByText(/architecture/i)).toBeInTheDocument()
    })

    it('should display security information', () => {
      render(<Projects />)
      expect(screen.getByText(/jwt/i)).toBeInTheDocument()
      expect(screen.getByText(/security/i)).toBeInTheDocument()
    })
  })

  describe('Tech Stack', () => {
    it('should display PrimeBuy tech stack badges', () => {
      render(<Projects />)
      const reactElements = screen.getAllByText(/react/i)
      expect(reactElements.length).toBeGreaterThan(0)
      expect(screen.getByText(/node\.js/i)).toBeInTheDocument()
      expect(screen.getByText(/mysql/i)).toBeInTheDocument()
    })

    it('should display Shift Control tech stack badges', () => {
      render(<Projects />)
      expect(screen.getByText(/spring boot/i)).toBeInTheDocument()
      expect(screen.getByText(/postgresql/i)).toBeInTheDocument()
      expect(screen.getByText(/expo/i)).toBeInTheDocument()
      expect(screen.getByText(/typescript/i)).toBeInTheDocument()
    })

    it('should display Docker badge', () => {
      render(<Projects />)
      expect(screen.getByText(/docker/i)).toBeInTheDocument()
    })
  })

  describe('Links', () => {
    it('should render PrimeBuy View Live Site link', () => {
      render(<Projects />)
      const link = screen.getByRole('link', { name: /view live site/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://primebuyinc.com/')
    })

    it('should render Shift Control Download APK link', () => {
      render(<Projects />)
      const link = screen.getByRole('link', { name: /download apk/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', expect.stringContaining('expo.dev'))
    })

    it('should render View Code links for both projects', () => {
      render(<Projects />)
      const links = screen.getAllByRole('link', { name: /view code/i })
      expect(links.length).toBe(2)
      expect(links[0]).toHaveAttribute('href', 'https://github.com/Sa4rg/ecommerce-primebuy')
      expect(links[1]).toHaveAttribute('href', 'https://github.com/Sa4rg/shift-control')
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

    it('should have carousels with accessible images', () => {
      render(<Projects />)
      
      // Verificar que existen múltiples carousels (uno por proyecto)
      const carousels = screen.getAllByRole('region', { name: /carousel/i })
      expect(carousels.length).toBe(2)
      
      // Verificar que tienen imágenes con alt text apropiado
      expect(screen.getByAltText('PrimeBuy Home - Landing page with featured products')).toBeInTheDocument()
      expect(screen.getByAltText('Staff Home - Active shift with sales tracking')).toBeInTheDocument()
    })
  })
})
