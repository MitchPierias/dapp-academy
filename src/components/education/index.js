import React from 'react'
import { SectionList } from '../section-list'
import { Thumbnail } from '../thumbnail'
import { Duration } from '../duration'

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
      <Duration startDate={props.startDate} endDate={props.endDate} />
    </div>
  </div>
)
