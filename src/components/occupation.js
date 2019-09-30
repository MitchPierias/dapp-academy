import React from 'react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DATE_SEPARATOR = ', '
const NOW = +new Date()

export const Occupation = (props) => (
  <div className='row py-2' style={styles.occupation}>
    <div style={styles.container}>
      <div>
        <h3 className='mb-1'>{props.role}</h3>
        <p className='font-weight-light mb-2'>{props.organization}</p>
        {props.description && <p>props.description</p>}
        <div className='skills' style={styles.skills}>
          {props.skills &&
            props.skills.map((skill) => (
              <span className='tag' style={{ ...styles.label, borderRadius: '7px' }}>
                <span style={{ fontSize: '12px', margin: '0px 6px' }}>{skill}</span>
              </span>
            ))}
        </div>
      </div>
      <div className={'occupationDetail'} style={styles.occupationDetail}>
        <div>{props.location}</div>
        <div className={'role-date'}>{getDurationText(new Date(NOW), new Date(NOW + 360000000))}</div>
      </div>
    </div>
  </div>
)

export const getDurationText = (startDate, endDate) => [MONTHS[startDate.getMonth()], getEndDateText(endDate)].join(DATE_SEPARATOR)

export const getEndDateText = (endDate) =>
  `${'string' === typeof endDate ? endDate : MONTHS[endDate.getMonth()]} ${'string' === typeof endDate ? '' : endDate.getFullYear()}`

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  occupation: { margin: '6px 0px' },
  occupationDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  skills: { display: 'flex' },
}
