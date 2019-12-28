import React from 'react'

export const Thumbnail = (props) => {

  if (!props.src) return null

  return (
    <div className='thumbnail'>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}
