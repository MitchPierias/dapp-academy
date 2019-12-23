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
  Entity[] Entities;
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

  enum RoleType {
    Professional,
    Education,
    Award,
    Community,
    Publication
  }

  struct Occupation {
    uint index;
    RoleType role;
    string title;
    uint employer_index;
    string description;
    uint location_index;
    uint start_date;
    uint end_date;
    string[] skills;
  }

  struct Entity {
    uint index;
    string name;
    string thumb;
  }

  struct Location {
    string city;
    string country;
  }

  event EducationListed(string title, string entityName);
  event PublicationListed(string title, string entityName);
  event OccupationListed(string title, string entityName);
  event CommunityListed(string title, string entityName);
  event AwardListed(string title, string entityName);
  event OccupationChanged(uint atIndex, string fields);
  event OccupationRemoved(string title);
  event OccupationSet(uint id, string title);
  event EntityCreated(uint atIndex, string name);
  event ListedSkill(string skill, uint index);
  event LocationListed(uint atIndex, string location);

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

  modifier whenEntityExists(uint atIndex) {
    // Check if the Entity exists within the range
    require(atIndex >= 0 && atIndex < Entities.length);
    _;
  }

  modifier whenSkillExists(uint atIndex) {
    // Check skill index is within bounds
    require(atIndex >= 0 && atIndex < skills.length);
    _;
  }

  modifier whenUniqueSkill(string memory skill) {
    // Check if the skill already listed
    require(availableSkills[skill] == 0x0);
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

  function setLocation(string memory city, string memory country) public onlyBy(owner) payable {
    require(bytes(city).length > 0 && bytes(country).length > 0);
    locale = Location(city, country);
  }

  function addLocation(string memory city, string memory country) public onlyBy(owner) payable {
    require(bytes(city).length > 0 && bytes(country).length > 0);
    locations.push(Location(city, country));
    emit LocationListed(locations.length, country);
  }

  function getDetails() public view returns (string memory, string memory) {
    string memory location = getLocation();
    return (name, location);
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

  function getLocationAtIndex(uint atIndex) public view returns (string memory) {
    Location memory loc = locations[atIndex];
    bytes memory city = bytes(loc.city);
    bytes memory divider = bytes(seperator);
    bytes memory country = bytes(loc.country);
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

  function addPublication(string memory title, uint entityIndex, string memory description, uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = Entities[entityIndex].name;
    addItem(RoleType.Publication, title, entityIndex, description, 0, endDate, endDate);
    emit PublicationListed(title, entityName);
  }

  function addEducation(string memory title, uint entityIndex, string memory description,  uint locationIndex, uint startDate, uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = Entities[entityIndex].name;
    addItem(RoleType.Education, title, entityIndex, description, locationIndex, startDate, endDate);
    emit EducationListed(title, entityName);
  }

  function addOccupation(string memory title, uint entityIndex, string memory description,  uint locationIndex, uint startDate, uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = Entities[entityIndex].name;
    addItem(RoleType.Professional, title, entityIndex, description, locationIndex, startDate, endDate);
    emit OccupationListed(title, entityName);
  }

  function addCommunity(string memory title, uint entityIndex, string memory description,  uint startDate, uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = Entities[entityIndex].name;
    addItem(RoleType.Community, title, entityIndex, description, 0, startDate, endDate);
    emit CommunityListed(title, entityName);
  }

  function addAward(string memory title, uint entityIndex, string memory description,  uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = Entities[entityIndex].name;
    addItem(RoleType.Award, title, entityIndex, description, 0, 0, endDate);
    emit AwardListed(title, entityName);
  }

  function addItem(RoleType _type, string memory title, uint entityIndex, string memory description,  uint locationIndex, uint startDate, uint endDate) private onlyBy(owner) whenEntityExists(entityIndex) {
    string[] memory skillList;
    uint atIndex = experience.length;
    
    // Construct occupation object
    Occupation memory job = Occupation(atIndex, _type, title, entityIndex, description, locationIndex, startDate, endDate, skillList);
    // List occupation object
    experience.push(job);
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

  function getOccupation(uint atIndex) public whenOccupationExists(atIndex) view returns (RoleType, string memory, string memory, string memory, string memory, string memory, uint, uint) {
    // Fetch the occupation matching at the specified index
    // Fetch the occupations location
      // Stringify location into the format "CITY, COUNTRY"
    // Search and replace skill identifiers to skill names
      // Stringify skills with delimiter
    // Return tuple of occupation data
      // (title, employer, thumb, description, locationString, startDate, endDate, skillCollection);
    Occupation memory job = experience[atIndex];
    //Entity memory org = Entities[job.employer_index];
    //Location memory geo = locations[job.location_index];
    string memory entityName = Entities[job.employer_index].name;
    string memory orgThumb = Entities[job.employer_index].thumb;
    string memory roleLocation = getLocationAtIndex(job.location_index);
    return (job.role, job.title, entityName, orgThumb, job.description, roleLocation, job.start_date, job.end_date);
  }

  function countOccupations() public view returns (uint) {
    return experience.length;
  }

  function removeOccupation(uint atIndex) public whenOccupationExists(atIndex) payable onlyBy(owner) {
    // Removes the occupation at index
    // Sets position to previous index when removed occupation is current
  }

  function addEntity(string memory entityName, string memory thumb) public payable onlyBy(owner)  {
    // Capture the next available index
    uint index = Entities.length;
    // Initialize a new Entity
    Entity memory org = Entity(index, entityName, thumb);
    // Store Entity and notify
    Entities.push(org);
    emit EntityCreated(index, org.name);
  }

  function updateEntity(uint withID) public whenOccupationExists(withID) payable onlyBy(owner) {

  }

  function removeEntity(uint withID) public whenEntityExists(withID) payable onlyBy(owner) {

  }

  function getEntity(uint atIndex) public whenEntityExists(atIndex) view returns (string memory, string memory) {
    Entity memory result = Entities[atIndex];
    return (result.name, result.thumb);
  }

  function countEntities() public view returns (uint) {
    return Entities.length;
  }

  function updateOccupationTimeline(uint atIndex, uint startDate, uint endDate) public whenOccupationExists(atIndex) payable onlyBy(owner) {
    // Validate startDate exists
    // Ensure the endDate is greater than startDate
    // If no endDate, cast to null or undefined
    // Update state
  }

  function addSkill(uint atIndex, string memory skill) public whenOccupationExists(atIndex) payable onlyBy(owner) {
    // Store skill and reference
    Occupation storage occupation = experience[atIndex];
    occupation.skills.push(skill);
    // Broadcast listing
    emit ListedSkill(skill, occupation.skills.length - 1);
  }

  function getSkill(uint atIndex) public whenSkillExists(atIndex) view returns (string memory) {
    // Fetch skill at index
    return skills[atIndex];
  }

  function removeSkill(string memory skill) public payable onlyBy(owner) {
    uint atIndex = availableSkills[skill];
    assert(atIndex == 0x0);
    // Clear the skill and reference
    delete skills[atIndex];
    delete availableSkills[skill];
  }
}