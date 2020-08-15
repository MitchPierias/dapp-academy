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
      'https://github-doc-sources.s3-ap-southeast-2.amazonaws.com/afe997889cc1864ce3e538594a3f474ca32ef47e071f3fd4e3d67fd0b3661515.jpg',
    )
    await contract.addEntity(
      'Credit Union Australia',
      'https://github-doc-sources.s3-ap-southeast-2.amazonaws.com/cc71991f59c66e89c47c90393971d1e4b05b99078adade985b5da78d57059747.jpg',
    )
    await contract.addEntity('Lamington', 'https://github-doc-sources.s3-ap-southeast-2.amazonaws.com/66661a2c046cdc2ab8a029587e1872e92af846b1d60285b164d5b55fa3347602.jpg')
    await contract.addEntity(
      'Agora',
      'https://github-doc-sources.s3-ap-southeast-2.amazonaws.com/f7070d57bbe5496e29249421e91572f46ac4c2b62953b7ea046fa3707b9e6b2a.jpg',
    )
    await contract.addEntity(
      'University of Washington',
      'https://github-doc-sources.s3-ap-southeast-2.amazonaws.com/9e77f325c3969a292f8768c8a8e070b0379523f213a46d4e42198439c636f569.jpg',
    )
    await contract.addEntity(
      'Treehouse',
      'https://github-doc-sources.s3-ap-southeast-2.amazonaws.com/dc12c22f0cab5fd6943c2870d9b8eaf55902c02ced0519a66cdb96bc47ac698a.jpg',
    )
    await contract.addEntity(
      'Bond University',
      'https://github-doc-sources.s3-ap-southeast-2.amazonaws.com/c8e91df8967c41080b7fdd21a13e005bf89dfbc5147457096183792cf539483a.jpg',
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
    // await contract.addOccupation('Blockchain Developer', 3, 'Description', 3, 0, 0, 'EOSIO, TypeScript, React, IPFS')
    await contract.addOccupation('Full Stack Blockchain Developer', 3, 'Description', 0, 0, 0, 'EOSIO, TypeScript, React, IPFS')

    await contract.addEducation('Full Stack Javascript Developer', 5, '', 0, 1516024800, 1547560800)
    await contract.addEducation('Computational Neuroscience', 4, '', 0, 1416060000, 1421330400)
    await contract.addEducation('Business Accelerator', 6, '', 2, 1516024800, 1547560800)
    await contract.addEducation('Film & Television', 6, '', 2, 1516024800, 1547560800)

    await contract.addPublication('Advanced EOS Series — Part 9 — Payable Actions', 7, 'https://medium.com/coinmonks/advanced-eos-series-part-9-payable-actions-42bf878bee36', 0)
    await contract.addPublication('The Complete Electron Pipeline — Development to Rollout', 8, 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa', 0)
    await contract.addPublication('Advanced EOS Series — Part 6 — Contract-to-Contract Communication', 7, 'https://medium.com/coinmonks/advanced-eos-series-part-6-contract-to-contract-communication-ab352a8b60aa', 0)
    await contract.addPublication('Advanced EOS Series — Part 5 — One-to-many Relationships', 7, 'https://medium.com/coinmonks/advanced-eos-series-part-5-one-to-many-relationships-42d2e075e05d', 1547128800)
    await contract.addPublication('Advanced EOS Series — Part 4 — Table Uniqueness', 7, 'https://medium.com/coinmonks/advanced-eos-series-part-4-table-uniqueness-835843a207fc', 1545573600)
    await contract.addPublication('Advanced EOS Series — Part 3 — Secondary Indexes', 7, 'https://medium.com/coinmonks/advanced-eos-series-part-3-secondary-indexes-1798f339cbb8', 1544968800)
    await contract.addPublication('The Dream Team — React with Electron', 8, 'https://blog.usejournal.com/the-dream-team-react-with-electron-c808ecb5b55e', 1544709600)
    await contract.addPublication('Advanced EOS Series — Part 2 — Singletons', 7, 'https://medium.com/coinmonks/advanced-eos-series-part-2-singletons-9e903772f71c', 1544104800)
    await contract.addPublication('Advanced EOS Series — Part 1 — Cryptographic Hashes', 7, 'https://medium.com/coinmonks/advanced-eos-series-part-1-cryptographic-hashes-a251a8d371b8', 1543672800)

    await contract.addCommunity('Blockchain Educator', 9, '', 1568240820, 1576993378)

    await contract.addAward('Startup Catalyst Alumni', 10, 'Silicon Valley Youth Mission by Startup Catalyst Inaugural Youth Mission Member', 1414764000)
    await contract.addAward('Bond University Entrepreneurship Business Accelerator', 6, 'Attended as Founder of Sprout in Bond Universities inaugural Accelerator program', 1413381600)
    await contract.addAward('Global Startup Weekend San Francisco', 11, 'Awarded second place for VisaTrak, an application to help travellers track and manage their visa applications.', 1414764000)
  }
}
