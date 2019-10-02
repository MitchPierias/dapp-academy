import React from 'react'
import { Header, Experience, Education, Publications, Skills, Awards } from '../components'

export const ResumeScene = (props) => (
  <div className='container'>
    <Header {...props} />
    <Experience occupations={props.occupations} />
    <Education education={props.education} />
    <Awards awards={props.awards} />
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
