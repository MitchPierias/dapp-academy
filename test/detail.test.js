/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockDetailsInput, mockDetails, mockDetailsEmpty, mockDetailsNameOnly, mockLocation, mockLocationInput } = require('../mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  const maliciousAccount = accounts[1]
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

      it('should return empty details by default', async () => {
        const instance = await Resume.new()
        const details = await instance.getDetails()
        return assert.deepEqual(flattenTuple(details), mockDetailsEmpty)
      })

      it("should update the individual's full name", async () => {
        const instance = await Resume.new()
        await instance.setName(mockDetailsInput.name, { from: ownerAccount })
        const details = await instance.getDetails()
        return assert.deepEqual(flattenTuple(details), mockDetailsNameOnly)
      })
      it('should fail to set name field when not authorized', () => {
        return Resume.deployed()
          .then((instance) => instance.setName(mockDetailsInput.name, { from: maliciousAccount }))
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
        const { city, country } = mockLocationInput
        const instance = await Resume.deployed()
        await instance.setLocation(city, country)
        const location = await instance.getLocation()
        return assert.equal(location, mockLocation)
      })
      it('should fail to set location field when not authorized', () => {
        const { city, country } = mockLocationInput
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
