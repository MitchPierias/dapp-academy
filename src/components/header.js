import React from 'react'

/**
 * Renders a resume header containing the individual's
 * name, links, current profession and location.
 */
export const Header = (props) => (
  <header>
    <h1>{props.name}</h1>
    <h2>{props.profession}</h2>
    <h3>{props.location}</h3>
    <div className='skills'>
      {props.links.map((link, idx) => (
        <a key={idx} className={'skill-item'} href={link.url}>
          {link.label}
        </a>
      ))}
    </div>
  </header>
)
