// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    uint256 number;
    string psychologistComment;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function storeNum(uint256 num) public {
        number = num;
    }
    function storePsychologistComment(string memory mesg) public {
        PsychologistComment = mesg;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieveNum() public view returns (uint256){
        return number;
    }
    function retrievePsychologistComment() public view returns (string memory){
        return PsychologistComment;
    }
}