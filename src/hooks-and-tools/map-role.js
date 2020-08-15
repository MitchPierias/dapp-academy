/**
 * De-structures tuple array into a
 * role object
 */
const tupleToRole = (tuple) => ({
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

export const reduceRoles = (allRoles, role) => {
  // Escape if role undefined
  if (!role) return allRoles;
  // Restructure role if tuple
  role = tupleToRole(role)
  const { type } = role;
  // Add role to type collection
  allRoles[type] = [...(allRoles[type] || []), role]
  return allRoles;
}