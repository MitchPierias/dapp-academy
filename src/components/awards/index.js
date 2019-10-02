import React from 'react'
import { SectionList } from '../section-list'
import { getEndDateText } from '../../common/date-text'

const NOW = +new Date()

export const Awards = (props) => <SectionList title={'Awards'} items={props.awards} renderItem={AwardItem} />

const AwardItem = (props) => (
  <div className='cell'>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 600 }}>{props.title}</div>
      <div style={{ fontSize: '0.9rem' }}>{props.endDate && getEndDateText(new Date(props.endDate || NOW))}</div>
    </div>
    <div className={'description cell'}>{props.description}</div>
  </div>
)
