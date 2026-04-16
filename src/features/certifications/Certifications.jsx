import PropTypes from 'prop-types'
import { Card } from '../../shared/components'

/**
 * Certifications section - Display professional certifications
 * 
 * @component
 * @example
 * <Certifications certificates={certificatesArray} />
 */
export function Certifications({ certificates = [] }) {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          {/* Certificates Grid or Placeholder */}
          {certificates.length === 0 ? (
            /* Placeholder when no certificates */
            <div className="max-w-2xl mx-auto">
              <Card variant="bordered" className="text-center py-16">
                <div className="mb-6">
                  <svg
                    className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Coming Soon
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Professional certifications will be displayed here once received
                </p>
              </Card>
            </div>
          ) : (
            /* Certificates Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  variant="elevated"
                  hoverable
                  className="overflow-hidden"
                >
                  {/* Certificate Image */}
                  <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span className="font-medium">{cert.issuer}</span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {cert.date}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

Certifications.propTypes = {
  certificates: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      issuer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
}
