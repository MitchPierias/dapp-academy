import React from 'react'

/**
 * 
 * @param {Array<String>} skills Collection of skill strings 
 */
export const SkillList = (props) => (
  <section className={'skills'}>
    {props.skills
      .reduce(collectSimilar, [])
      .sort(alphabetically)
      .map(SkillItem)}
  </section>
)

const collectSimilar = (collection, label) => {
  const existingIndex = collection.findIndex((skill) => skill.label === label)
  const existingCount = (collection[existingIndex] && collection[existingIndex].count || 0)
  if (existingIndex < 0) {
    collection.push({ label, count: 1 })
  } else {
    collection[existingIndex] = { label, count: existingCount + 1 }
  }
  return collection
}

const alphabetically = (a, b) => {
  if (a.label < b.label) return -1
  if (a.label > b.label) return 1
  return 0
}

const SkillItem = (data, idx) => (
  <div key={idx} className={'skill-item'}>
    <div className={'skill-item-label'}>{data.label}</div>
    {data.count > 0 && <div className={'skill-item-count'}>{data.count}x</div>}
  </div>
)
