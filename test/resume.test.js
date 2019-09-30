/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockName, mockSkills, mockOrganization, mockOccupations, mockLocation, mockLink } = require('./mock-data')

contract('Resume', (accounts) => {
  // Administration configuration
  context('Ownership', () => {
    it('should set the initial caller as owner')
    it('should fail to delegate a new owner when not authorized')
    it('should fail to delegate owner as owner')
    it('should delegate a new owner when authorized')
  })
  // Individual's current details
  context('Details', () => {
    // Individual's full name
    context('Name', () => {
      it("should update the individual's full name")
      it('should fail to set name field when not authorized')
      it('should fail to set name field with invalid name value')
    })
    // Current location
    context('Location', () => {
      it("should set the individual's location field")
      it('should update the owners location field')
      it('should fail to set location field when not authorized')
      it('should fail to set location field with invalid location value')
    })
    // Link list
    context('Links', () => {
      it('should list a new link')
      it('should list a link with label and url')
      it('should fail list a link when not authorized')
    })
  })
  // Occupation role list
  context('Occupations', () => {
    // Listing
    it('should list a new occupation role')
    it('should fail to create an occupation when not authorized')
    // Additional role description
    context('Description', () => {
      it("should update the occupation's description")
      it('should fail to update description when not authorized')
      it('should fail to update description when greater than maximum length threshold')
    })
    // Project resource link
    context('Link', () => {
      it("should update the occupation's resource link")
      it('should fail to update link when not authorized')
    })
    // Linking an Organization
    context('Organization', () => {
      it("should update the occupation's organization reference")
      it("should fail to update organization when organization doesn't exist")
      it('should fail to update organization when not authorized')
    })
    // Skill reference list
    context('Skills', () => {
      it('should contain a list of unique skill identifier references')
      it('should list a unique skill when owner')
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

  context('Skills', () => {
    it('should list a new skill')
    it('should generate a unique identifier for skill')
    it('should fail to list skill when already exists')
    it('should fail to list skill when not authorized')
    it('should get a skill for unique index')
    it('should return a list of all skills')
    it('should allow pagination of skills')
    it('should delist a skill')
    it('should remove references of skill when skill is delisted')
    it('should fail to remove skill when not authorized')
  })

  context('Organizations', () => {
    context('Name', () => {})
    context('Image', () => {})
    context('Location', () => {})
    context('Link', () => {})
  })
})
