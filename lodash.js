/**
 * Full-Stack Software Engineering
 * Javascript Syntax, Part II
 * lodash
 */

const _ = {
    // Implement clamp
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        return Math.min(lowerClampedValue, upper); //clamped value
    },

    // Implement inRange
    inRange(number, start, end) {
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        if (end === undefined) {
            end = start;
            start = 0;
        }
        return (number >= start) && (number < end);        
    },

    //   implement Words -> get words in a string
    words(stringArg) {
        return stringArg.split(" ");        
    },

    //   Implement pad -> add padding around a string
    pad(string, length) {
        if (length <= string.length) {
            return string;
        }
        let startPaddingLength = Math.floor(Math.abs(length - string.length) / 2);
        let endPaddingLength = Math.abs(
            length - string.length - startPaddingLength
        );
        let paddedString =
            " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
        return paddedString;
    },

    // implement has -> checks if an object has a given key or contains a given key
    has(object, key) {
        return object.key !== undefined && Object.keys(object).includes(key);
    },

    // implement Invert -> swaps objects key and value
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            let temp = object[key];
            let tempKey = key;
            invertedObject[temp] = tempKey;
        }
        return invertedObject;
    },

    // implement findKey -> returns a key or undefined in function returns truthy
    findKey(object, func) {
        for (let key in object) {
            return func(object[key]) ? key : undefined;
        }
    },

    // implement drop -> drops a specified amount on array content 
    drop(arr, dropCount) {
        if (dropCount === undefined) {
            dropCount = 1;
        }
        arr.splice(0, dropCount); //mutates array
        return arr;
    },

    // implement drop While
    dropWhile(arr, predicate) {
        let dropNumber = arr.findIndex((ele, index) => {
            return !predicate(ele, index, arr);
        });
        return this.drop(arr, dropNumber); //dropped array
        
    },

    // implement chunk -> return chunks or an array as an array of arrays using s given size
    chunk(arr, size) {
        let resultArray = [];
        if (size === undefined) {
            size = 1;
        }
        for (let i = 0; i < arr.length; i + size) {
            resultArray.push(arr.splice(0, size));
        }
        return resultArray;
    },
};

let array = [1, 2, 3, 4, 5, 6];
console.log(_.chunk(array, 4));
// console.log(_.invert({"op":"ops value"}))

// Do not write or modify code below this line.
module.exports = _;