import PropTypes from 'prop-types'

/**
 * Section component for page layout with consistent spacing and container
 * 
 * @component
 * @example
 * <Section id="hero" spacing="lg" background="gray">
 *   <h1>Hero Section</h1>
 * </Section>
 */
export function Section({
  children,
  id,
  spacing = 'md',
  background = 'white',
  container = true,
  as: Component = 'section',
  className = '',
  ...props
}) {
  // Background styles
  const backgroundStyles = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    transparent: 'bg-transparent'
  }

  // Spacing styles
  const spacingStyles = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24'
  }

  // Container styles
  const containerStyles = container 
    ? 'container mx-auto px-4 sm:px-6 lg:px-8' 
    : ''

  // Section wrapper classes
  const sectionClasses = `
    ${backgroundStyles[background]}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  // Inner container classes
  const innerClasses = `
    ${containerStyles}
    ${spacingStyles[spacing]}
  `.trim().replace(/\s+/g, ' ')

  return (
    <Component id={id} className={sectionClasses} {...props}>
      <div className={innerClasses}>
        {children}
      </div>
    </Component>
  )
}

Section.propTypes = {
  /** Section content */
  children: PropTypes.node.isRequired,
  
  /** HTML id for anchor navigation */
  id: PropTypes.string,
  
  /** Vertical spacing */
  spacing: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  
  /** Background color */
  background: PropTypes.oneOf(['white', 'gray', 'transparent']),
  
  /** Wrap content in container */
  container: PropTypes.bool,
  
  /** HTML element to render as */
  as: PropTypes.oneOf(['section', 'main', 'div', 'footer', 'header']),
  
  /** Additional CSS classes */
  className: PropTypes.string,
}
