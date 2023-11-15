"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */



// Question 1

// DONE  Define a function named `isTrue`
// DONE  takes in any input
// DONE  returns true if the input provided is exactly equal to `true`

function isTrue(input) {
    return input === true;
}
// const isTrue = input => input === true;



// Question 2

// Define a function named `isFalse`
// takes in a value
// returns true if input exactly equal to false

function isFalse(input) {
    return input === false;
}


// Question 5

// DONE  Define a function named `isEven`
// DONE  takes in a single input
// If the input is an even number or a string containing an even number, return `true`
// Any other input should return false


const isEven = (input) => {

    if(typeof input === 'boolean') {
        return false;
    }
    return input % 2 === 0;


    // if(
    //     typeof input === 'number'
    //     || typeof input === 'string'
    //     && !isNaN(input)
    // ) {
    //     return input % 2 === 0;
    // }
    // return false;

    // if(typeof input === 'number') {
    //     return input % 2 === 0;
    // }
    //
    // if(typeof input === 'boolean') {
    //     return false;
    // }
    //
    // if(typeof input === 'string') {
    //     if(!isNaN(input)) {
    //         return input % 2 === 0;
    //     } else {
    //         return false;
    //     }
    // }


}

// const isEven = input => typeof input === 'boolean' ? false : input % 2 === 0;




// Question 10

// DONE  Define a function named `concat`
// DONE  takes in two input arguments
// DONE  If both arguments are strings, then return the concatenated result
// If two numbers are provided, then return the string concatenation of each set of numerals.

function concat(input1, input2) {
    return String(input1) + String(input2);
    // if(
    //     typeof input1 === 'string'
    //     && typeof input2 === 'string'
    // ) {
    //     return input1 + input2;
    // }
    // if(
    //     typeof input1 === 'number'
    //     && typeof input2 === 'number'
    // ) {
    //     return String(input1) + String(input2);
    // }
    // if(
    //     typeof input1 === 'boolean'
    //     && typeof input2 === 'boolean'
    // ) {
    //     return String(input1) + String(input2);
    // }
}

// const concat = (input1, input2) => String(input1) + String(input2);















