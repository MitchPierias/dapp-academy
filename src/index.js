import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useResume, tupleToDetails, tupleToLink, reduceRoles } from './hooks-and-tools'
import { ResumeScene } from './scenes/resume-scene'

const App = () => {

  const { loading, methods, state } = useResume()
  const [details, setDetails] = useState({})
  const [roles, setRoles] = useState([])
  const [links, setLinks] = useState([])
  const [count, setCount] = useState()
  const [countLinks, setCountLinks] = useState()

  useEffect(() => {
    if (loading || !methods) return
    methods.getDetails.cacheCall()
    methods.countRoles().call().then(setCount)
    methods.countLinks().call().then(setCountLinks)
  }, [loading, methods])

  useEffect(() => {
    if (!state) return
    const { name, location } = tupleToDetails((state.getDetails[Object.keys(state.getDetails)[0]] || {}).value || [])
    setDetails((prevState) => ({
      name: name || prevState.name,
      location: location || prevState.location,
    }))
    setRoles(Object.values(state.getRole).map(data => data.value).reduce(reduceRoles, []))
    setLinks(Object.values(state.getLink).map(data => data.value).filter(tuple => tuple !== undefined).map(tupleToLink))
  }, [state])

  useEffect(() => {
    if (loading) return
    for (let idx = 0; idx < count; idx++) {
      methods.getRole.cacheCall(idx.toString())
    }
  }, [count])

  useEffect(() => {
    if (loading) return
    for (let idx = 0; idx < countLinks; idx++) {
      methods.getLink.cacheCall(idx.toString())
    }
  }, [countLinks])

  return (
    <ResumeScene
      fullName={details.name ? details.name : 'Loading...'}
      profession={roles && roles.length > 0 ? roles[0].role : 'Loading...'}
      location={!details.location ? 'Loading...' : details.location}
      links={links}
      occupations={roles[0] || []}
      education={(roles[1] || [])}
      publications={(roles[4] || [])}
      community={(roles[3] || [])}
      awards={(roles[2] || [])}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
