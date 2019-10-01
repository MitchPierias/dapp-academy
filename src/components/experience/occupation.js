import React from 'react'
import { SkillList } from './skill-list'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DATE_SEPARATOR = ', '
const NOW = +new Date()

export const Occupation = (props) => (
  <div className='occupation'>
    <Thumbnail image={props.thumb} />
    <div style={{ flex: 7 }} className='cell'>
      <h4 className='occupation-title'>{props.role}</h4>
      <div className='cell'>{props.organization}</div>
      {props.description && <p className={'occupation-description'}>{props.description}</p>}
      <SkillList skills={props.skills} />
    </div>
    <div style={{ flex: 'none' }} className={'occupation-detail cell'}>
      <div className={'occupation-location'}>{props.location}</div>
      <div className={'occupation-timeline'}>{getDurationText(new Date(NOW), new Date(NOW + 7200000000))}</div>
    </div>
  </div>
)

export const Thumbnail = (props) => {
  return (
    <div className='thumbnail cell'>
      <img style={{ width: '50px', flex: 'none', marginTop: '12px', marginRight: '12px' }} src={props.image} />
    </div>
  )
}

const getDurationText = (startDate, endDate) => [MONTHS[startDate.getMonth()], getEndDateText(endDate)].join(DATE_SEPARATOR)

const getEndDateText = (endDate) =>
  `${'string' === typeof endDate ? endDate : MONTHS[endDate.getMonth()]} ${'string' === typeof endDate ? '' : endDate.getFullYear()}`
