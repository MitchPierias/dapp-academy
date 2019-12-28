import React from 'react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const getFullText = (startDate, endDate) => {
  const startDateText = getStartDateText(startDate, endDate)
  const endDateText = getEndDateText(endDate)
  if (startDateText && endDateText) {
    return `${startDateText} - ${endDateText}`
  } else {
    return endDateText
  }
}

const getStartDateText = (startTime, endDate = 0) => {
  if (!startTime) return null
  if ('string' === typeof startTime) return startTime
  if ('number' === typeof startTime) startTime = new Date(startTime)
  if ('number' === typeof endDate) endDate = new Date(endDate)
  return endDate.getFullYear() - startTime.getFullYear() > 0 ? `${MONTHS[startTime.getMonth()]} ${startTime.getFullYear()}` : MONTHS[startTime.getMonth()]
}

const getEndDateText = (endDate) => {
  if (!endDate) return 'Present'
  if ('string' === typeof endDate) return endDate
  if ('number' === typeof endDate) endDate = new Date(endDate)
  return `${MONTHS[endDate.getMonth()]} ${endDate.getFullYear()}`
}

const getShortText = (startDate, endDate = 0) => {
  const timespan = endDate - startDate

  if (timespan <= 0 || !startDate) {
    return 'Present'
  }

  if (timespan <= 3600000) {
    const hours = Math.floor(timespan / 3600000)
    return `${hours} hour${hours > 1 ? 's' : ''}`
  }

  if (timespan <= 86400000) {
    const days = Math.floor(timespan / 86400000)
    return `${days} day${days > 1 ? 's' : ''}`
  }

  const months = Math.floor(timespan / (86400000 * 30))
  return `${months} month${months > 1 ? 's' : ''}`
}

export const Duration = (props) => {
  return (<div className={'timeline'}>
    <span className={'web'}>{getFullText(props.startTime, props.endTime)}</span>
    <span className={'mobile'}>{getShortText(props.startTime, props.endTime)}</span>
  </div>)
}
