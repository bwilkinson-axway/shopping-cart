import React from 'react';


const Footer = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h4 className="navbar-brand">&copy; {props.copyright}</h4>
    </nav>
  )
}

export default Footer
