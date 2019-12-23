/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockName, mockSkills, mockOrganization, mockLocation, mockOccupationQuery, mockOrganizationResponse } = require('./mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  const otherAccount = accounts[1]
  const maliciousAccount = accounts[2]

  context('Skills', () => {
    xit('should list a new skill', async () => {
      const instance = await Resume.deployed()
      await instance.addSkill(mockSkills[0])
    })
    xit('should fail to list skill when already exists', () => {
      return Resume.deployed()
        .then((instance) => instance.addSkill(mockSkills[0]))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })
    xit('should fail to list skill when not authorized', () => {
      return Resume.deployed()
        .then((instance) => instance.addSkill(mockSkills[0], { from: otherAccount }))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })
    xit('should get a skill at a specified index', async () => {
      const instance = await Resume.deployed()
      const storedSkill = await instance.getSkill(0)
      assert.equal(storedSkill, mockSkills[0])
    })
    xit('should delist a skill', async () => {
      const instance = await Resume.deployed()
      await instance.removeSkill(mockSkills[0])
      return instance
        .getSkill(0)
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })
    xit('should fail to delist a skill when not authorized')
  })
})
