/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockLocation, mockLocationInput } = require('../mock-data')

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  // Occupation role list
  context('Location', () => {

    let instance;
    // Reset owner
    before(async () => {
      instance = await Resume.new()
      const owner = await instance.getOwner()
      if (owner === ownerAccount) return
      await instance.setOwner(ownerAccount, { from: owner })
    })
    // Listing
    it('should list a new location', async () => {
      const { city, country } = mockLocationInput
      const { logs } = await instance.addLocation(city, country)
      assert.equal(logs[0].event, 'LocationListed')
    })

    it('should get a location at index', async () => {
      const location = await instance.getLocationAtIndex(mockLocationInput.index);
      assert.equal(location, mockLocation)
    })
  })
})