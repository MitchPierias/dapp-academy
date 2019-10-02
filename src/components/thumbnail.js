import React from 'react'

export const Thumbnail = (props) => {
  return (
    <div className='thumbnail cell'>
      <img style={{ width: '50px', flex: 'none', marginTop: '12px', marginRight: '12px' }} src={props.src} />
    </div>
  )
}
