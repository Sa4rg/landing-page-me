import { Card, Carousel, FeatureHighlight } from '../../shared/components'

/**
 * Projects section - Showcase of featured projects
 * 
 * @component
 * @example
 * <Projects />
 */
export function Projects() {
  // Carrusel principal - User Flow completo (sin duplicados)
  const carouselImages = [
    { src: '/images/primebuy/Screenshot 2026-04-16 193548.png', alt: 'PrimeBuy Home - Landing page with featured products' },
    { src: '/images/primebuy/Screenshot 2026-04-16 193750.png', alt: 'Google OAuth Login - Secure authentication' },
    { src: '/images/primebuy/Screenshot 2026-04-16 193817.png', alt: 'Product Catalog - Filtered product listing' },
    { src: '/images/primebuy/Screenshot 2026-04-16 193838.png', alt: 'Shopping Cart - Cart management interface' },
    { src: '/images/primebuy/Screenshot 2026-04-16 193913.png', alt: 'Checkout Process - Multi-payment gateway integration' },
    { src: '/images/primebuy/Screenshot 2026-04-16 194134.png', alt: 'Order Detail - Order tracking and status' },
  ]

  // Feature Highlights - Capacidades técnicas específicas
  const featureHighlights = [
    {
      image: '/images/primebuy/Screenshot 2026-04-16 193651.png',
      imageAlt: 'AI Shopping Assistant integrated in homepage',
      title: 'AI Shopping Assistant',
      description: 'An AI-powered chatbot that allows users to ask questions about products, orders, and after-sales support in real time, and uses natural language processing to provide a better user experience',
    },
    {
      image: '/images/primebuy/Screenshot 2026-04-16 193913.png',
      imageAlt: 'Multi-payment and delivery checkout interface',
      title: 'Multi-Payment Gateway',
      description: 'Seamless integration with multiple payment methods including Zelle, Zinli, national transfer back and delivery options, in the same city or nationwide',
    },
    {
      image: '/images/primebuy/Screenshot 2026-04-16 194206.png',
      imageAlt: 'Admin payment tracking dashboard',
      title: 'Admin Control Panel',
      description: 'Comprehensive dashboard for inventory management, payment tracking, and order status monitoring in real-time',
    },
  ]

  const techStack = [
    { name: 'React', color: 'blue' },
    { name: 'Node.js', color: 'green' },
    { name: 'MySQL', color: 'purple' },
    { name: 'Docker', color: 'blue' },
    { name: 'AWS', color: 'orange' },
  ]

  const metrics = [
    { value: '301', label: 'Automated Tests' },
    { value: 'CI/CD', label: 'GitHub Actions' },
    { value: 'Clean', label: 'Architecture' },
    { value: 'TDD', label: 'Approach' },
  ]

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Project
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Production-ready e-commerce platform built with industry best practices
            </p>
          </div>

          {/* Project Card */}
          <Card variant="elevated" padding="none" className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Screenshots Carousel */}
              <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                <Carousel 
                  images={carouselImages}
                  autoPlay={true}
                  interval={4000}
                  className="w-full"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                {/* Project Title */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      PrimeBuy E-commerce
                    </h3>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                      Active Project
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    December 2025 - April 2026 • In active development
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Full-featured e-commerce platform with complete purchase flow, 
                    admin dashboard, and real-time inventory management
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className={`px-3 py-1 rounded-full text-sm font-medium
                          ${tech.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : ''}
                          ${tech.color === 'green' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : ''}
                          ${tech.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : ''}
                          ${tech.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' : ''}
                        `}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://primebuyinc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    View Live Site
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Sa4rg/ecommerce-primebuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    View Code
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Feature Highlights Section */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Key Features
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featureHighlights.map((feature) => (
                <FeatureHighlight
                  key={feature.title}
                  image={feature.image}
                  imageAlt={feature.imageAlt}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
