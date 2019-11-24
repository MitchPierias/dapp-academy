const Resume = artifacts.require('Resume')

module.exports = async (deployer, environment) => {
  // Deploy the resume contract
  await deployer.deploy(Resume)
  // Populate data when not development
  if (environment !== 'test') {
    const contract = await Resume.deployed()
    await contract.setName('Mitch Pierias')
    await contract.setLocation('Brisbane', 'Australia')
    await contract.addOrganization(
      'Dominos Pizza Enterprises',
      'http://www.logotypes101.com/logos/685/E9C962994FA4A42D91A2A110B4FC8F84/dominospizza.png',
    )
    await contract.addOrganization(
      'Credit Union Australia',
      'https://media.glassdoor.com/sql/624191/credit-union-australia-squarelogo-1547422687793.png',
    )
    await contract.addOrganization('Lamington', './lamington.jpg')
    await contract.addOrganization(
      'Syndicate',
      'https://media.licdn.com/dms/image/C560BAQF5AkMuBYfpuw/company-logo_400_400/0?e=1577923200&v=beta&t=ZdFQty5GP7qj3oWqL0d8V_Za09wWyr6DpAk4HgvVFUY',
    )
    await contract.addOccupation('Associate Software Engineer', 0, '', 0, 0, 0)
    await contract.addOccupation('Associate Software Developer', 0, '', 0, 0, 0)
    await contract.addOccupation('Full Stack Developer', 1, '', 0, 0, 0)
    await contract.addOccupation('Software Engineer', 2, '', 0, 0, 0)
    await contract.addOccupation('Blockchain Developer', 3, '', 0, 0, 0)
  }
}
