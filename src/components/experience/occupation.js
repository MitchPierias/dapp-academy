import React from 'react'
import { SkillList } from './skill-list'
import { getDurationText } from '../../common/date-text'
import { Thumbnail } from '../thumbnail'

const NOW = +new Date()

export const Occupation = (props) => (
  <div className='occupation'>
    <Thumbnail src={props.thumb} />
    <div style={{ flex: 7 }} className='cell'>
      <h4 className='title'>{props.role}</h4>
      <a href={props.url}>
        <div className='cell occupation-organization'>{props.organization}</div>
      </a>
      {props.description && <p className={'description'}>{props.description}</p>}
      <SkillList skills={props.skills} />
    </div>
    <div style={{ flex: 'none' }} className={'occupation-detail cell'}>
      <div className={'occupation-location'}>{props.location}</div>
      <div className={'occupation-timeline'}>{getDurationText(new Date(NOW), new Date(NOW + 7200000000))}</div>
    </div>
  </div>
)
