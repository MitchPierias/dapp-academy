import React from 'react'
import { Header, Experience, SectionList, Skills } from '../components'

export const ResumeScene = (props) => (
  <div className='container'>
    <Header {...props} />
    <Experience occupations={props.occupations} filters={['ReactNative', 'TypeScript']} />
    <SectionList title={'Publications'} />
    <Skills
      skills={props.occupations
        .reduce((result, occupation) => [...result, ...occupation.skills], [])
        .map((item) => ({
          label: item,
        }))}
    />
  </div>
)
