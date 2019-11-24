import React from 'react'
import { SectionList } from '../section-list'
import { SkillList } from '../skill-list'
import { Thumbnail } from '../thumbnail'
import { Duration } from '../duration'

export const Experience = (props) => (
  <SectionList
    title={'Experience'}
    items={
      (props.filters &&
        props.occupations.filter((occupation) => occupation.skills.find((skill) => props.filters.find((filter) => filter === skill)))) ||
      props.occupations
    }
    renderItem={OccupationItem}
  />
)

export const OccupationItem = (props) => (
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
      <Duration startTime={props.startTime} endTime={props.endTime} />
    </div>
  </div>
)
