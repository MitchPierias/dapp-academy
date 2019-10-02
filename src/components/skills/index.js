import React from 'react'
import { SectionList } from '../section-list'

export const Skills = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {props.skills.map((skill) => (
      <SkillItem label={skill.label} />
    ))}
  </div>
)

const SkillItem = (data) => <div className={'skill-item'}>{data.label}</div>
