import React from 'react'

/**
 * Renders a titled list element
 * @param {String} title Section title
 * @param {Array<T>} items Array of section data
 * @param {React.Element<T>} renderItem Section item render function, expects a React node to be returned
 */
export const SectionList = (props) => (
  <section>
    <h3>{props.title}</h3>
    <article>{props.items && props.items.map((data) => React.createElement(props.renderItem, data))}</article>
  </section>
)
