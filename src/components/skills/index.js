import React from 'react'
import { SectionList } from '../section-list'

export const Skills = (props) => (
  <div className={'skills'}>
    {props.skills
      .reduce(collectSimilar, [])
      .sort(alphabetically)
      .map(SkillItem)}
  </div>
)

const collectSimilar = (newCollection, item) => {
  const index = newCollection.findIndex((skill) => skill.label === item.label)
  if (index < 0) {
    newCollection.push({ ...item, count: 0 })
  } else {
    newCollection[index] = { ...newCollection[index], count: newCollection[index].count + 1 }
  }
  return newCollection
}

const alphabetically = (a, b) => {
  if (a.label < b.label) return -1
  if (a.label > b.label) return 1
  return 0
}

const SkillItem = (data) => (
  <div className={'skill-item'}>
    <div>{data.label}</div>
    {data.count > 0 && <div className='skill-item-count'>{data.count}x</div>}
  </div>
)
