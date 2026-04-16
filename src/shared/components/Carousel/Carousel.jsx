import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Lightbox } from '../Lightbox/Lightbox'

export function Carousel({ images = [], autoPlay = false, interval = 5000, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }, [images.length])

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      goToNext()
    } else if (e.key === 'ArrowLeft') {
      goToPrevious()
    }
  }, [goToNext, goToPrevious])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || images.length === 0) return

    const timer = setInterval(() => {
      goToNext()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, isPaused, interval, goToNext, images.length])

  if (images.length === 0) {
    return null
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 ${className}`}
      role="region"
      aria-label="Image carousel"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex={0}
    >
      {/* Images Container */}
      <div className="relative aspect-[16/10]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full cursor-pointer object-cover transition-transform hover:scale-105"
              loading={index === 0 ? 'eager' : 'lazy'}
              onClick={() => setIsLightboxOpen(true)}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 transition-all hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 transition-all hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              index === currentIndex
                ? 'bg-blue-600 dark:bg-blue-500'
                : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  className: PropTypes.string,
}
