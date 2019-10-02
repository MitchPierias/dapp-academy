import React from 'react'
import { SectionList } from '../section-list'
import { Thumbnail } from '../thumbnail'
import { getDurationText } from '../../common/date-text'

const NOW = +new Date()

export const Education = (props) => <SectionList title={'Education'} items={props.education} renderItem={EducationItem} />

const EducationItem = (props) => (
  <div className='occupation'>
    <Thumbnail src={props.thumb} />
    <div style={{ flex: 7 }} className='cell'>
      <h4 className='title'>{props.field}</h4>
      <div className='subtitle'>{props.organization}</div>
    </div>
    <div style={{ flex: 'none' }} className={'occupation-detail cell'}>
      <div className={'occupation-location'}>{props.location}</div>
      <div className={'occupation-timeline'}>
        {getDurationText(new Date(props.startDate || NOW), new Date(props.endDate || NOW + 7200000000))}
      </div>
    </div>
  </div>
)
