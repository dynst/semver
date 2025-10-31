'use strict'

import { test } from 'tap'
import rcompare from '../../functions/rcompare.js'

test('rcompare', (t) => {
  t.equal(rcompare('1.0.0', '1.0.1'), 1)
  t.equal(rcompare('1.0.0', '1.0.0'), 0)
  t.equal(rcompare('1.0.0+0', '1.0.0'), 0)
  t.equal(rcompare('1.0.1', '1.0.0'), -1)

  t.end()
})
