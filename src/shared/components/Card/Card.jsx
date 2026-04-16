import PropTypes from 'prop-types'

/**
 * Card component for containing content with various styling options
 * 
 * @component
 * @example
 * <Card variant="elevated" hoverable>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  as: Component = 'article',
  className = '',
  ...props
}) {
  // Base styles
  const baseStyles = 'rounded-lg'

  // Variant styles
  const variantStyles = {
    default: 'bg-white dark:bg-gray-800 shadow-sm',
    bordered: 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-gray-800 shadow-lg',
    outlined: 'bg-transparent border border-gray-300 dark:border-gray-600'
  }

  // Padding styles
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  // Hover styles
  const hoverStyles = hoverable
    ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer'
    : ''

  // Combine all classes
  const cardClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${paddingStyles[padding]}
    ${hoverStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <Component className={cardClasses} {...props}>
      {children}
    </Component>
  )
}

Card.propTypes = {
  /** Card content */
  children: PropTypes.node.isRequired,
  
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated', 'outlined']),
  
  /** Padding size */
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  
  /** Enable hover effect */
  hoverable: PropTypes.bool,
  
  /** HTML element to render as */
  as: PropTypes.oneOf(['article', 'div', 'section']),
  
  /** Additional CSS classes */
  className: PropTypes.string,
}
