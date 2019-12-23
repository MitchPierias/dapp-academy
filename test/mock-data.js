exports.mockName = 'Mitch Pierias'

exports.mockLocation = {
  city: 'Brisbane',
  country: 'Australia',
}

exports.ROLE_TYPE = [
  'Professional',
  'Education',
  'Award',
  'Community',
  'Publication'
]

exports.mockOccupationQuery = {
  input: {
    id: 0,
    role: 'Associate Software Engineer',
    description: '',
    entity: 0,
    location: 0,
    startDate: 1572087310,
    endDate: 1572163310,
  },
  result: [this.ROLE_TYPE.indexOf('Professional'), 'Associate Software Engineer', 'Dominos Pizza Enterprises', 'http://www.logotypes101.com/logos/685/E9C962994FA4A42D91A2A110B4FC8F84/dominospizza.png', 'Description', 'Brisbane, Australia', 1568278800, 0],
}

exports.mockEducationQuery = {
  input: {
    id: 0,
    role: 'Computational Neuroscience',
    description: '',
    entity: 1,
    location: 0,
    startDate: 1572087310,
    endDate: 1572163310,
  },
  result: [this.ROLE_TYPE.indexOf('Education'), 'Computational Neuroscience', 'University of Washington', 'https://media.licdn.com/dms/image/C4D0BAQEMmhF9TqUCgA/company-logo_400_400/0?e=1577923200&v=beta&t=dSv-VAvSHUGA3fQOH7MLiQSIdY2P4_BUdt2nDHmL-zw', '', 'Brisbane, Australia', 1416060000, 1421330400],
}

exports.mockEntity = {
  id: 0,
  name: 'Dominos Pizza Enterprises',
  image: '',
  link: 'https://mitch.pierias.com',
}

exports.mockSkills = ['ReactJS', 'Solidity', 'Truffle', 'IPFS', 'Ethereum', 'Automation', 'Deployment']

exports.mockLink = [
  {
    label: 'GitHub',
    url: 'https://github.com/MitchPierias',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mitch-pierias/',
  },
]

exports.mockEntityResponse = ['Dominos Pizza Enterprises', 'thumb']
