import React from 'react'

export const SkillList = (props) => {
  if (props.skills) {
    return <div className='occupation-skills'>{getSkillText(props.skills)}</div>
  }

  return null
}

const getSkillText = (skills) => ('string' === typeof skills ? skills : skills instanceof Array ? skills.join(', ') : null)
