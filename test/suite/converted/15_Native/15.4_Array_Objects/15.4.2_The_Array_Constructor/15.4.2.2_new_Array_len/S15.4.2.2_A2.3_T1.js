// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If the argument len is not a Number, then the length property of
 * the newly constructed object is set to 1 and the 0 property of
 * the newly constructed object is set to len
 *
 * @section 15.4.2.2
 * @path 15_Native/15.4_Array_Objects/15.4.2_The_Array_Constructor/15.4.2.2_new_Array_len/S15.4.2.2_A2.3_T1.js
 * @description Checking for null and undefined
 */

var x = new Array(null);

//CHECK#1 
if (x.length !== 1) {
  $ERROR('#1: var x = new Array(null); x.length === 1. Actual: ' + (x.length));
}

//CHECK#2
if (x[0] !== null) {
  $ERROR('#2: var x = new Array(null); x[0] === null. Actual: ' + (x[0]));
}

var x = new Array(undefined);

//CHECK#3 
if (x.length !== 1) {
  $ERROR('#3: var x = new Array(undefined); x.length === 1. Actual: ' + (x.length));
}

//CHECK#4
if (x[0] !== undefined) {
  $ERROR('#4: var x = new Array(undefined); x[0] === undefined. Actual: ' + (x[0]));
}
