import './Section.css'

function Section({ children, id, className = '', ...props }) {
  return (
    <section id={id} className={`section ${className}`} {...props}>
      {children}
    </section>
  )
}

export default Section
