pragma solidity >=0.4.0 <0.7.0;

library StringTools {

  function concat(string memory a, string memory b) public pure returns (string memory) {
    bytes memory tmpA = bytes(a);
    bytes memory tmpB = bytes(b);
    bytes memory temp = new bytes(tmpA.length + tmpB.length);

    uint counter;
    uint index;
    for (index = 0; index < tmpA.length; index++) {
      temp[counter++] = tmpA[index];
    }
    for (index = 0; index < tmpB.length; index++) {
      temp[counter++] = tmpB[index];
    }
  }
}