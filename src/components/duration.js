import React from 'react'

const NOW = +new Date()
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DATE_SEPARATOR = ' - '

export const getDurationText = (startDate, endDate) => [MONTHS[startDate.getMonth()], getEndDateText(endDate)].join(DATE_SEPARATOR)

export const getEndDateText = (endDate) =>
  'string' === typeof endDate
    ? endDate
    : 'number' === typeof endDate
    ? `${MONTHS[endDate.getMonth()]} ${'string' === typeof endDate ? endDate : endDate.getFullYear()}`
    : 'Current'

export const Duration = (props) => {
  return <div className={'occupation-timeline'}>{getDurationText(new Date(props.startTime || NOW), new Date(props.endTime))}</div>
}
