import { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

export function Lightbox({ 
  isOpen = false, 
  image = null, 
  images = null, 
  currentIndex = 0, 
  onClose, 
  onNavigate 
}) {
  // Determine if we're using single image or images array
  const isSingleImage = image !== null && images === null
  const currentImage = isSingleImage ? image : (images?.[currentIndex] || null)
  const hasMultipleImages = images && images.length > 1

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (hasMultipleImages && onNavigate) {
        if (e.key === 'ArrowRight') {
          handleNext()
        } else if (e.key === 'ArrowLeft') {
          handlePrevious()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, hasMultipleImages, onNavigate, currentIndex])

  // Lock/unlock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleNext = useCallback(() => {
    if (!images || !onNavigate) return
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    onNavigate(nextIndex)
  }, [images, currentIndex, onNavigate])

  const handlePrevious = useCallback(() => {
    if (!images || !onNavigate) return
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    onNavigate(prevIndex)
  }, [images, currentIndex, onNavigate])

  const handleOverlayClick = (e) => {
    // Only close if clicking on the overlay itself, not on children
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close lightbox"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image Counter (for multiple images) */}
      {hasMultipleImages && (
        <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Main Image */}
      <div className="relative max-h-[90vh] max-w-7xl">
        {currentImage && (
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>

      {/* Navigation Buttons (for multiple images) */}
      {hasMultipleImages && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

Lightbox.propTypes = {
  isOpen: PropTypes.bool,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  currentIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
}
