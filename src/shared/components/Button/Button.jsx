import PropTypes from 'prop-types'

/**
 * Button component with multiple variants, sizes, and full accessibility support
 * 
 * @component
 * @example
 * <Button variant="primary" onClick={handleClick}>Click me</Button>
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  // Base styles (siempre presentes)
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-gray-500 dark:hover:bg-gray-600',
    outline: 'border-2 border-primary-600 bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20'
  }

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  // Disabled styles
  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer'

  // Combinar todas las clases
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  
  /** Visual variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  
  /** Button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  
  /** Disabled state */
  disabled: PropTypes.bool,
  
  /** Click handler */
  onClick: PropTypes.func,
  
  /** Button type attribute */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  
  /** Additional CSS classes */
  className: PropTypes.string,
}
