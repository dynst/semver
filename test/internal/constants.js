'use strict'

import t from 'tap'
import constants from '../../internal/constants.js'

t.match(constants, {
  MAX_LENGTH: Number,
  MAX_SAFE_COMPONENT_LENGTH: Number,
  MAX_SAFE_INTEGER: Number,
  RELEASE_TYPES: Array,
  SEMVER_SPEC_VERSION: String,
}, 'got appropriate data types exported')
