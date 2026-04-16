import { useState } from 'react'
import PropTypes from 'prop-types'
import { Lightbox } from '../Lightbox/Lightbox'

export function FeatureHighlight({ image, imageAlt, title, description, className = '' }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <div 
      className={`overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800 ${className}`}
    >
      {/* Image */}
      <div 
        className="aspect-video w-full cursor-pointer overflow-hidden bg-gray-100 dark:bg-gray-700"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        image={{ src: image, alt: imageAlt }}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  )
}

FeatureHighlight.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
}
