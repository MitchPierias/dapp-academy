/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockName, mockSkills, mockOrganization, mockLocation, mockOccupationQuery, mockOrganizationResponse } = require('./mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  const otherAccount = accounts[1]
  const maliciousAccount = accounts[2]
  // Administration configuration
  context('Ownership', () => {
    it('should set the initial caller as owner', () => {
      return Resume.deployed()
        .then((instance) => instance.getOwner())
        .then((owner) => assert.equal(owner, ownerAccount))
    })
    it('should fail to delegate a new owner when not authorized', () => {
      return Resume.deployed()
        .then((instance) => instance.setOwner(maliciousAccount, { from: maliciousAccount }))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })
    it('should fail to delegate owner to self', () => {
      return Resume.deployed()
        .then((instance) => instance.setOwner(ownerAccount, { from: ownerAccount }))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })
    it('should delegate a new owner when authorized', async () => {
      const instance = await Resume.deployed()
      const result = await instance.setOwner(otherAccount, { from: ownerAccount })
      assert.isOk(result)
      const owner = await instance.getOwner()
      assert.equal(owner, otherAccount)
    })
  })
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

  context('Organizations', () => {
    it('should insert a new organization', () => {
      Resume.deployed()
        .then((instance) => instance.addOrganization('Dominos Pizza Enterprises', 'thumb'))
        .then(({ logs }) => assert.equal(logs[0].event, 'OrganizationCreated'))
    })
    it('should fail to get an Occup out of range', () => {
      return Resume.deployed()
        .then((instance) => instance.getOrganization(1000))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })
    it('should return an organization at index', async () => {
      const instance = await Resume.deployed()
      const org = await instance.getOrganization(0)
      assert.deepEqual(flattenTuple(org), mockOrganizationResponse)
    })
    context('Name', () => {})
    context('Image', () => {})
    context('Location', () => {})
    context('Link', () => {})
  })
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
      const { role, organization, description, location, startDate, endDate } = mockOccupationQuery.input
      return Resume.deployed()
        .then((instance) => instance.addOccupation(role, organization, description, location, startDate, endDate, { from: ownerAccount }))
        .then(({ logs }) => assert.equal(logs[0].event, 'OccupationListed'))
    })
    it('should return an occupation', () => {
      return Resume.deployed()
        .then((instance) => instance.getOccupation(0))
        .then((occupation) => assert.deepEqual(flattenTuple(occupation), mockOccupationQuery.result))
    })
    it('should fail to list an occupation when not authorized', () => {
      const { role, organization, description, location, startDate, endDate } = mockOccupationQuery.input
      return Resume.deployed()
        .then((instance) =>
          instance.addOccupation(role, organization, description, location, startDate, endDate, { from: maliciousAccount }),
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
    // Additional role description
    context('Description', () => {
      xit("should update the occupation's description", async () => {
        const mockUpdateResult = [...mockOccupationQuery.result]
        const instance = await Resume.deployed()
        await instance.updateOccupation(0, key, value, { from: ownerAccount })
        const occupation = await instance.getOccupation(0)
        assert.deepEqual(flattenTuple(occupation), mockUpdateResult)
      })
      it('should fail to update description when not authorized')
      it('should fail to update description when greater than maximum length threshold')
    })
    // Linking an Organization
    context('Organization', () => {
      it("should update the occupation's organization reference")
      it("should fail to update organization when organization doesn't exist")
      it('should fail to update organization when not authorized')
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
