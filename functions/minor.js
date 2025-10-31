'use strict'

import SemVer from '../classes/semver.js'
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor
