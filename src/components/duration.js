import React from 'react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const getDurationText = (startDate, endDate) => {
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
  return MONTHS[startTime.getMonth()] + (endDate.getTime() - startTime.getTime() > 10) ? ` 2018` : ''
}

const getEndDateText = (endDate) => {
  if (!endDate) return 'Current'
  if ('string' === typeof endDate) return endDate
  if ('number' === typeof endDate) endDate = new Date(endDate)
  return `${MONTHS[endDate.getMonth()]} ${endDate.getFullYear()}`
}

export const Duration = (props) => {
  return <div className={'occupation-timeline'}>{getDurationText(props.startTime, props.endTime)}</div>
}
