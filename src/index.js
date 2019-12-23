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
  const [details, setDetails] = useState({})
  const [items, setItems] = useState([])
  const [count, setCount] = useState()

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
        .getDetails()
        .call()
        .then((tuple) => setDetails((prevState) => ({
          name: tuple[0] || prevState.name,
          location: tuple[1] || prevState.location,
        })))
      Resume.methods
        .countOccupations()
        .call()
        .then(setCount)
    }
  }, [loading])

  useEffect(() => {
    const tmp = [...items]
    for (let idx = items.length; idx <= count; idx++) {
      Resume.methods
        .getOccupation(idx)
        .call()
        .then((tuple) => {
          tmp.push({
            type: Number(tuple[0]),
            role: tuple[1],
            organization: tuple[2],
            thumb: tuple[3],
            description: tuple[4],
            location: tuple[5],
            startTime: Number(tuple[6]) * 1000,
            endTime: Number(tuple[7]) * 1000,
            skills: ['React'],
          })

          if (tmp.length >= count) {
            setItems(tmp)
            console.log(tmp)
          }
        })
        .catch(console.log)
    }
  }, [count])

  return (
    <DataProvider drizzle={drizzle}>
      <ResumeScene
        fullName={details.name ? details.name : 'Loading...'}
        profession={items && items.length > 0 ? items[0].role : 'Loading...'}
        location={!details.location ? 'Loading...' : details.location}
        occupations={items.filter(occ => occ.type === 0)}
        education={items.filter(occ => occ.type === 1).map(occ => ({
          organization: occ.organization,
          thumb: occ.thumb,
          field: occ.role,
          startTime: occ.startTime,
          endTime: occ.endTime
        }))}
        publications={
          items.filter(occ => occ.type === 4).map(occ => ({
            publisher: occ.organization,
            title: occ.role,
            endTime: occ.endTime,
            skills: ['TypeScript']
          }))}
        community={
          items.filter(occ => occ.type === 3).map(occ => (
            {
              title: occ.role,
              organization: occ.organization,
              startTime: occ.startTime,
              endTime: occ.endTime
            }))}
        awards={items.filter(occ => occ.type === 2).map(occ => (
          {
            title: occ.role,
            description: occ.description,
            endTime: occ.endTime
          }))}
      />
    </DataProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
