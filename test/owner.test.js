/* eslint-disable no-undef */
const Resume = artifacts.require('Resume')

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
})
