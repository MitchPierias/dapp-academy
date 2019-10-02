const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DATE_SEPARATOR = ' - '

export const getDurationText = (startDate, endDate) => [MONTHS[startDate.getMonth()], getEndDateText(endDate)].join(DATE_SEPARATOR)

export const getEndDateText = (endDate) =>
  `${'string' === typeof endDate ? endDate : MONTHS[endDate.getMonth()]} ${'string' === typeof endDate ? '' : endDate.getFullYear()}`
