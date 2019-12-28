export const tupleToRole = (tuple) => ({
  type: Number(tuple[0]),
  role: tuple[1],
  organization: tuple[2],
  thumb: tuple[3],
  description: tuple[4],
  location: tuple[5],
  startTime: Number(tuple[6]) * 1000,
  endTime: Number(tuple[7]) * 1000,
  skills: (tuple[8] || '').split(/\s?\,\s+/gi),
})