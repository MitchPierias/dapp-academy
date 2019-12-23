/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockSkills, mockOccupationQuery, mockEducationQuery } = require('./mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  const otherAccount = accounts[1]
  const maliciousAccount = accounts[2]
  // Occupation role list
  context('Location', () => {
    // Reset owner
    before(async () => {
      const instance = await Resume.deployed()
      const owner = await instance.getOwner()
      if (owner === ownerAccount) return
      await instance.setOwner(ownerAccount, { from: owner })
    })
    // Listing
    it('should list a new location', () => {
      return Resume.deployed()
        .then((instance) => instance.addLocation('Gold Coast', 'Australia'))
        .then(({ logs }) => assert.equal(logs[0].event, 'LocationListed'))
    })

    it('should get a location at index', async () => {
      const instance = await Resume.deployed()
      const location = await instance.getLocationAtIndex(2);
      assert.equal(location, 'Gold Coast, Australia')
    })
  })
})