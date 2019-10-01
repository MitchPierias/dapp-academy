import React from 'react'
import ReactDOM from 'react-dom'
// Redux
import { DataProvider } from './store/index'
// Scenes
import { ResumeScene } from './scenes'

const App = (
  <DataProvider contractAddress={''}>
    <ResumeScene
      fullName={'Mitch Pierias'}
      profession={'Software Engineer'}
      location={'Brisbane, Australia'}
      occupations={[
        {
          role: 'Associate Software Engineer',
          organization: 'Dominos Pizza Enterprises Limited',
          thumb: 'http://www.logotypes101.com/logos/685/E9C962994FA4A42D91A2A110B4FC8F84/dominospizza.png',
          location: 'Brisbane, Australia',
          skills: ['ReactNative', 'ReactJS', 'TypeScript'],
        },
        {
          role: 'Full Stack Developer',
          organization: 'Credit Union Australia',
          thumb: 'https://media.glassdoor.com/sql/624191/credit-union-australia-squarelogo-1547422687793.png',
          location: 'Brisbane, Australia',
          skills: ['ReactJS', 'TypeScript', 'Serverless'],
        },
      ]}
    />
  </DataProvider>
)

ReactDOM.render(App, document.getElementById('root'))
