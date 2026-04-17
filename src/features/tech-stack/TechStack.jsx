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
    },
    {
      title: 'AI Workflow',
      color: 'indigo',
      technologies: [
        'GitHub Copilot',
        'Claude AI',
        'ChatGPT',
        'AI-Assisted Development'
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500/10 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700',
      green: 'bg-green-500/10 dark:bg-green-900/30 border-green-300 dark:border-green-700',
      purple: 'bg-purple-500/10 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700',
      orange: 'bg-orange-500/10 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700',
      indigo: 'bg-indigo-500/10 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700'
    }
    return colors[color] || colors.blue
  }

  const getTitleColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      purple: 'text-purple-600 dark:text-purple-400',
      orange: 'text-orange-600 dark:text-orange-400',
      indigo: 'text-indigo-600 dark:text-indigo-400'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        category.color === 'orange' ? 'bg-orange-500' :
                        'bg-indigo-500'
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
          <div className="mt-12 text-center space-y-3">
            <p className="text-gray-600 dark:text-gray-400">
              Always learning and exploring new technologies to improve development workflow
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
              🤖 Building with AI assistance while maintaining clean architecture and best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
