const Resume = artifacts.require('Resume')

module.exports = async (deployer, environment) => {
  // Deploy the resume contract
  await deployer.deploy(Resume)
  // Populate data when not development
  if (environment === 'development') {
    const contract = await Resume.deployed()
    await contract.setName('Mitch Pierias')
    await contract.setLocation('Brisbane', 'Australia')

    await contract.addLocation('Brisbane', 'Australia')
    await contract.addLocation('Sydney', 'Australia')
    await contract.addLocation('Gold Coast', 'Australia')
    await contract.addLocation('Valetta', 'Malta')

    await contract.addLink('Email', 'mitch@pierias.com')
    await contract.addLink('Phone', '0431 536 911')
    await contract.addLink('LinkedIn', 'https://www.linkedin.com/in/mitch-pierias/')
    await contract.addLink('GitHub', 'https://github.com/MitchPierias')

    await contract.addEntity(
      'Dominos Pizza Enterprises',
      'http://www.logotypes101.com/logos/685/E9C962994FA4A42D91A2A110B4FC8F84/dominospizza.png',
    )
    await contract.addEntity(
      'Credit Union Australia',
      'https://media.glassdoor.com/sql/624191/credit-union-australia-squarelogo-1547422687793.png',
    )
    await contract.addEntity('Lamington', './lamington.jpg')
    await contract.addEntity(
      'Syndicate',
      'https://media.licdn.com/dms/image/C560BAQF5AkMuBYfpuw/company-logo_400_400/0?e=1577923200&v=beta&t=ZdFQty5GP7qj3oWqL0d8V_Za09wWyr6DpAk4HgvVFUY',
    )
    await contract.addEntity(
      'Agora',
      './agora.jpg',
    )
    await contract.addEntity(
      'University of Washington',
      'https://media.licdn.com/dms/image/C4D0BAQEMmhF9TqUCgA/company-logo_400_400/0?e=1577923200&v=beta&t=dSv-VAvSHUGA3fQOH7MLiQSIdY2P4_BUdt2nDHmL-zw',
    )
    await contract.addEntity(
      'Treehouse',
      'https://media.licdn.com/dms/image/C560BAQG1ElgY2zA89g/company-logo_400_400/0?e=1577923200&v=beta&t=5j6X95R11ho1zemSVtvAHgnO-OyHw4et7y4Nl8mqKNk',
    )
    await contract.addEntity(
      'Bond University',
      'https://media.licdn.com/dms/image/C4E0BAQFWX-QgGvR9qw/company-logo_400_400/0?e=1577923200&v=beta&t=-4CyQl7nFmbumuPwQdtuhECWiuaYWcc1RnzuNoN7cIY',
    )
    await contract.addEntity(
      'Coinmonks',
      'thumb',
    )
    await contract.addEntity(
      'Noteworthy',
      'thumb',
    )
    await contract.addEntity('Ivan on Tech Academy', '')
    await contract.addEntity('Startup Catalyst', '')
    await contract.addEntity('Global Startup Weekend', '')

    await contract.addOccupation('Associate Software Engineer', 0, 'Description', 0, 1568278800, 0, 'React, TypeScript')
    await contract.addOccupation('Associate Software Developer', 0, 'Description', 0, 1564995600, 1568278800, 'React Native, TypeScript')
    await contract.addOccupation('Full Stack Developer', 1, 'Description', 0, 1556528400, 1564894800, 'React, Lambda, NodeJS, TypeScript')
    await contract.addOccupation('Software Engineer', 2, 'Description', 1, 1556084578, 0, 'TypeScript')
    await contract.addOccupation('Blockchain Developer', 3, 'Description', 3, 0, 0, 'EOSIO, TypeScript, React, IPFS')
    await contract.addOccupation('Full Stack Blockchain Developer', 4, 'Description', 0, 0, 0, 'EOSIO, TypeScript, React, IPFS')

    await contract.addEducation('Full Stack Javascript Developer', 6, '', 0, 1516024800, 1547560800)
    await contract.addEducation('Computational Neuroscience', 5, '', 0, 1416060000, 1421330400)
    await contract.addEducation('Business Accelerator', 7, '', 2, 1516024800, 1547560800)
    await contract.addEducation('Film & Television', 7, '', 2, 1516024800, 1547560800)

    await contract.addPublication('Advanced EOS Series — Part 9 — Payable Actions', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-9-payable-actions-42bf878bee36', 0)
    await contract.addPublication('The Complete Electron Pipeline — Development to Rollout', 9, 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa', 0)
    await contract.addPublication('Advanced EOS Series — Part 6 — Contract-to-Contract Communication', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa', 0)
    await contract.addPublication('Advanced EOS Series — Part 5 — One-to-many Relationships', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-5-one-to-many-relationships-42d2e075e05d', 1547128800)
    await contract.addPublication('Advanced EOS Series — Part 4 — Table Uniqueness', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-4-table-uniqueness-835843a207fc', 1545573600)
    await contract.addPublication('Advanced EOS Series — Part 3 — Secondary Indexes', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-3-secondary-indexes-1798f339cbb8', 1544968800)
    await contract.addPublication('The Dream Team — React with Electron', 9, 'https://blog.usejournal.com/the-dream-team-react-with-electron-c808ecb5b55e', 1544709600)
    await contract.addPublication('Advanced EOS Series — Part 2 — Singletons', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-2-singletons-9e903772f71c', 1544104800)
    await contract.addPublication('Advanced EOS Series — Part 1 — Cryptographic Hashes', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-1-cryptographic-hashes-a251a8d371b8', 1543672800)

    await contract.addCommunity('Blockchain Educator', 10, '', 1568240820, 1576993378)

    await contract.addAward('Startup Catalyst Alumni', 11, 'Silicon Valley Youth Mission by Startup Catalyst Inaugural Youth Mission Member', 1414764000)
    await contract.addAward('Bond University Entrepreneurship Business Accelerator', 7, 'Attended as Founder of Sprout in Bond Universities inaugural Accelerator program', 1413381600)
    await contract.addAward('Global Startup Weekend San Francisco', 12, 'Awarded second place for VisaTrak, an application to help travellers track and manage their visa applications.', 1414764000)
  }
}
