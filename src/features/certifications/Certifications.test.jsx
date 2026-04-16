import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Certifications } from './Certifications'

describe('Certifications', () => {
  describe('Rendering', () => {
    it('should render section title', () => {
      render(<Certifications />)
      
      expect(screen.getByRole('heading', { level: 2, name: /certifications/i })).toBeInTheDocument()
    })

    it('should render section description', () => {
      render(<Certifications />)
      
      expect(screen.getByText(/professional certifications and continuous learning/i)).toBeInTheDocument()
    })

    it('should have proper section structure', () => {
      const { container } = render(<Certifications />)
      
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
      expect(section).toHaveAttribute('id', 'certifications')
    })
  })

  describe('Certificate Display', () => {
    it('should render placeholder when no certificates', () => {
      render(<Certifications certificates={[]} />)
      
      expect(screen.getByText(/coming soon/i)).toBeInTheDocument()
    })

    it('should render certificate cards when provided', () => {
      const mockCertificates = [
        {
          title: 'Full-Stack Development Bootcamp',
          issuer: 'BigSchool',
          date: 'April 2026',
          image: '/cert1.jpg',
        },
      ]
      
      render(<Certifications certificates={mockCertificates} />)
      
      expect(screen.getByText('Full-Stack Development Bootcamp')).toBeInTheDocument()
      expect(screen.getByText('BigSchool')).toBeInTheDocument()
      expect(screen.getByText('April 2026')).toBeInTheDocument()
    })

    it('should render multiple certificates', () => {
      const mockCertificates = [
        {
          title: 'Full-Stack Development Bootcamp',
          issuer: 'BigSchool',
          date: 'April 2026',
          image: '/cert1.jpg',
        },
        {
          title: 'Advanced Web Development',
          issuer: 'Universidad de España',
          date: 'May 2026',
          image: '/cert2.jpg',
        },
      ]
      
      render(<Certifications certificates={mockCertificates} />)
      
      expect(screen.getByText('Full-Stack Development Bootcamp')).toBeInTheDocument()
      expect(screen.getByText('Advanced Web Development')).toBeInTheDocument()
    })

    it('should render certificate images', () => {
      const mockCertificates = [
        {
          title: 'Full-Stack Development Bootcamp',
          issuer: 'BigSchool',
          date: 'April 2026',
          image: '/cert1.jpg',
        },
      ]
      
      render(<Certifications certificates={mockCertificates} />)
      
      const img = screen.getByAltText(/full-stack development bootcamp/i)
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/cert1.jpg')
    })
  })

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(<Certifications />)
      
      expect(container.querySelector('section')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('should have accessible certificate images', () => {
      const mockCertificates = [
        {
          title: 'Full-Stack Development Bootcamp',
          issuer: 'BigSchool',
          date: 'April 2026',
          image: '/cert1.jpg',
        },
      ]
      
      render(<Certifications certificates={mockCertificates} />)
      
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt')
    })
  })

  describe('Layout', () => {
    it('should use grid layout for multiple certificates', () => {
      const mockCertificates = [
        {
          title: 'Certificate 1',
          issuer: 'Issuer 1',
          date: 'Date 1',
          image: '/cert1.jpg',
        },
        {
          title: 'Certificate 2',
          issuer: 'Issuer 2',
          date: 'Date 2',
          image: '/cert2.jpg',
        },
      ]
      
      const { container } = render(<Certifications certificates={mockCertificates} />)
      
      const grid = container.querySelector('[class*="grid"]')
      expect(grid).toBeInTheDocument()
    })
  })
})
