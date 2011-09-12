// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x << y returns ToNumber(x) << ToNumber(y)
 *
 * @section 11.7.1
 * @path 11_Expressions/11.7_Bitwise_Shift_Operators/11.7.1_The_Left_shift_Operator/S11.7.1_A3_T1.4.js
 * @description Type(x) and Type(y) vary between Null and Undefined
 */

//CHECK#1
if (null << undefined !== 0) {
  $ERROR('#1: null << undefined === 0. Actual: ' + (null << undefined));
}

//CHECK#2
if (undefined << null !== 0) {
  $ERROR('#2: undefined << null === 0. Actual: ' + (undefined << null));
}

//CHECK#3
if (undefined << undefined !== 0) {
  $ERROR('#3: undefined << undefined === 0. Actual: ' + (undefined << undefined));
}

//CHECK#4
if (null << null !== 0) {
  $ERROR('#4: null << null === 0. Actual: ' + (null << null));
}
