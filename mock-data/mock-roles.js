const { mockEntityInput } = require('./mock-entity')
const { mockLocation, mockLocationInput } = require('./mock-location')
const { mockSkills, mockSkillsEmpty } = require('./mock-skills')

const RoleType = [
  'Occupation',
  'Education',
  'Award',
  'Community',
  'Publication'
]

exports.mockOccupationInput = {
  index: 0,
  role: 'Blockchain Developer',
  description: 'Sample description',
  entity: mockEntityInput.index,
  location: mockLocationInput.index,
  startDate: 1572087310,
  endDate: 1572163310,
  skills: 'ReactJS, Solidity, IPFS'
}

exports.mockOccupation = [RoleType.indexOf('Occupation'), 'Blockchain Developer', mockEntityInput.name, mockEntityInput.image, 'Sample description', mockLocation, 1572087310, 1572163310, mockSkills]

exports.mockEducationInput = {
  index: 1,
  role: 'Computational Neuroscience',
  description: 'Sample description',
  entity: mockEntityInput.index,
  location: mockLocationInput.index,
  startDate: 1416060000,
  endDate: 1421330400,
}

exports.mockEducation = [RoleType.indexOf('Education'), 'Computational Neuroscience', mockEntityInput.name, mockEntityInput.image, 'Sample description', mockLocation, 1416060000, 1421330400, mockSkillsEmpty]

exports.mockPublicationInput = {
  index: 2,
  title: 'Example publication title',
  link: 'https://publisher.com/article',
  entity: mockEntityInput.index,
  endDate: 0,
}

exports.mockPublication = [RoleType.indexOf('Publication'), 'Example publication title', mockEntityInput.name, mockEntityInput.image, 'https://publisher.com/article', mockLocation, 0, 0, mockSkillsEmpty]

exports.mockCommunityInput = {
  index: 3,
  title: 'Example open source',
  description: 'Example description',
  entity: mockEntityInput.index,
  startDate: 0,
  endDate: 0,
}

exports.mockCommunity = [RoleType.indexOf('Community'), 'Example open source', mockEntityInput.name, mockEntityInput.image, 'Example description', mockLocation, 0, 0, mockSkillsEmpty]

exports.mockAwardInput = {
  index: 4,
  title: 'Example award title',
  description: 'Example description',
  entity: mockEntityInput.index,
  endDate: 1414764000
}

exports.mockAward = [RoleType.indexOf('Award'), 'Example award title', mockEntityInput.name, mockEntityInput.image, 'Example description', mockLocation, 0, 1414764000, mockSkillsEmpty]