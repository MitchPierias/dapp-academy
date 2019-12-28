const { mockLocation, mockLocationInput, flattenLocation } = require('./mock-location')

exports.mockDetailsInput = {
  name: 'First Last',
  location: mockLocationInput.index
}

exports.mockDetailsEmpty = ['', '']

exports.mockDetails = ['First Last', mockLocation]

exports.mockDetailsNameOnly = [this.mockDetails[0], this.mockDetailsEmpty[1]]

exports.mockDetailsLocationOnly = [this.mockDetailsEmpty[0], this.mockDetails[1]]