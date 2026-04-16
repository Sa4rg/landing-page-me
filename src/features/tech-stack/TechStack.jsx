import { Card } from '../../shared/components'

/**
 * TechStack section - Display of technologies and tools organized by category
 * 
 * @component
 * @example
 * <TechStack />
 */
export function TechStack() {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      technologies: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Testing Library'
      ]
    },
    {
      title: 'Backend',
      color: 'green',
      technologies: [
        'Node.js',
        'Express',
        'MySQL',
        'Knex.js'
      ]
    },
    {
      title: 'DevOps',
      color: 'purple',
      technologies: [
        'Docker',
        'GitHub Actions',
        'Render',
        'Vercel'
      ]
    },
    {
      title: 'Tools',
      color: 'orange',
      technologies: [
        'Vitest',
        'Sentry',
        'Cloudinary',
        'AWS Lambda'
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
    }
    return colors[color] || colors.blue
  }

  const getTitleColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-700 dark:text-blue-400',
      green: 'text-green-700 dark:text-green-400',
      purple: 'text-purple-700 dark:text-purple-400',
      orange: 'text-orange-700 dark:text-orange-400'
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="tech-stack" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to build scalable applications
            </p>
          </div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories.map((category) => (
              <Card 
                key={category.title}
                variant="bordered"
                padding="lg"
                className={`${getColorClasses(category.color)} border-2 transition-transform hover:scale-105`}
              >
                {/* Category Title */}
                <h3 className={`text-2xl font-bold mb-6 ${getTitleColorClasses(category.color)}`}>
                  {category.title}
                </h3>

                {/* Technologies List */}
                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        category.color === 'blue' ? 'bg-blue-500' :
                        category.color === 'green' ? 'bg-green-500' :
                        category.color === 'purple' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Always learning and exploring new technologies to improve development workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
