'use strict'

import compare from './compare.js'
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq
