import React from 'react'
import { Header, Experience, Education, Publications, Skills, Achievements } from '../components'

export const ResumeScene = (props) => (
  <div className='container'>
    <Header {...props} />
    <Experience occupations={props.occupations} />
    <Education education={props.education} />
    <Achievements achievements={props.awards} />
    <Publications publications={props.publications} />
    <Skills
      skills={props.occupations
        .reduce((result, occupation) => [...result, ...occupation.skills], [])
        .map((item) => ({
          label: item,
        }))}
    />
  </div>
)
