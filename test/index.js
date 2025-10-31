'use strict'

import t from 'tap'
import semver from '../index.js'
import { SEMVER_SPEC_VERSION } from '../internal/constants.js'

t.match(Object.getOwnPropertyDescriptor(semver, 'SEMVER_SPEC_VERSION'), {
  get: undefined,
  set: undefined,
  value: SEMVER_SPEC_VERSION,
  configurable: true,
  enumerable: true,
}, 'just a normal value property')
