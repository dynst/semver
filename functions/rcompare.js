'use strict'

import compare from './compare.js'
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare
