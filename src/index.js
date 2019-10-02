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
          skills: ['ReactNative', 'ReactJS', 'TypeScript', 'GraphQL', 'Lerna'],
        },
        {
          role: 'Associate Software Developer',
          organization: 'Dominos Pizza Enterprises Limited',
          thumb: 'http://www.logotypes101.com/logos/685/E9C962994FA4A42D91A2A110B4FC8F84/dominospizza.png',
          location: 'Brisbane, Australia',
          skills: ['ReactNative', 'ReactJS', 'TypeScript', 'Lerna'],
        },
        {
          role: 'Full Stack Developer',
          organization: 'Credit Union Australia',
          thumb: 'https://media.glassdoor.com/sql/624191/credit-union-australia-squarelogo-1547422687793.png',
          location: 'Brisbane, Australia',
          skills: ['ReactJS', 'TypeScript', 'Serverless', 'GraphQL'],
        },
        {
          role: 'Software Engineer',
          organization: 'Lamington',
          thumb: './lamington.jpg',
          location: 'Sydney, Australia',
          type: 'Open Source',
          skills: ['TypeScript', 'Docker', 'EOSJS', 'Lerna'],
        },
        {
          role: 'Blockchain Developer',
          organization: 'Syndicate',
          url: 'https://syndicate.games/',
          thumb:
            'https://media.licdn.com/dms/image/C560BAQF5AkMuBYfpuw/company-logo_400_400/0?e=1577923200&v=beta&t=ZdFQty5GP7qj3oWqL0d8V_Za09wWyr6DpAk4HgvVFUY',
          location: 'Valletta, Malta',
          type: 'Remote',
          skills: ['Solidity', 'IPFS', 'ReactJS', 'S3', 'CloudFront'],
        },
        {
          role: 'Software Developer',
          organization: 'Agora',
          url: 'https://agora.pierias.com/',
          thumb:
            'https://media.licdn.com/dms/image/C560BAQEUCnmU6boUiw/company-logo_400_400/0?e=1577923200&v=beta&t=eKxzQjspkxtEzYXX-Ma7v1gHCfLII5AzKJgIH8E1XOc',
          location: 'Gold Coast, Australia',
          skills: ['ReactJS', 'Electron', 'NodeJS', 'S3', 'CloudFront'],
        },
      ]}
      education={[
        {
          organization: 'Treehouse',
          thumb:
            'https://media.licdn.com/dms/image/C560BAQG1ElgY2zA89g/company-logo_400_400/0?e=1577923200&v=beta&t=5j6X95R11ho1zemSVtvAHgnO-OyHw4et7y4Nl8mqKNk',
          field: 'Full Stack Javascript Developer',
          startDate: 1516024800000,
          endDate: 1547560800000,
        },
        {
          organization: 'University of Washington',
          thumb:
            'https://media.licdn.com/dms/image/C4D0BAQEMmhF9TqUCgA/company-logo_400_400/0?e=1577923200&v=beta&t=dSv-VAvSHUGA3fQOH7MLiQSIdY2P4_BUdt2nDHmL-zw',
          field: 'Computational Neuroscience',
          startDate: 1416060000000,
          endDate: 1421330400000,
        },
        {
          organization: 'Bond University Entrepreneurship',
          thumb:
            'https://media.licdn.com/dms/image/C4E0BAQFWX-QgGvR9qw/company-logo_400_400/0?e=1577923200&v=beta&t=-4CyQl7nFmbumuPwQdtuhECWiuaYWcc1RnzuNoN7cIY',
          field: 'Business Accelerator',
          level: 'Attendance',
          startDate: 1516024800000,
          endDate: 1547560800000,
        },
        {
          organization: 'Bond University',
          thumb:
            'https://media.licdn.com/dms/image/C4E0BAQFWX-QgGvR9qw/company-logo_400_400/0?e=1577923200&v=beta&t=-4CyQl7nFmbumuPwQdtuhECWiuaYWcc1RnzuNoN7cIY',
          field: 'Film & Television',
          level: 'Bachelor',
          startDate: 1516024800000,
          endDate: 1547560800000,
        },
      ]}
      publications={[
        {
          publisher: 'Coinmonks',
          title: 'Advanced EOS Series - Part 9 - Payable Actions',
          link: 'https://medium.com/coinmonks/advanced-eos-series-part-9-payable-actions-42bf878bee36',
          timePublished: 0,
        },
        {
          publisher: 'Noteworthy',
          title: 'The Complete Electron Pipeline - Development to Rollout',
          link: 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa',
          timePublished: 0,
        },
        {
          publisher: 'Coinmonks',
          title: 'Advanced EOS Series - Part 6 - Contract-to-Contract Communication',
          link: 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa',
          timePublished: 0,
        },
      ]}
      awards={[
        {
          title: 'Startup Catalyst Alumni',
          description: 'Silicon Valley Youth Mission by Startup Catalyst Inaugural Youth Mission Member',
          startDate: 1414764000000,
          endDate: 1414764000000,
        },
        {
          title: 'Bond University Entrepreneurship Business Accelerator',
          description: 'Invited as Founder of Sprout to participate in the inaugural Bond Universities Accelerator program',
          startDate: 1412085600000,
          endDate: 1413381600000,
        },
        {
          title: 'Global Startup Weekend San Francisco',
          description: 'Awarded second place for VisaTrak, an application to help travellers track and manage their visa applications.',
          startDate: 1414764000000,
          endDate: 1414764000000,
        },
      ]}
    />
  </DataProvider>
)

ReactDOM.render(App, document.getElementById('root'))
