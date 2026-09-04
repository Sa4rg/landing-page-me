import { Card, Carousel, FeatureHighlight } from '../../shared/components'

/**
 * Projects section - Showcase of featured projects
 * 
 * @component
 * @example
 * <Projects />
 */
export function Projects() {
  const projects = [
    {
      id: 'primebuy',
      title: 'PrimeBuy E-commerce',
      description: 'Full-featured e-commerce platform with complete purchase flow, admin dashboard, and real-time inventory management',
      status: 'Active Project',
      statusColor: 'green',
      dateRange: 'December 2025 - April 2026',
      dateSubtext: 'In active development',
      fit: 'cover', 
      carouselImages: [
        { src: '/images/primebuy/Screenshot 2026-04-16 193548.png', alt: 'PrimeBuy Home - Landing page with featured products' },
        { src: '/images/primebuy/Screenshot 2026-04-16 193750.png', alt: 'Google OAuth Login - Secure authentication' },
        { src: '/images/primebuy/Screenshot 2026-04-16 193817.png', alt: 'Product Catalog - Filtered product listing' },
        { src: '/images/primebuy/Screenshot 2026-04-16 193838.png', alt: 'Shopping Cart - Cart management interface' },
        { src: '/images/primebuy/Screenshot 2026-04-16 193913.png', alt: 'Checkout Process - Multi-payment gateway integration' },
        { src: '/images/primebuy/Screenshot 2026-04-16 194134.png', alt: 'Order Detail - Order tracking and status' },
      ],
      techStack: [
        { name: 'React', color: 'blue' },
        { name: 'Node.js', color: 'green' },
        { name: 'MySQL', color: 'purple' },
        { name: 'Docker', color: 'blue' },
        { name: 'AWS', color: 'orange' },
      ],
      metrics: [
        { value: '301', label: 'Automated Tests' },
        { value: 'CI/CD', label: 'GitHub Actions' },
        { value: 'Clean', label: 'Architecture' },
        { value: 'TDD', label: 'Approach' },
      ],
      featureHighlights: [
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
      ],
      links: [
        {
          label: 'View Live Site',
          url: 'https://primebuyinc.com/',
          type: 'primary',
        },
        {
          label: 'View Code',
          url: 'https://github.com/Sa4rg/ecommerce-primebuy',
          type: 'secondary',
        },
      ],
    },
    {
      id: 'shift-control',
      title: 'Shift Control',
      description: 'Internal mobile application for shift sales control with staff management, cash reconciliation, and incident tracking',
      status: 'Active Project',
      statusColor: 'green',
      dateRange: 'April 28, 2026 - May 30, 2026',
      dateSubtext: 'In production (Android)',
      fit: 'contain',
      carouselImages: [
        { src: '/images/shiftcontrol/staff-home.jpg', alt: 'Staff Home - Active shift with sales tracking' },
        { src: '/images/shiftcontrol/my-shifts.jpg', alt: 'My Shifts - Shift history and status' },
        { src: '/images/shiftcontrol/admin-dashboard.jpg', alt: 'Admin Dashboard - Overview and management' },
        { src: '/images/shiftcontrol/shift-filters.jpg', alt: 'Advanced Filters - Search by store and staff' },
        { src: '/images/shiftcontrol/reports.jpg', alt: 'Reports Generation - Daily, weekly, and monthly' },
        { src: '/images/shiftcontrol/report-details.jpg', alt: 'Report Details - Incidents and statistics' },
      ],
      techStack: [
        { name: 'Spring Boot', color: 'green' },
        { name: 'PostgreSQL', color: 'blue' },
        { name: 'React Native', color: 'blue' },
        { name: 'Expo', color: 'purple' },
        { name: 'TypeScript', color: 'blue' },
      ],
      metrics: [
        { value: '205+', label: 'Backend Tests' },
        { value: 'CI/CD', label: 'Jenkins Pipeline' },
        { value: '42', label: 'API Endpoints' },
        { value: 'JWT', label: 'Security' },
      ],
      featureHighlights: [
        {
          image: '/images/shiftcontrol/reports.jpg',
          imageAlt: 'Reports screen showing daily, weekly, and monthly options',
          title: 'Advanced Reporting',
          description: 'Generate comprehensive daily, weekly, and monthly reports across all stores with detailed sales analytics and staff performance metrics',
        },
        {
          image: '/images/shiftcontrol/shift-filters.jpg',
          imageAlt: 'Shift filtering interface with store and staff selection',
          title: 'Advanced Shift Filtering',
          description: 'Detailed shift review with filtering by store and staff member, supporting both open and closed shifts with complete transaction history',
        },
        {
          image: '/images/shiftcontrol/report-details.jpg',
          imageAlt: 'Incident management and tracking interface',
          title: 'Incident Management',
          description: 'Document and track cash discrepancies, incidents, and resolutions with admin oversight and automated shift reconciliation',
        },
      ],
      links: [
        {
          label: 'Download APK',
          url: 'https://expo.dev/accounts/sa4rg/projects/shift-control-mobile/builds/2f4fd9a1-a675-4625-9e39-3d6040cee586',
          type: 'primary',
        },
        {
          label: 'View Code',
          url: 'https://github.com/Sa4rg/shift-control',
          type: 'secondary',
        },
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Production-ready applications built with industry best practices
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-24">
            {projects.map((project) => (
              <div key={project.id}>
                {/* Project Card */}
                <Card variant="elevated" padding="none" className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Screenshots Carousel */}
                    <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                      <Carousel 
                        images={project.carouselImages}
                        fit={project.fit}
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
                            {project.title}
                          </h3>
                          <span className={`px-3 py-1 ${
                            project.statusColor === 'green' 
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                              : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          } text-xs font-semibold rounded-full`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {project.dateRange} • {project.dateSubtext}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
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
                          {project.metrics.map((metric) => (
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
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={link.type === 'primary'
                              ? "inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                              : "inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                            }
                          >
                            {link.label}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {link.type === 'primary' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              ) : (
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              )}
                            </svg>
                          </a>
                        ))}
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
                    {project.featureHighlights.map((feature) => (
                      <FeatureHighlight
                        key={feature.title}
                        image={feature.image}
                        imageAlt={feature.imageAlt}
                        title={feature.title}
                        description={feature.description}
                        fit={project.fit}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
