import React from 'react'
import { SectionList } from '../section-list'
import { Duration } from '../duration'

export const Publications = (props) => (
  <SectionList title={'Publications'} items={groupWithKey(props.publications, 'publisher')} renderItem={PublicationItem} />
)

const mapCollection = (collection, data) => ({
  publisher: collection.publisher,
  data: [...collection.data, ...data],
})

/**
 * Group items in array by a specified `key` value.
 * @param {*} arr
 * @param {*} key
 */
const groupWithKey = (arr, key) =>
  arr.reduce((memo, publication) => {
    const prevIndex = memo.length - 1
    if (prevIndex >= 0 && memo[prevIndex][key] === publication[key]) {
      memo[prevIndex].data.push(publication)
      memo[prevIndex].startTime = publication.timePublished
    } else {
      memo.push({ [key]: publication[key], data: [publication], endTime: publication.timePublished })
    }
    return memo
  }, [])

const PublicationItem = (props) => (
  <div className='cell'>
    <div style={{ display: 'flex', flexDirection: 'flex-end' }}>
      <div className='title' style={{ flex: 1 }}>
        {props.publisher}
      </div>
      <Duration startTime={props.startTime} endTime={props.endTime} />
    </div>
    {props.data.map((publication) => (
      <a href={publication.link}>
        <div className='subtitle cell'>{publication.title}</div>
      </a>
    ))}
  </div>
)
