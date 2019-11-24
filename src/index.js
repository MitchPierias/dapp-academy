import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// Redux
import { DataProvider } from './store/index'
import { Drizzle } from 'drizzle'
// Scenes
import { ResumeScene } from './scenes'
import ResumeAbi from './contracts/Resume.json'

const options = {
  contracts: [ResumeAbi],
  web3: {
    fallback: {
      type: 'ws',
      url: `ws://127.0.0.1:9545`,
    },
  },
}
const drizzle = new Drizzle(options)

const App = () => {
  const { Resume } = drizzle.contracts
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState()
  const [occupations, setOccupations] = useState([])
  const [count, setCount] = useState()
  const [location, setLocation] = useState()

  useEffect(() =>
    drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState()
      if (drizzleState.drizzleStatus.initialized) {
        setLoading(false)
      }
    }),
  )

  useEffect(() => {
    if (!loading) {
      Resume.methods
        .getName()
        .call()
        .then(setName)
      Resume.methods
        .countOccupations()
        .call()
        .then(setCount)
      Resume.methods
        .getLocation()
        .call()
        .then(setLocation)
    }
  }, [loading])

  useEffect(() => {
    const tmp = [...occupations]
    for (let idx = occupations.length; idx <= count; idx++) {
      Resume.methods
        .getOccupation(idx)
        .call()
        .then((tuple) => {
          tmp.push({
            role: tuple[0],
            organization: tuple[1],
            thumb: tuple[2],
            location: tuple[4],
            skills: ['React'],
          })

          if (tmp.length >= count) {
            setOccupations(tmp)
            console.log(tmp)
          }
        })
        .catch(console.log)
    }
  }, [count])

  return (
    <DataProvider drizzle={drizzle}>
      <ResumeScene
        fullName={name ? name : 'Loading...'}
        profession={occupations && occupations.length > 0 ? occupations[0].role : 'Loading...'}
        location={!location ? 'Loading...' : location}
        occupations={occupations}
        education={[
          {
            organization: 'Treehouse',
            thumb:
              'https://media.licdn.com/dms/image/C560BAQG1ElgY2zA89g/company-logo_400_400/0?e=1577923200&v=beta&t=5j6X95R11ho1zemSVtvAHgnO-OyHw4et7y4Nl8mqKNk',
            field: 'Full Stack Javascript Developer',
            skills: ['ReactJS', 'MongoDB', 'Express', 'JavaScript', 'HTML', 'CSS'],
            startTime: 1516024800000,
            endTime: 1547560800000,
          },
          {
            organization: 'University of Washington',
            thumb:
              'https://media.licdn.com/dms/image/C4D0BAQEMmhF9TqUCgA/company-logo_400_400/0?e=1577923200&v=beta&t=dSv-VAvSHUGA3fQOH7MLiQSIdY2P4_BUdt2nDHmL-zw',
            field: 'Computational Neuroscience',
            skills: ['Python', 'MatLab'],
            startTime: 1416060000000,
            endTime: 1421330400000,
          },
          {
            organization: 'Bond University Entrepreneurship',
            thumb:
              'https://media.licdn.com/dms/image/C4E0BAQFWX-QgGvR9qw/company-logo_400_400/0?e=1577923200&v=beta&t=-4CyQl7nFmbumuPwQdtuhECWiuaYWcc1RnzuNoN7cIY',
            field: 'Business Accelerator',
            level: 'Participant',
            skills: ['Entrepreneurship'],
            startTime: 1516024800000,
            endTime: 1547560800000,
          },
          {
            organization: 'Bond University',
            thumb:
              'https://media.licdn.com/dms/image/C4E0BAQFWX-QgGvR9qw/company-logo_400_400/0?e=1577923200&v=beta&t=-4CyQl7nFmbumuPwQdtuhECWiuaYWcc1RnzuNoN7cIY',
            field: 'Film & Television',
            level: 'Bachelor',
            skills: ['Media'],
            startTime: 1516024800000,
            endTime: 1547560800000,
          },
        ]}
        publications={[
          {
            publisher: 'Coinmonks',
            title: 'Advanced EOS Series — Part 9 — Payable Actions',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-9-payable-actions-42bf878bee36',
            timePublished: 0,
            skills: ['EOSJS'],
          },
          {
            publisher: 'Noteworthy',
            title: 'The Complete Electron Pipeline — Development to Rollout',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa',
            timePublished: 0,
            skills: ['JavaScript', 'Electron', 'ReactJS'],
          },
          {
            publisher: 'Coinmonks',
            title: 'Advanced EOS Series — Part 6 — Contract-to-Contract Communication',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa',
            timePublished: 0,
            skills: ['EOSJS'],
          },
          {
            publisher: 'Coinmonks',
            title: 'Advanced EOS Series — Part 5 — One-to-many Relationships',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-5-one-to-many-relationships-42d2e075e05d',
            timePublished: 1547128800000,
            skills: ['EOSJS'],
          },
          {
            publisher: 'Coinmonks',
            title: 'Advanced EOS Series — Part 4 — Table Uniqueness',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-4-table-uniqueness-835843a207fc',
            timePublished: 1545573600000,
            skills: ['EOSJS'],
          },
          {
            publisher: 'Coinmonks',
            title: 'Advanced EOS Series — Part 3 — Secondary Indexes',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-3-secondary-indexes-1798f339cbb8',
            timePublished: 1544968800000,
            skills: ['EOSJS'],
          },
          {
            publisher: 'Noteworthy',
            title: 'The Dream Team — React with Electron',
            link: 'https://blog.usejournal.com/the-dream-team-react-with-electron-c808ecb5b55e',
            timePublished: 1544709600000,
            skills: ['JavaScript', 'Electron', 'ReactJS'],
          },
          {
            publisher: 'Coinmonks',
            title: 'Advanced EOS Series — Part 2 — Singletons',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-2-singletons-9e903772f71c',
            timePublished: 1544104800000,
            skills: ['EOSJS'],
          },
          {
            publisher: 'Coinmonks',
            title: 'Advanced EOS Series — Part 1 — Cryptographic Hashes',
            link: 'https://medium.com/coinmonks/advanced-eos-series-part-1-cryptographic-hashes-a251a8d371b8',
            timePublished: 1543672800000,
            skills: ['EOSJS'],
          },
        ]}
        awards={[
          {
            title: 'Startup Catalyst Alumni',
            description: 'Silicon Valley Youth Mission by Startup Catalyst Inaugural Youth Mission Member',
            startTime: 1414764000000,
            endTime: 1414764000000,
          },
          {
            title: 'Bond University Entrepreneurship Business Accelerator',
            description: 'Attended as Founder of Sprout in Bond Universities inaugural Accelerator program',
            startTime: 1412085600000,
            endTime: 1413381600000,
          },
          {
            title: 'Global Startup Weekend San Francisco',
            description: 'Awarded second place for VisaTrak, an application to help travellers track and manage their visa applications.',
            startTime: 1414764000000,
            endTime: 1414764000000,
          },
        ]}
      />
    </DataProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
