'use strict'

import { test } from 'tap'
import compareLoose from '../../functions/compare-loose.js'
import SemVer from '../../classes/semver.js'
import eq from '../../functions/eq.js'

test('strict vs loose version numbers', (t) => {
  [['=1.2.3', '1.2.3'],
    ['01.02.03', '1.2.3'],
    ['1.2.3-beta.01', '1.2.3-beta.1'],
    ['   =1.2.3', '1.2.3'],
    ['1.2.3foo', '1.2.3-foo'],
  ].forEach((v) => {
    const loose = v[0]
    const strict = v[1]
    t.throws(() => {
      SemVer(loose) // eslint-disable-line no-new
    })
    const lv = new SemVer(loose, true)
    t.equal(lv.version, strict)
    t.ok(eq(loose, strict, true))
    t.throws(() => {
      eq(loose, strict)
    })
    t.throws(() => {
      new SemVer(strict).compare(loose)
    })
    t.equal(compareLoose(v[0], v[1]), 0)
  })
  t.end()
})
