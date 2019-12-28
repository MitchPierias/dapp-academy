import { useState } from "react";
import { Drizzle } from 'drizzle'
import ResumeAbi from '../contracts/Resume.json'

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

export const useResume = () => {

  const [loading, setLoading] = useState(true)
  const [state, setState] = useState(null)
  const [methods, setMethods] = useState(null)

  drizzle.store.subscribe(() => {
    const drizzleState = drizzle.store.getState()
    if (drizzleState.contracts.Resume.initialized && drizzleState.contracts.Resume.synced) {
      setLoading(false)
      setState(drizzleState.contracts.Resume)
      setMethods(drizzle.contracts.Resume.methods)
    }
  })

  return { loading, methods, state }
}