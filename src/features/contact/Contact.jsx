/**
 * Contact section with footer - Get in touch and social links
 * 
 * @component
 * @example
 * <Contact />
 */
export function Contact() {
  const currentYear = new Date().getFullYear()

  const contactMethods = [
    {
      name: 'Send Email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:sa30811670@gmail.com',
      label: 'sa30811670@gmail.com',
      external: true
    },
    {
      name: 'GitHub Profile',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      href: 'https://github.com/Sa4rg',
      label: '@Sa4rg',
      external: true
    },
    {
      name: 'LinkedIn Profile',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://www.linkedin.com/in/sara-arguello-860975403/',
      label: '/in/sara-arguello',
      external: true
    }
  ]

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I'm currently looking for opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  aria-label={method.name}
                  className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {method.label}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Designed and coded with <span className="text-red-500">❤️</span> by Sara Arguello
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Built with <span className="font-medium text-primary-600 dark:text-primary-400">React</span>, {' '}
              <span className="font-medium text-primary-600 dark:text-primary-400">Vite</span>, and {' '}
              <span className="font-medium text-primary-600 dark:text-primary-400">Tailwind CSS</span>. {' '}
              Tested with <span className="font-medium text-primary-600 dark:text-primary-400">Vitest</span>. {' '}
              Deployed on <span className="font-medium text-primary-600 dark:text-primary-400">Vercel</span>.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Developed following <span className="font-medium text-gray-900 dark:text-white">Clean Architecture</span> principles and {' '}
              <span className="font-medium text-gray-900 dark:text-white">Test-Driven Development</span> (TDD)
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-4">
              © {currentYear} Sara Arguello • Full-Stack Developer
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
