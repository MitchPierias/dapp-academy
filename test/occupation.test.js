/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockSkills, mockOccupationQuery, mockEducationQuery } = require('./mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  const otherAccount = accounts[1]
  const maliciousAccount = accounts[2]
  // Occupation role list
  context('Occupation', () => {
    // Reset owner
    before(async () => {
      const instance = await Resume.deployed()
      const owner = await instance.getOwner()
      if (owner === ownerAccount) return
      await instance.setOwner(ownerAccount, { from: owner })
    })
    // Listing
    it('should list a new occupation', () => {
      const { role, entity, description, location, startDate, endDate } = mockOccupationQuery.input
      return Resume.deployed()
        .then((instance) => instance.addOccupation(role, entity, description, location, startDate, endDate))
        .then(({ logs }) => assert.equal(logs[0].event, 'OccupationListed'))
    })
    it('should return an occupation', () => {
      return Resume.deployed()
        .then((instance) => instance.getOccupation(0))
        .then((occupation) => assert.deepEqual(flattenTuple(occupation), mockOccupationQuery.result))
    })
    it('should fail to list an occupation when not authorized', () => {
      const { role, entity, description, location, startDate, endDate } = mockOccupationQuery.input
      return Resume.deployed()
        .then((instance) =>
          instance.addOccupation(role, entity, description, location, startDate, endDate, { from: maliciousAccount }),
        )
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })

    it('should throw error when out of bounds', () => {
      return Resume.deployed()
        .then((instance) => instance.getOccupation(1000))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })

    it('should store an education item', async () => {
      const { role, entity, description, location, startDate, endDate } = mockEducationQuery.input
      const instance = await Resume.deployed()
      const { logs } = await instance.addEducation(role, entity, description, location, startDate, endDate)
      assert.equal(logs[0].event, 'EducationListed')
      const occupation = await instance.getOccupation(7)
      assert.deepEqual(flattenTuple(occupation), mockEducationQuery.result)
    })

    it('should store a publication item', async () => {
      const instance = await Resume.deployed()
      const { logs } = await instance.addPublication('Advanced EOS Series — Part 9 — Payable Actions', 8, '', 0)
      assert.equal(logs[0].event, 'PublicationListed')
      const occupation = await instance.getOccupation(10)
      assert.deepEqual(flattenTuple(occupation), [4, 'Advanced EOS Series — Part 9 — Payable Actions', 'Coinmonks', 'thumb', '', 'Brisbane, Australia', 0, 0])
    })
    // Additional role description
    context('Description', () => {
      xit("should update the occupation's description", async () => {
        const mockUpdateResult = [...mockOccupationQuery.result]
        const instance = await Resume.deployed()
        await instance.updateOccupation(0, key, value)
        const occupation = await instance.getOccupation(0)
        assert.deepEqual(flattenTuple(occupation), mockUpdateResult)
      })
      it('should fail to update description when not authorized')
      it('should fail to update description when greater than maximum length threshold')
    })
    // Linking an Organization
    context('Organization', () => {
      it("should update the occupation's entity reference")
      it("should fail to update entity when entity doesn't exist")
      it('should fail to update entity when not authorized')
    })
    // Skill reference list
    context('Skills', () => {
      it('should list a unique skill when owner', async () => {
        const instance = await Resume.deployed()
        await instance.addSkill(0, mockSkills[0])
      })
      it('should fetch a lists of skills for occupation')
      it('should fail to list skill reference when skill is already referenced')
      it('should fail to list a skill when not authorized')
      it('should remove skill reference')
    })
    // Employment time period
    context('Timeline', () => {
      it("should update the occupation's startTime")
      it("should update the occupation's startTime and endTime")
      it('should set endTime to null or undefined when only startTime provided')
      it('should fail to update times when endTime occurs before startTime')
      it('should fail to update description when not authorized')
    })
  })
})
