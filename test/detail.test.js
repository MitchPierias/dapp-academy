/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockName, mockSkills, mockOrganization, mockLocation, mockOccupationQuery, mockOrganizationResponse } = require('./mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  const otherAccount = accounts[1]
  const maliciousAccount = accounts[2]
  // Individual's current details
  context('Details', () => {
    // Reset owner
    before(async () => {
      const instance = await Resume.deployed()
      const owner = await instance.getOwner()
      if (owner === ownerAccount) return
      await instance.setOwner(ownerAccount, { from: owner })
    })
    // Individual's full name
    context('Name', () => {
      it("should update the individual's full name", async () => {
        const instance = await Resume.deployed()
        await instance.setName(mockName, { from: ownerAccount })
        const name = await instance.getName()
        return assert.equal(name, mockName)
      })
      it('should fail to set name field when not authorized', () => {
        return Resume.deployed()
          .then((instance) => instance.setName(mockName, { from: maliciousAccount }))
          .then(() => assert.fail('Expected error to be thrown'))
          .catch((error) => assert.include(error.message, 'revert'))
      })
      it('should fail to set name field with invalid name value', () => {
        return Resume.deployed()
          .then((instance) => instance.setName('', { from: ownerAccount }))
          .then(() => assert.fail('Expected error to be thrown'))
          .catch((error) => assert.include(error.message, 'revert'))
      })
    })
    // Current location
    context('Location', () => {
      it("should update the individual's location field", async () => {
        const { city, country } = mockLocation
        const instance = await Resume.deployed()
        await instance.setLocation(city, country)
        const location = await instance.getLocation()
        return assert.equal(location, `${city}, ${country}`)
      })
      it('should fail to set location field when not authorized', () => {
        const { city, country } = mockLocation
        return Resume.deployed()
          .then((instance) => instance.setLocation(city, country, { from: maliciousAccount }))
          .then(() => assert.fail('Expected error to be thrown'))
          .catch((error) => assert.include(error.message, 'revert'))
      })
      it('should fail to set location field with invalid location value', () => {
        return Resume.deployed()
          .then((instance) => instance.setLocation('', '', { from: ownerAccount }))
          .then(() => assert.fail('Expected error to be thrown'))
          .catch((error) => assert.include(error.message, 'revert'))
      })
    })
    // Profession
    context('Profession', () => {
      it("should update the individual's profession")
      it('should fail to set profession field when not authorized')
      it('should fail to set profession when length exceeds maximum threshold')
    })
    // Link list
    context('Links', () => {
      it('should list a new link')
      it('should list a link with label and url')
      it('should fail list a link when not authorized')
    })
  })
})
