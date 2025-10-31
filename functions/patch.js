'use strict'

import SemVer from '../classes/semver.js'
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch
