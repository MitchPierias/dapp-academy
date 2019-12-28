/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')
const { mockLink, mockLinkInput } = require('../mock-data')

const flattenTuple = (tuple) => Object.values(tuple).map((value) => ('object' === typeof value && value.words ? value.toNumber() : value))

contract('Resume', (accounts) => {
  // Capture accounts
  const ownerAccount = accounts[0]
  const maliciousAccount = accounts[1]
  let instance;

  context('Links', () => {

    before(async () => {
      instance = await Resume.new()
      const owner = await instance.getOwner()
      if (owner === ownerAccount) return
      await instance.setOwner(ownerAccount, { from: owner })
    })

    it('should have zero links by default', async () => {
      const totalLinks = await instance.countLinks()
      assert.equal(totalLinks, 0)
    })

    it('should list a new link', async () => {
      const { label, url } = mockLinkInput
      const { logs } = await instance.addLink(label, url)
      assert.equal(logs[0].event, 'LinkCreated')
    })

    it('should fail to list a link when not authorized', () => {
      const { label, url } = mockLinkInput
      return Resume.new().then(instance => instance.addLink(label, url, { from: maliciousAccount }))
        .then(() => assert.fail('Expected error to be thrown'))
        .catch((error) => assert.include(error.message, 'revert'))
    })

    it('should return the number of stored links', async () => {
      const totalLinks = await instance.countLinks()
      assert.equal(totalLinks, 1)
    })

    it('should return a link label and url', async () => {
      const ref = await instance.getLink(0)
      assert.deepEqual(flattenTuple(ref), mockLink)
    })
  })
})
