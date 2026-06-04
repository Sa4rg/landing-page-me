import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Certifications } from './Certifications'
import userEvent from '@testing-library/user-event'

describe('Certifications', () => {
  describe('Rendering', () => {
    it('should render section with correct id', () => {
      const { container } = render(<Certifications />)
      const section = container.querySelector('#certifications')
      expect(section).toBeInTheDocument()
    })

    it('should render section title', () => {
      render(<Certifications />)
      expect(screen.getByRole('heading', { level: 2, name: /certifications/i })).toBeInTheDocument()
    })

    it('should render certificate image', () => {
      render(<Certifications />)
      const image = screen.getByAltText(/master de desarrollo con ia/i)
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/images/certificate.jpg')
    })

    it('should render certificate title', () => {
      render(<Certifications />)
      expect(screen.getByText(/master de desarrollo con ia/i)).toBeInTheDocument()
    })

    it('should render issuer information', () => {
      render(<Certifications />)
      expect(screen.getByText(/big school/i)).toBeInTheDocument()
    })

    it('should render completion date', () => {
      render(<Certifications />)
      expect(screen.getByText(/may 2026/i)).toBeInTheDocument()
    })
  })

  describe('Feedback Section', () => {
    it('should render feedback preview text', () => {
      render(<Certifications />)
      expect(screen.getByText(/tu proyecto transmite una sensación muy clara/i)).toBeInTheDocument()
    })

    it('should render "Read More" button initially', () => {
      render(<Certifications />)
      expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument()
    })

    it('should not render full feedback initially', () => {
      render(<Certifications />)
      expect(screen.queryByText(/enhorabuena/i)).not.toBeInTheDocument()
    })

    it('should expand feedback when clicking "Read More"', async () => {
      const user = userEvent.setup()
      render(<Certifications />)
      
      const readMoreButton = screen.getByRole('button', { name: /read more/i })
      await user.click(readMoreButton)
      
      expect(screen.getByRole('button', { name: /read less/i })).toBeInTheDocument()
      expect(screen.getByText(/enhorabuena/i)).toBeInTheDocument()
    })

    it('should collapse feedback when clicking "Read Less"', async () => {
      const user = userEvent.setup()
      render(<Certifications />)
      
      await user.click(screen.getByRole('button', { name: /read more/i }))
      await user.click(screen.getByRole('button', { name: /read less/i }))
      
      expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument()
      expect(screen.queryByText(/enhorabuena/i)).not.toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<Certifications />)
      const heading = screen.getByRole('heading', { level: 2, name: /certifications/i })
      expect(heading).toBeInTheDocument()
    })

    it('should have accessible certificate image', () => {
      render(<Certifications />)
      const image = screen.getByAltText(/master de desarrollo con ia/i)
      expect(image).toHaveAttribute('alt')
    })

    it('should have accessible expand/collapse button', () => {
      render(<Certifications />)
      const button = screen.getByRole('button', { name: /read more/i })
      expect(button).toBeInTheDocument()
    })
  })

  describe('Responsive Layout', () => {
    it('should render grid layout container', () => {
      const { container } = render(<Certifications />)
      const gridContainer = container.querySelector('.grid')
      expect(gridContainer).toBeInTheDocument()
    })
  })
})
