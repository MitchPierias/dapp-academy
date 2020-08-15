import React from 'react'
import {
  Header, SkillList, SectionList, RowItem
} from '../components'

export const ResumeScene = (props) => (
  <div className='container'>
    <Header name={props.fullName} profession={props.profession} location={props.location} links={props.links} />
    <SectionList title={'Experience'} items={props.occupations} renderItem={OccupationItem} />
    <SectionList title={'Education'} items={props.education} renderItem={EducationItem} />
    <SectionList title={'Achievements'} items={props.awards} renderItem={AchievementItem} />
    <SectionList title={'Community'} items={props.community} renderItem={CommunityItem} />
    <SectionList title={'Publications'} items={groupByKey(props.publications, 'organization')} renderItem={PublicationItem} />
    <SkillList skills={props.occupations.reduce((result, occupation) => [...result, ...occupation.skills], [])} />
  </div>
)

export const OccupationItem = (props) => (
  <RowItem thumb={props.thumb} title={props.role} subtitle={props.organization} description={getSkillText(props.skills)} location={props.location} startTime={props.startTime} endTime={props.endTime} />
)

const getSkillText = (skills) => ('string' === typeof skills ? skills : skills instanceof Array ? skills.join(' • ') : null)

const groupByKey = (arr, key) =>
  arr.reduce((memo, publication) => {
    const prevIndex = memo.length - 1
    if (prevIndex >= 0 && memo[prevIndex][key] === publication[key]) {
      memo[prevIndex].data.push(publication)
      memo[prevIndex].endTime = publication.endTime
    } else {
      memo.push({ [key]: publication[key], data: [publication], endTime: publication.timePublished })
    }
    return memo
  }, [])

const CommunityItem = (props) => (
  <RowItem title={props.role} subtitle={props.organization} description={props.description} startTime={props.startTime} endTime={props.endTime} />
)

const PublicationItem = (props) => (
  <RowItem title={props.organization} description={props.data.map(pub => pub.role)} endTime={props.endTime} />
)

const AchievementItem = (props) => (
  <RowItem title={props.role} description={props.description} startTime={props.startTime} endTime={props.endTime} />
)

const EducationItem = (props) => (
  <RowItem thumb={props.thumb} title={props.role} subtitle={props.organization} location={props.location} startTime={props.startTime} endTime={props.endTime} />
)

