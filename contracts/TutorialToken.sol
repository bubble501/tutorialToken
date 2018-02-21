pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';


contract TutorialToken is StandardToken {
    string public name = "TutorialToken";
    string public symbol = "HT";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 888888;
    function TutorialToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}