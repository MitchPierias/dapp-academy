import React from 'react'
import { SectionList } from '../section-list'
import { Duration } from '../duration'

export const Achievements = (props) => <SectionList title={'Achievements'} items={props.achievements} renderItem={AchievementItem} />

const AchievementItem = (props) => (
  <div className='cell'>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 600 }}>{props.title}</div>
      <Duration startTime={props.startTime} endTime={props.endTime} />
    </div>
    <div className={'description cell'}>{props.description}</div>
  </div>
)
