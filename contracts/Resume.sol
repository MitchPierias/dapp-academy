pragma solidity >=0.4.0 <0.7.0;

contract Resume {

  address private owner = msg.sender;
  string private name;
  Location public locale;
  Occupation public profession;
  string constant seperator = ", ";
  Availability public status;
  string[] public skills;
  Occupation[] experience;
  Organization[] organizations;
  Location[] locations;
  
  mapping(string => uint) availableSkills;

  enum Availability {
    Unavilable,
    Unemployed,
    Seeking,
    Employed
  }

  enum Level {
    Attendee,
    Participant,
    Certified,
    License,
    Diploma,
    Bachelors,
    Masters,
    Doctorates
  }

  struct Occupation {
    uint index;
    string role;
    uint employer_index;
    string description;
    uint location_index;
    uint start_date;
    uint end_date;
    string[] skills;
  }

  struct Organization {
    uint index;
    string name;
    string thumb;
  }

  struct Location {
    string city;
    string country;
  }

  event OccupationListed(uint atIndex, string title, string organisation);
  event OccupationChanged(uint atIndex, string fields);
  event OccupationRemoved(string title);
  event OccupationSet(uint id, string role);
  event OrganizationCreated(uint atIndex, string name);

  modifier onlyBy(address account) {
    // Check if caller address matches owner address
    require(msg.sender == account);
    _;
  }

  modifier whenOccupationExists(uint atIndex) {
    // Check if the occupation exists at the specified index
    require(atIndex >= 0 && atIndex < experience.length);
    _;
  }

  modifier whenOrganizationExists(uint atIndex) {
    // Check if the organization exists within the range
    require(atIndex >= 0 && atIndex < organizations.length);
    _;
  }

  function setOwner(address newOwner) public onlyBy(owner) {
    require(newOwner != owner);
    owner = newOwner;
  }

  function getOwner() public view returns (address) {
    return owner;
  }

  function setName(string memory newName) public onlyBy(owner) payable {
    require(bytes(newName).length > 0);
    name = newName;
  }

  function getName() public view returns (string memory) {
    return name;
  }

  function setLocation(string memory city, string memory country) public onlyBy(owner) payable {
    require(bytes(city).length > 0 && bytes(country).length > 0);
    locale = Location(city, country);
  }

  function getLocation() public view returns (string memory) {
    bytes memory city = bytes(locale.city);
    bytes memory divider = bytes(seperator);
    bytes memory country = bytes(locale.country);
    bytes memory temp = new bytes(city.length + divider.length + country.length);

    uint counter;
    uint index;
    for (index = 0; index < city.length; index++) {
      temp[counter++] = city[index];
    }
    for (index = 0; index < divider.length; index++) {
      temp[counter++] = divider[index];
    }
    for (index = 0; index < country.length; index++) {
      temp[counter++] = country[index];
    }

    return string(temp);
  }

  function addOccupation(string memory role, uint employerIndex, string memory description,  uint locationIndex, uint startDate, uint endDate) public onlyBy(owner) whenOrganizationExists(employerIndex) payable {
    // Validate occupation data
    // Create skill list
    string[] memory skillList;
    uint atIndex = experience.length;
    string memory orgName = organizations[employerIndex].name;
    // Construct occupation object
    Occupation memory job = Occupation(atIndex, role, employerIndex, description, locationIndex, startDate, endDate, skillList);
    // List occupation object
    experience.push(job);
    // Notify occupation listing
    emit OccupationListed(atIndex, job.role, orgName);
  }

  function setOccupation(uint withIndex) public whenOccupationExists(withIndex) payable onlyBy(owner) {
    // Set the position to the occupation index
  }

  function updateOccupation(uint atIndex) public whenOccupationExists(atIndex) payable onlyBy(owner) {
    // Fetch the existing occupation at index
    // Set fields which have changed
      // Capture change field name
    // Update the occupation at index
    // Notify of field changes
  }

  function getOccupation(uint atIndex) public whenOccupationExists(atIndex) view returns (string memory, string memory, string memory, string memory, string memory, uint, uint) {
    // Fetch the occupation matching at the specified index
    // Fetch the occupations location
      // Stringify location into the format "CITY, COUNTRY"
    // Search and replace skill identifiers to skill names
      // Stringify skills with delimiter
    // Return tuple of occupation data
      // (role, employer, thumb, description, locationString, startDate, endDate, skillCollection);
    Occupation memory job = experience[atIndex];
    //Organization memory org = organizations[job.employer_index];
    //Location memory geo = locations[job.location_index];
    string memory orgName = organizations[job.employer_index].name;
    string memory orgThumb = organizations[job.employer_index].thumb;
    string memory roleLocation = "Brisbane, Australia";
    return (job.role, orgName, orgThumb, job.description, roleLocation, job.start_date, job.end_date);
  }

  function countOccupations() public view returns (uint) {
    return experience.length;
  }

  function removeOccupation(uint atIndex) public whenOccupationExists(atIndex) payable onlyBy(owner) {
    // Removes the occupation at index
    // Sets position to previous index when removed occupation is current
  }

  function addOrganization(string memory orgName, string memory thumb) public payable onlyBy(owner)  {
    // Capture the next available index
    uint index = organizations.length;
    // Initialize a new organization
    Organization memory org = Organization(index, orgName, thumb);
    // Store organization and notify
    organizations.push(org);
    emit OrganizationCreated(index, org.name);
  }

  function updateOrganization(uint withID) public whenOccupationExists(withID) payable onlyBy(owner) {

  }

  function removeOrganization(uint withID) public whenOrganizationExists(withID) payable onlyBy(owner) {

  }

  function getOrganization(uint atIndex) public whenOrganizationExists(atIndex) view returns (string memory, string memory) {
    Organization memory org = organizations[atIndex];
    return (org.name, org.thumb);
  }

  function countOrganizations() public view returns (uint) {
    return organizations.length;
  }

  function updateOccupationTimeline(uint atIndex, uint startDate, uint endDate) public whenOccupationExists(atIndex) payable onlyBy(owner) {
    // Validate startDate exists
    // Ensure the endDate is greater than startDate
    // If no endDate, cast to null or undefined
    // Update state
  }
}