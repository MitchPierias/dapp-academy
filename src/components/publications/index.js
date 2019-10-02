import React from 'react'
import { SectionList } from '../section-list'

export const Publications = (props) => <SectionList title={'Publications'} items={props.publications} renderItem={PublicationItem} />

const PublicationItem = (props) => <div className='cell'>{props.title}</div>
