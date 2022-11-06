// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

library Counters {
    struct Counter {
        uint256 _value;
    }

    function currentValue(Counter storage counter)
        internal
        view
        returns (uint256)
    {
        return counter._value;
    }

    function increaseValue(Counter storage counter) internal {
        unchecked {
            counter._value += 1;
        }
    }

    function decreaseValue(Counter storage counter) internal {
        uint256 value = counter._value;
        require(value > 0, "Cannot be less than 0");
        unchecked {
            counter._value = value - 1;
        }
    }

    function resetValue(Counter storage counter) internal {
        counter._value = 0;
    }
}
