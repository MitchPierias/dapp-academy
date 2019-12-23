/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

const mockEntityName = 'Dominos Pizza Enterprises'
const mockEntityThumbnail = 'http://www.logotypes101.com/logos/685/E9C962994FA4A42D91A2A110B4FC8F84/dominospizza.png'

contract('Resume', (accounts) => {
  const ownerAccount = accounts[0]
  const otherAccount = accounts[1]
  const maliciousAccount = accounts[2]

  context('Entities', () => {

    it('should insert a new entity', () => {
      Resume.deployed()
        .then((instance) => instance.addEntity(mockEntityName, mockEntityThumbnail))
        .then(({ logs }) => assert.equal(logs[0].event, 'EntityCreated'))
    })

    it('should fail to list entity when not owner', () => {
      return Resume.deployed()
        .then((instance) => instance.addEntity('Malicious', 'thumbnail', { from: maliciousAccount }))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })

    it('should fail to get an entity out of range', () => {
      return Resume.deployed()
        .then((instance) => instance.getEntity(1000))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })

    it('should return an Entity at index', async () => {
      const instance = await Resume.deployed()
      const org = await instance.getEntity(0)
      assert.deepEqual(flattenTuple(org), [mockEntityName, mockEntityThumbnail])
    })

    context('Name', () => { })
    context('Image', () => { })
    context('Location', () => { })
    context('Link', () => { })
  })
})
