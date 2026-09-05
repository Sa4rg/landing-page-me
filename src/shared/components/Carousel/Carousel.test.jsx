import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  const mockImages = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
  ]

  describe('Rendering', () => {
    it('should render carousel with images', () => {
      render(<Carousel images={mockImages} />)
      
      // Primera imagen visible por defecto
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    })

    it('should render navigation buttons', () => {
      render(<Carousel images={mockImages} />)
      
      expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('should render indicator dots', () => {
      render(<Carousel images={mockImages} />)
      
      const dots = screen.getAllByRole('button', { name: /go to slide/i })
      expect(dots).toHaveLength(3)
    })

    it('should highlight active dot', () => {
      render(<Carousel images={mockImages} />)
      
      const dots = screen.getAllByRole('button', { name: /go to slide/i })
      expect(dots[0]).toHaveClass('bg-blue-600')
      expect(dots[1]).toHaveClass('bg-gray-300')
    })

    it('should render with custom className', () => {
      const { container } = render(
        <Carousel images={mockImages} className="custom-carousel" />
      )
      
      const carousel = container.querySelector('.custom-carousel')
      expect(carousel).toBeInTheDocument()
    })

    it('should use global contain fit when fit prop is contain', () => {
      render(<Carousel images={mockImages} fit="contain" />)

      const img = screen.getByAltText('Image 1')
      expect(img).toHaveClass('object-contain')
    })

    it('should prioritize image fit over global fit', () => {
      const imagesWithOverride = [
        { src: '/image1.jpg', alt: 'Image 1', fit: 'cover' },
        { src: '/image2.jpg', alt: 'Image 2', fit: 'contain' },
      ]

      render(<Carousel images={imagesWithOverride} fit="contain" />)

      const img = screen.getByAltText('Image 1')
      expect(img).toHaveClass('object-cover')
    })
  })

  describe('Navigation', () => {
    it('should navigate to next slide on next button click', async () => {
      const user = userEvent.setup()
      render(<Carousel images={mockImages} />)
      
      const nextButton = screen.getByRole('button', { name: /next/i })
      await user.click(nextButton)
      
      expect(screen.getByAltText('Image 2')).toBeInTheDocument()
    })

    it('should navigate to previous slide on prev button click', async () => {
      const user = userEvent.setup()
      render(<Carousel images={mockImages} />)
      
      const nextButton = screen.getByRole('button', { name: /next/i })
      await user.click(nextButton)
      
      const prevButton = screen.getByRole('button', { name: /previous/i })
      await user.click(prevButton)
      
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    })

    it('should loop to first slide when clicking next on last slide', async () => {
      const user = userEvent.setup()
      render(<Carousel images={mockImages} />)
      
      const nextButton = screen.getByRole('button', { name: /next/i })
      
      await user.click(nextButton)
      await user.click(nextButton)
      await user.click(nextButton)
      
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    })

    it('should loop to last slide when clicking prev on first slide', async () => {
      const user = userEvent.setup()
      render(<Carousel images={mockImages} />)
      
      const prevButton = screen.getByRole('button', { name: /previous/i })
      await user.click(prevButton)
      
      expect(screen.getByAltText('Image 3')).toBeInTheDocument()
    })

    it('should navigate to specific slide on dot click', async () => {
      const user = userEvent.setup()
      render(<Carousel images={mockImages} />)
      
      const dots = screen.getAllByRole('button', { name: /go to slide/i })
      await user.click(dots[2])
      
      expect(screen.getByAltText('Image 3')).toBeInTheDocument()
    })
  })

  describe('Keyboard Navigation', () => {
    it('should navigate with arrow keys', async () => {
      const user = userEvent.setup()
      render(<Carousel images={mockImages} />)
      
      const carousel = screen.getByRole('region', { name: /carousel/i })
      carousel.focus()
      
      await user.keyboard('{ArrowRight}')
      expect(screen.getByAltText('Image 2')).toBeInTheDocument()
      
      await user.keyboard('{ArrowLeft}')
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    })
  })

  describe('Auto-play', () => {
    it('should NOT auto-play by default', () => {
      vi.useFakeTimers()
      render(<Carousel images={mockImages} />)
      
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
      
      act(() => {
        vi.advanceTimersByTime(6000)
      })
      
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
      
      vi.useRealTimers()
    })

    it('should auto-play when autoPlay is true', () => {
      vi.useFakeTimers()
      render(<Carousel images={mockImages} autoPlay interval={1000} />)
      
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
      
      act(() => {
        vi.advanceTimersByTime(1000)
      })
      
      expect(screen.getByAltText('Image 2')).toBeInTheDocument()
      
      vi.useRealTimers()
    })

    it('should render correctly with autoPlay enabled', () => {
      render(<Carousel images={mockImages} autoPlay interval={3000} />)
      
      expect(screen.getByRole('region', { name: /carousel/i })).toBeInTheDocument()
      expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA roles and labels', () => {
      render(<Carousel images={mockImages} />)
      
      expect(screen.getByRole('region', { name: /carousel/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('should have alt text on images', () => {
      render(<Carousel images={mockImages} />)
      
      const img = screen.getByAltText('Image 1')
      expect(img).toHaveAttribute('alt', 'Image 1')
    })

    it('should indicate current slide to screen readers', () => {
      render(<Carousel images={mockImages} />)
      
      const dots = screen.getAllByRole('button', { name: /go to slide/i })
      expect(dots[0]).toHaveAttribute('aria-current', 'true')
      expect(dots[1]).toHaveAttribute('aria-current', 'false')
    })
  })

  describe('Edge Cases', () => {
    it('should handle single image', () => {
      const singleImage = [{ src: '/image1.jpg', alt: 'Single Image' }]
      render(<Carousel images={singleImage} />)
      
      expect(screen.getByAltText('Single Image')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('should handle empty images array gracefully', () => {
      render(<Carousel images={[]} />)
      
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })
  })
})