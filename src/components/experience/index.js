import React from 'react'
import { SectionList } from '../section-list'
import { Occupation } from './occupation'

export const Experience = (props) => (
  <SectionList
    title={'Experience'}
    items={props.occupations.filter((occupation) => occupation.skills.find((skill) => props.filters.find((filter) => filter === skill)))}
    renderItem={Occupation}
  />
)
