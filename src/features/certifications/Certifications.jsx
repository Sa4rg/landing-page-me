import { useState } from 'react'
import { Card, Carousel } from '../../shared/components'

/**
 * Certifications section - Display professional certification with feedback
 * 
 * @component
 * @example
 * <Certifications />
 */
export function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false)

  const feedbackPreview = "Tu proyecto transmite una sensación muy clara de producto real desde el principio. No es el típico e-commerce de ejemplo, sino que está pensado para un contexto concreto (eso siempre es bueno), con lógica de negocio adaptada, despliegue activo, panel de administración..."

  const feedbackFull = "¡Hola, Sara Alexandra! Tu proyecto transmite una sensación muy clara de producto real desde el principio. No es el típico e-commerce de ejemplo, sino que está pensado para un contexto concreto (eso siempre es bueno), con lógica de negocio adaptada, despliegue activo, panel de administración, flujo de pagos manuales y una arquitectura bastante seria detrás. Me ha gustado mucho que hayas trabajado el proyecto como un sistema completo. Hay frontend, backend, autenticación, gestión de órdenes, catálogo, emails, multi-moneda, monitorización, CI/CD y una base de testing muy potente. Además, se nota cuidado en la documentación y en la forma de presentar el trabajo, incluyendo slides, guía para revisión y acceso de evaluador, algo que me ayuda muchísimo y demuestra que has pensado también en cómo enseñar lo que has construido. Si quieres seguir mejorándolo, un siguiente paso interesante sería reforzar todavía más la parte de experiencia de usuario y narrativa del negocio para que cualquier persona entienda en segundos qué hace especial a PrimeBuy frente a otros e-commerce más genéricos. La base técnica ya la tienes muy bien montada, así que ahora tienes mucho margen para seguir puliendo valor de producto. En cualquier caso, has hecho un trabajo con mucho nivel, muy completo y muy bien ejecutado. Enhorabuena, porque se nota el esfuerzo y se nota también que aquí hay proyecto de verdad. ¡Felicidades!"

  const universityFeedback = "The student has successfully completed the coursework for the program listed on the reverse side, taught by Big School and certified by the Isabel I de Castilla International University, with a duration of 150 hours (equivalent to 6 ECTS credits); therefore, this certificate is hereby issued."

  const universityCertifications = [
      { src: '/images/university/2F111F065 - Sara Alexandra Arguello González - 228623_page-0001.jpg', alt: 'First Page of the certificate' },
      { src: '/images/university/2F111F065 - Sara Alexandra Arguello González - 228623_page-0002.jpg', alt: 'Second Page of the certificate' },
  ]

  const udemyFeedback = "Great job completing the course! It’s quite an accomplishment to have worked through more than 40 hours of technical content. I hope you enjoyed the experience enough to stick around and continue contributing to our wonderful community. Keep learning more advanced tools and frameworks—they’ll continue to help you in your professional and entrepreneurial career. Thanks again for taking this course, and congratulations!"

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          {/* Certificate Display */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Certificate Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img
                  src="/images/certificate.jpg"
                  alt="Master de Desarrollo con IA - BIG School Certificate"
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column - Certificate Info and Feedback */}
            <div className="flex flex-col gap-6">
              {/* Certificate Info Card */}
              <Card variant="elevated" className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Master de Desarrollo con IA
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                  <span className="font-semibold">BIG School</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  May 2026
                </p>

                {/* Feedback Section */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Final Project Feedback
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <p className={isExpanded ? '' : 'line-clamp-3'}>
                      {isExpanded ? feedbackFull : feedbackPreview}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* Certificate Display */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Certificate Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                  <Carousel
                    images={universityCertifications}
                    autoPlay={false}
                  />
              </div>
            </div>

            {/* Right Column - Certificate Info and Feedback */}
            <div className="flex flex-col gap-6">
              {/* Certificate Info Card */}
              <Card variant="elevated" className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Expert in Software Development with Artificial Intelligence
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                  <span className="font-semibold">Isabel I of Castile International University</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  August 2026
                </p>

                {/* Feedback Section */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Final Project Feedback
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <p className={'line-clamp-5'}>
                      {universityFeedback}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Certificate Display */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Certificate Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img
                  src="/images/udemy/Certification Udemy Sara_page-0001.jpg"
                  alt="The Web Developer Bootcamp 2026 - Udemy Certificate"
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column - Certificate Info and Feedback */}
            <div className="flex flex-col gap-6">
              {/* Certificate Info Card */}
              <Card variant="elevated" className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  The Web Developer Bootcamp 2026
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                  <span className="font-semibold">Udemy</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  August 2026
                </p>

                {/* Feedback Section */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Final Project Feedback
                  </h4>
                  <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    <p className={'line-clamp-10'}>
                      {udemyFeedback}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
