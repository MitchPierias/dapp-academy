/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockOccupationInput, mockOccupation, mockEducationInput, mockEducation, mockEntityInput, mockLocationInput, mockPublication, mockPublicationInput, mockCommunity, mockCommunityInput, mockAward, mockAwardInput } = require('../mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  // Capture accounts
  const ownerAccount = accounts[0]
  const maliciousAccount = accounts[1]
  // Occupation role list
  context('Roles', () => {
    // Listing
    it('should list a new occupation', async () => {
      const instance = await Resume.new()
      const owner = await instance.getOwner()
      if (owner === ownerAccount) return
      await instance.setOwner(ownerAccount, { from: owner })
      const { role, entity, description, location, startDate, endDate, skills } = mockOccupationInput
      const { logs } = await instance.addOccupation(role, entity, description, location, startDate, endDate, skills)
      await instance.addEntity(mockEntityInput.name, mockEntityInput.image)
      await instance.addLocation(mockLocationInput.city, mockLocationInput.country)
      assert.equal(logs[0].event, 'OccupationListed')
      const occupation = await instance.getRole(mockOccupationInput.index)
      assert.deepEqual(flattenTuple(occupation), mockOccupation)
    })

    it('should fail to list an occupation when not authorized', () => {
      const { role, entity, description, location, startDate, endDate, skills } = mockOccupationInput
      return Resume.new()
        .then((instance) =>
          instance.addOccupation(role, entity, description, location, startDate, endDate, skills, { from: maliciousAccount }),
        )
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })

    it('should throw error when out of bounds', () => {
      return Resume.deployed()
        .then((instance) => instance.getRole(1000))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })

    context('Shorthand', () => {

      let instance;

      before(async () => {
        instance = await Resume.new();
        const owner = await instance.getOwner()
        if (owner !== ownerAccount) {
          await instance.setOwner(ownerAccount, { from: owner })
        }
        await instance.addEntity(mockEntityInput.name, mockEntityInput.image)
        await instance.addLocation(mockLocationInput.city, mockLocationInput.country)
      })

      it('should store education item', async () => {
        const { role, description, entity, location, startDate, endDate } = mockEducationInput
        const { logs } = await instance.addEducation(role, entity, description, location, startDate, endDate)
        assert.equal(logs[0].event, 'RoleListed')
        const qualification = await instance.getRole(0)
        assert.deepEqual(flattenTuple(qualification), mockEducation)
      })

      it('should store publication item', async () => {
        const { title, link, entity, endDate } = mockPublicationInput
        const { logs } = await instance.addPublication(title, entity, link, endDate)
        assert.equal(logs[0].event, 'RoleListed')
        const publication = await instance.getRole(1)
        assert.deepEqual(flattenTuple(publication), mockPublication)
      })

      it('should store community item', async () => {
        const { title, description, entity, startDate, endDate } = mockCommunityInput
        const { logs } = await instance.addCommunity(title, entity, description, startDate, endDate)
        assert.equal(logs[0].event, 'RoleListed')
        const occupation = await instance.getRole(2)
        assert.deepEqual(flattenTuple(occupation), mockCommunity)
      })

      it('should store award item', async () => {
        const { title, description, entity, endDate } = mockAwardInput;
        const { logs } = await instance.addAward(title, entity, description, endDate)
        assert.equal(logs[0].event, 'RoleListed')
        const occupation = await instance.getRole(3)
        assert.deepEqual(flattenTuple(occupation), mockAward)
      })
    })
    // Additional role description
    context('Description', () => {
      it("should update the occupation's description")
      it('should fail to update description when not authorized')
      it('should fail to update description when greater than maximum length')
    })
    // Linking an Organization
    context('Organization', () => {
      it("should update the occupation's entity reference")
      it("should fail to update entity when entity doesn't exist")
      it('should fail to update entity when not authorized')
    })
    // Skill reference list
    context('Skills', () => {
      it('should list a unique skill when owner')
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
