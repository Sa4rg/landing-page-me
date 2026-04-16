import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Lightbox } from './Lightbox'

describe('Lightbox', () => {
  const mockImage = {
    src: '/test-image.jpg',
    alt: 'Test Image',
  }

  const mockImages = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
  ]

  let mockOnClose

  beforeEach(() => {
    mockOnClose = vi.fn()
  })

  describe('Rendering', () => {
    it('should render lightbox when open', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(screen.getByAltText('Test Image')).toBeInTheDocument()
    })

    it('should not render when closed', () => {
      render(<Lightbox isOpen={false} image={mockImage} onClose={mockOnClose} />)
      
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should render close button', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
    })

    it('should render image with correct src and alt', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const img = screen.getByAltText('Test Image')
      expect(img).toHaveAttribute('src', '/test-image.jpg')
    })

    it('should render overlay backdrop', () => {
      const { container } = render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const overlay = container.querySelector('[class*="bg-black"]')
      expect(overlay).toBeInTheDocument()
    })
  })

  describe('Closing', () => {
    it('should call onClose when close button is clicked', async () => {
      const user = userEvent.setup()
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const closeButton = screen.getByRole('button', { name: /close/i })
      await user.click(closeButton)
      
      expect(mockOnClose).toHaveBeenCalledOnce()
    })

    it('should call onClose when overlay is clicked', async () => {
      const user = userEvent.setup()
      const { container } = render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const overlay = container.querySelector('[class*="fixed"]')
      await user.click(overlay)
      
      expect(mockOnClose).toHaveBeenCalled()
    })

    it('should NOT close when clicking on the image', async () => {
      const user = userEvent.setup()
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const img = screen.getByAltText('Test Image')
      await user.click(img)
      
      expect(mockOnClose).not.toHaveBeenCalled()
    })

    it('should close when ESC key is pressed', async () => {
      const user = userEvent.setup()
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      await user.keyboard('{Escape}')
      
      expect(mockOnClose).toHaveBeenCalledOnce()
    })
  })

  describe('Navigation with Multiple Images', () => {
    it('should render navigation buttons when multiple images exist', () => {
      render(<Lightbox isOpen images={mockImages} currentIndex={0} onClose={mockOnClose} />)
      
      expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('should NOT render navigation buttons for single image', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
    })

    it('should call onNavigate when next button is clicked', async () => {
      const user = userEvent.setup()
      const mockOnNavigate = vi.fn()
      render(
        <Lightbox 
          isOpen 
          images={mockImages} 
          currentIndex={0} 
          onClose={mockOnClose}
          onNavigate={mockOnNavigate}
        />
      )
      
      const nextButton = screen.getByRole('button', { name: /next/i })
      await user.click(nextButton)
      
      expect(mockOnNavigate).toHaveBeenCalledWith(1)
    })

    it('should call onNavigate when previous button is clicked', async () => {
      const user = userEvent.setup()
      const mockOnNavigate = vi.fn()
      render(
        <Lightbox 
          isOpen 
          images={mockImages} 
          currentIndex={1} 
          onClose={mockOnClose}
          onNavigate={mockOnNavigate}
        />
      )
      
      const prevButton = screen.getByRole('button', { name: /previous/i })
      await user.click(prevButton)
      
      expect(mockOnNavigate).toHaveBeenCalledWith(0)
    })

    it('should navigate with arrow keys', async () => {
      const user = userEvent.setup()
      const mockOnNavigate = vi.fn()
      render(
        <Lightbox 
          isOpen 
          images={mockImages} 
          currentIndex={1} 
          onClose={mockOnClose}
          onNavigate={mockOnNavigate}
        />
      )
      
      await user.keyboard('{ArrowRight}')
      expect(mockOnNavigate).toHaveBeenCalledWith(2)
      
      await user.keyboard('{ArrowLeft}')
      expect(mockOnNavigate).toHaveBeenCalledWith(0)
    })

    it('should display current image from images array', () => {
      render(<Lightbox isOpen images={mockImages} currentIndex={1} onClose={mockOnClose} />)
      
      expect(screen.getByAltText('Image 2')).toBeInTheDocument()
    })

    it('should display image counter', () => {
      render(<Lightbox isOpen images={mockImages} currentIndex={1} onClose={mockOnClose} />)
      
      expect(screen.getByText('2 / 3')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have dialog role', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('should have aria-modal attribute', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-modal', 'true')
    })

    it('should have accessible close button', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const closeButton = screen.getByRole('button', { name: /close/i })
      expect(closeButton).toHaveAttribute('aria-label')
    })

    it('should have alt text on image', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', 'Test Image')
    })
  })

  describe('Body Scroll Lock', () => {
    it('should prevent body scroll when open', () => {
      render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      expect(document.body).toHaveStyle({ overflow: 'hidden' })
    })

    it('should restore body scroll when closed', () => {
      const { rerender } = render(<Lightbox isOpen image={mockImage} onClose={mockOnClose} />)
      
      rerender(<Lightbox isOpen={false} image={mockImage} onClose={mockOnClose} />)
      
      expect(document.body).toHaveStyle({ overflow: 'auto' })
    })
  })

  describe('Edge Cases', () => {
    it('should handle missing image gracefully', () => {
      render(<Lightbox isOpen image={null} onClose={mockOnClose} />)
      
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('should loop to first image when navigating past last', async () => {
      const user = userEvent.setup()
      const mockOnNavigate = vi.fn()
      render(
        <Lightbox 
          isOpen 
          images={mockImages} 
          currentIndex={2} 
          onClose={mockOnClose}
          onNavigate={mockOnNavigate}
        />
      )
      
      const nextButton = screen.getByRole('button', { name: /next/i })
      await user.click(nextButton)
      
      expect(mockOnNavigate).toHaveBeenCalledWith(0)
    })

    it('should loop to last image when navigating before first', async () => {
      const user = userEvent.setup()
      const mockOnNavigate = vi.fn()
      render(
        <Lightbox 
          isOpen 
          images={mockImages} 
          currentIndex={0} 
          onClose={mockOnClose}
          onNavigate={mockOnNavigate}
        />
      )
      
      const prevButton = screen.getByRole('button', { name: /previous/i })
      await user.click(prevButton)
      
      expect(mockOnNavigate).toHaveBeenCalledWith(2)
    })
  })
})
