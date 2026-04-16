import PropTypes from 'prop-types'

/**
 * Image placeholder component - Gray box for future screenshots
 * 
 * @component
 * @example
 * <ImagePlaceholder alt="Project screenshot" aspectRatio="16/9" />
 */
export function ImagePlaceholder({ 
  alt = 'Image placeholder', 
  aspectRatio = '16/9',
  className = '' 
}) {
  return (
    <div 
      className={`bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
    >
      <div className="text-center p-6">
        <svg 
          className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Screenshot Placeholder
        </p>
      </div>
    </div>
  )
}

ImagePlaceholder.propTypes = {
  /** Alt text for accessibility */
  alt: PropTypes.string,
  
  /** CSS aspect ratio (e.g., '16/9', '4/3', '1/1') */
  aspectRatio: PropTypes.string,
  
  /** Additional CSS classes */
  className: PropTypes.string,
}
