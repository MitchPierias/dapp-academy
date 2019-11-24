exports.mockName = 'Mitch Pierias'

exports.mockLocation = {
  city: 'Brisbane',
  country: 'Australia',
}

exports.mockOccupationQuery = {
  input: {
    id: 0,
    role: 'Software Engineer',
    description: '',
    link: '',
    organization: 0,
    location: 0,
    startDate: 1572087310,
    endDate: 1572163310,
  },
  result: ['Software Engineer', 'Dominos Pizza Enterprises', '', 0, 'Brisbane, Australia', 1572087310, 1572163310],
}

exports.mockOrganization = {
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
