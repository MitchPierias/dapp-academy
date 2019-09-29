pragma solidity >=0.4.0 <0.7.0;

contract Resume {

  address private owner;
  string public name;
  uint public position;
  uint public local;
  Availability public status;
  string[] public skills;
  Occupation[] public occupations;
  
  mapping(string => string) availableSkills;
  mapping(uint => Location) locations;
  mapping(uint => Organization) organizations;

  enum Availability {
    Unavilable,
    Unemployed,
    Seeking,
    Employed
  }

  struct Occupation {
    uint index;
    string role;
    string employer;
    string decription;
    string link;
    Location location;
    uint start_date;
    uint end_date;
    string[] skills;
  }

  struct Organization {
    uint id;
    string name;
    string link;
    string image;
    Location location;
  }

  struct Location {
    uint id;
    string city;
    string country;
  }

  event OccupationListed(uint atIndex, string title);
  event OccupationChanged(uint atIndex, string[] fields);
  event OccupationRemoved(string title);
  event OccupationSet(uint id, string role);

  modifier whenOwner(address caller) {
    // Check if caller address matches owner address
  }

  modifier whenUniqueOrganisation(uint id) {
    // Check the organisation has already been stored
  }

  modifier whenOccupationExists(uint atIndex) {
    // Check if the occupation exists at the specified index
  }

  function addOccupation() public whenOwner(msg.sender) payable {
    // Construct occupation object
    // List occupation object
    // Notify occupation listing
  }

  function setOccupation(uint withIndex) public whenOccupationExists(withIndex) payable whenOwner(msg.sender) {
    // Set the position to the occupation index
  }

  function updateOccupation(uint atIndex) public whenOccupationExists(atIndex) payable whenOwner(msg.sender) {
    // Fetch the existing occupation at index
    // Set fields which have changed
      // Capture change field name
    // Update the occupation at index
    // Notify of field changes
  }

  function getOccupation(uint atIndex) public returns (string, uint, string, string, string, uint, uint, string[]) {
    // Fetch the occupation matching at the specified index
    // Fetch the occupations location
    // Stringify location
    // Search and replace skill identifiers to skill names
    // Return tuple of occupation data
      // (role, employer, description, link, locationString, startDate, endDate, skillCollection);
  }

  function removeOccupation(uint atIndex) public whenOccupationExists(atIndex) payable whenOwner(msg.sender) {
    // Removes the occupation at index
    // Sets position to previous index when removed occupation is current
  }

  function addOrganization(uint id) public payable whenUniqueOrganisation(id) {
    
  }
}