import React from 'react'
import { SectionList } from "../components/section-list";
import { RowItem } from "../components/row-item";
import { Header, Skills } from '../components'

export const ResumeScene = (props) => (
  <div className='container'>
    <Header {...props} />
    <SectionList
      title={'Experience'}
      items={
        (props.filters &&
          props.occupations.filter((occupation) => occupation.skills.find((skill) => props.filters.find((filter) => filter === skill)))) ||
        props.occupations
      }
      renderItem={OccupationItem}
    />
    <SectionList title={'Education'} items={props.education} renderItem={EducationItem} />
    <SectionList title={'Achievements'} items={props.awards} renderItem={AchievementItem} />
    <SectionList title={'Publications'} items={groupWithKey(props.publications, 'publisher')} renderItem={PublicationItem} />
    <Skills
      skills={props.occupations
        .reduce((result, occupation) => [...result, ...occupation.skills], [])
        .map((item) => ({
          label: item,
        }))}
    />
  </div>
)

export const OccupationItem = (props) => (
  <RowItem thumb={props.thumb} title={props.role} subtitle={props.organization} description={getSkillText(props.skills)} location={props.location} startTime={props.startTime} endTime={props.endTime} />
)

const getSkillText = (skills) => ('string' === typeof skills ? skills : skills instanceof Array ? skills.join(' • ') : null)

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
  <RowItem title={props.publisher} subtitle={'iterate publications and collect `title`'} startTime={props.startTime} endTime={props.endTime}/>
)

const AchievementItem = (props) => (
  <RowItem title={props.title} description={props.description} startTime={props.startTime} endTime={props.endTime}/>
)

const EducationItem = (props) => (
  <RowItem thumb={props.thumb} title={props.field} subtitle={props.organization} location={props.location} startTime={props.startTime} endTime={props.endTime}/>
)

