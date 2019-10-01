import React from 'react'

/**
 * Renders a titled list element
 * @param {String} title Section title
 * @param {Array<T>} items Array of section data
 * @param {React.Element<T>} renderItem Section item render function
 */
export const SectionList = (props) => (
  <section className={`${props.title.toLowerCase()}-section`}>
    <h3>{props.title}</h3>
    <div className={props.className}>{props.items && props.items.map((data) => React.createElement(props.renderItem, data))}</div>
  </section>
)
