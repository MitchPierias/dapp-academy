const Resume = artifacts.require("Resume");

module.exports = deployer => {
  deployer.deploy(Resume);
};
