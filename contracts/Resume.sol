pragma solidity >=0.4.0 <0.7.0;

contract Resume {

  address private owner = msg.sender;
  string private name;
  Location public locale;
  Role public profession;
  string constant seperator = ", ";
  Role[] experience;
  Entity[] entities;
  Location[] locations;
  Link[] links;

  enum RoleType {
    Occupation,
    Education,
    Award,
    Community,
    Publication
  }

  struct Role {
    uint index;
    RoleType role;
    string title;
    uint employer_index;
    string description;
    uint location_index;
    uint start_date;
    uint end_date;
    string skills;
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
  
  struct Link {
    string label;
    string url;
  }

  event RoleListed(RoleType role, string title, string entityName);
  event OccupationChanged(uint atIndex, string fields);
  event OccupationRemoved(string title);
  event OccupationSet(uint id, string title);
  event EntityCreated(uint atIndex, string name);
  event ListedSkill(string skill, uint index);
  event LocationListed(uint atIndex, string location);
  event LinkCreated(uint atIndex, string label, string url);

  modifier onlyBy(address account) {
    // Check if caller address matches owner address
    require(msg.sender == account);
    _;
  }

  modifier whenRoleExists(uint atIndex) {
    // Check if the occupation exists at the specified index
    require(atIndex >= 0 && atIndex < experience.length);
    _;
  }

  modifier whenEntityExists(uint atIndex) {
    // Check if the Entity exists within the range
    require(atIndex >= 0 && atIndex < entities.length);
    _;
  }

  modifier whenLinkExists(uint atIndex) {
    // Check if the skill already listed
    require(atIndex >= 0 && atIndex < links.length);
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

    if (city.length == 0 && country.length == 0) {
      return '';
    }

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
    string memory entityName = entities[entityIndex].name;
    addRole(RoleType.Publication, title, entityIndex, description, 0, endDate, endDate, '');
    emit RoleListed(RoleType.Publication, title, entityName);
  }

  function addEducation(string memory title, uint entityIndex, string memory description,  uint locationIndex, uint startDate, uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = entities[entityIndex].name;
    addRole(RoleType.Education, title, entityIndex, description, locationIndex, startDate, endDate, '');
    emit RoleListed(RoleType.Education, title, entityName);
  }

  function addOccupation(string memory title, uint entityIndex, string memory description,  uint locationIndex, uint startDate, uint endDate, string memory skills) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = entities[entityIndex].name;
    addRole(RoleType.Occupation, title, entityIndex, description, locationIndex, startDate, endDate, skills);
    emit RoleListed(RoleType.Occupation, title, entityName);
  }

  function addCommunity(string memory title, uint entityIndex, string memory description,  uint startDate, uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = entities[entityIndex].name;
    addRole(RoleType.Community, title, entityIndex, description, 0, startDate, endDate, '');
    emit RoleListed(RoleType.Community, title, entityName);
  }

  function addAward(string memory title, uint entityIndex, string memory description,  uint endDate) public onlyBy(owner) whenEntityExists(entityIndex) payable {
    string memory entityName = entities[entityIndex].name;
    addRole(RoleType.Award, title, entityIndex, description, 0, 0, endDate, '');
    emit RoleListed(RoleType.Award, title, entityName);
  }

  function addRole(RoleType typeIndex, string memory title, uint entityIndex, string memory description, uint locationIndex, uint startDate, uint endDate, string memory skills) public onlyBy(owner) whenEntityExists(entityIndex) {
    uint atIndex = experience.length;
    // Construct role item
    Role memory roleItem = Role(atIndex, typeIndex, title, entityIndex, description, locationIndex, startDate, endDate, skills);
    // List role item
    experience.push(roleItem);
  }

  function updateRole(uint atIndex) public whenRoleExists(atIndex) payable onlyBy(owner) {
    // Fetch the existing occupation at index
    // Set fields which have changed
      // Capture change field name
    // Update the occupation at index
    // Notify of field changes
  }

  function getRole(uint atIndex) public whenRoleExists(atIndex) view returns (RoleType, string memory, string memory, string memory, string memory, string memory, uint, uint, string memory) {
    // Fetch the occupation matching at the specified index
    // Fetch the occupations location
      // Stringify location into the format "CITY, COUNTRY"
    // Search and replace skill identifiers to skill names
      // Stringify skills with delimiter
    // Return tuple of occupation data
      // (title, employer, thumb, description, locationString, startDate, endDate, skillCollection);
    Role memory roleItem = experience[atIndex];
    //Entity memory org = Entities[roleItem.employer_index];
    //Location memory geo = locations[roleItem.location_index];
    string memory entityName = entities[roleItem.employer_index].name;
    string memory orgThumb = entities[roleItem.employer_index].thumb;
    string memory roleLocation = getLocationAtIndex(roleItem.location_index);
    return (roleItem.role, roleItem.title, entityName, orgThumb, roleItem.description, roleLocation, roleItem.start_date, roleItem.end_date, roleItem.skills);
  }

  function countRoles() public view returns (uint) {
    return experience.length;
  }

  function removeRole(uint atIndex) public whenRoleExists(atIndex) payable onlyBy(owner) {
    // Remove the role at the specified index
    // Reallocate array to fill empty slot or use an index pointer
  }

  function addEntity(string memory entityName, string memory thumb) public payable onlyBy(owner)  {
    // Capture the next available index
    uint index = entities.length;
    // Initialize a new Entity
    Entity memory org = Entity(index, entityName, thumb);
    // Store Entity and notify
    entities.push(org);
    emit EntityCreated(index, org.name);
  }

  function updateEntity(uint withID) public whenRoleExists(withID) payable onlyBy(owner) {

  }

  function removeEntity(uint withID) public whenEntityExists(withID) payable onlyBy(owner) {

  }

  function getEntity(uint atIndex) public whenEntityExists(atIndex) view returns (string memory, string memory) {
    Entity memory result = entities[atIndex];
    return (result.name, result.thumb);
  }

  function countEntities() public view returns (uint) {
    return entities.length;
  }

  function addLink(string memory label, string memory url) public payable onlyBy(owner) {
    uint atIndex = links.length;
    Link memory ref = Link(label, url);
    links.push(ref);
    emit LinkCreated(atIndex, label, url);
  }

  function countLinks() public view returns (uint) {
    return links.length;
  }

  function getLink(uint atIndex) public whenLinkExists(atIndex) view returns (string memory, string memory) {
    Link memory ref = links[atIndex];
    return (ref.label, ref.url);
  }
}