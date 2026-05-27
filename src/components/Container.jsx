import './Container.css'

function Container({ children, className = '', ...props }) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
