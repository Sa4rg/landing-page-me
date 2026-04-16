import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureHighlight } from './FeatureHighlight'

describe('FeatureHighlight', () => {
  const mockFeature = {
    image: '/test-image.jpg',
    imageAlt: 'Test Feature',
    title: 'AI Shopping Assistant',
    description: 'Integrated AI assistant with real-time product queries',
  }

  describe('Rendering', () => {
    it('should render feature with image', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      const img = screen.getByRole('img', { name: /test feature/i })
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/test-image.jpg')
    })

    it('should render title', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      expect(screen.getByText('AI Shopping Assistant')).toBeInTheDocument()
    })

    it('should render description', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      expect(screen.getByText(/integrated ai assistant/i)).toBeInTheDocument()
    })

    it('should render within a card container', () => {
      const { container } = render(<FeatureHighlight {...mockFeature} />)
      
      // Debe tener clases de Card
      const card = container.querySelector('.rounded-lg')
      expect(card).toBeInTheDocument()
    })

    it('should render with custom className', () => {
      const { container } = render(
        <FeatureHighlight {...mockFeature} className="custom-feature" />
      )
      
      const feature = container.querySelector('.custom-feature')
      expect(feature).toBeInTheDocument()
    })
  })

  describe('Layout', () => {
    it('should have proper image aspect ratio', () => {
      const { container } = render(<FeatureHighlight {...mockFeature} />)
      
      const imageContainer = container.querySelector('.aspect-video')
      expect(imageContainer).toBeInTheDocument()
    })

    it('should have title as h3 heading', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      const heading = screen.getByRole('heading', { level: 3, name: /ai shopping assistant/i })
      expect(heading).toBeInTheDocument()
    })

    it('should have proper spacing between elements', () => {
      const { container } = render(<FeatureHighlight {...mockFeature} />)
      
      // Verificar que tiene padding
      const content = container.querySelector('.p-4')
      expect(content).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('should have hover effect on card', () => {
      const { container } = render(<FeatureHighlight {...mockFeature} />)
      
      const card = container.querySelector('.hover\\:shadow-lg')
      expect(card).toBeInTheDocument()
    })

    it('should display image with object-cover', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-cover')
    })

    it('should support dark mode styling', () => {
      const { container } = render(<FeatureHighlight {...mockFeature} />)
      
      // Verificar que tiene clases dark:
      const darkElement = container.querySelector('[class*="dark:"]')
      expect(darkElement).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      expect(screen.getByRole('img')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    it('should have alt text on image', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', 'Test Feature')
    })

    it('should have descriptive text content', () => {
      render(<FeatureHighlight {...mockFeature} />)
      
      const description = screen.getByText(/integrated ai assistant/i)
      expect(description).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should render with minimal props', () => {
      render(
        <FeatureHighlight 
          image="/img.jpg"
          imageAlt="Image"
          title="Title"
          description="Description"
        />
      )
      
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Description')).toBeInTheDocument()
    })

    it('should handle long description text', () => {
      const longDescription = 'This is a very long description that spans multiple lines and contains lots of detailed information about the feature being highlighted in this component.'
      
      render(
        <FeatureHighlight 
          {...mockFeature}
          description={longDescription}
        />
      )
      
      expect(screen.getByText(longDescription)).toBeInTheDocument()
    })
  })
})
