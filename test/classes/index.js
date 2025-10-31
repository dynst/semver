import * as exported from '../../classes/index.js'
import SemVer from '../../classes/semver.js'
import Range from '../../classes/range.js'
import Comparator from '../../classes/comparator.js'

import t from 'tap'
t.same(exported, {
  SemVer,
  Range,
  Comparator,
}, 'export all classes at semver/classes')
