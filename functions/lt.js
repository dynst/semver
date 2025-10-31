'use strict'

import compare from './compare.js'
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt
