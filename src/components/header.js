import React from 'react'

/**
 * Renders a resume header containing the individual's
 * name, links, current profession and location.
 */
export const Header = (props) => (
  <header className='row'>
    <h1>{props.fullName}</h1>
    <h2>{props.profession}</h2>
    <p>{props.location}</p>
    <div className='row' style={styles.contactDetails}>
      <div style={styles.contactDetailItem}>mitch@pierias.com</div>
      <div>|</div>
      <div style={styles.contactDetailItem}>0431 536 911</div>
      <div>|</div>
      <a href='https://www.linkedin.com/in/mitch-pierias/' style={styles.contactDetailItem}>
        LinkedIn
      </a>
      <div>|</div>
      <a href='https://github.com/MitchPierias' style={styles.contactDetailItem}>
        GitHub
      </a>
    </div>
  </header>
)

const styles = {
  contactDetails: { display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', padding: '12px' },
  contactDetailItem: { padding: '0px 2%' },
}
