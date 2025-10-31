'use strict'

import { test } from 'tap'
import lte from '../../functions/lte.js'
import comparisons from '../fixtures/comparisons.js'
import equality from '../fixtures/equality.js'

test('comparison tests', t => {
  t.plan(comparisons.length)
  comparisons.forEach(([v0, v1, loose]) => t.test(`${v0} ${v1} ${loose}`, t => {
    t.plan(4)
    t.ok(!lte(v0, v1, loose), `!lte('${v0}', '${v1}')`)
    t.ok(lte(v1, v0, loose), `lte('${v1}', '${v0}')`)
    t.ok(lte(v1, v1, loose), `lte('${v1}', '${v1}')`)
    t.ok(lte(v0, v0, loose), `lte('${v0}', '${v0}')`)
  }))
})

test('equality tests', t => {
  t.plan(equality.length)
  equality.forEach(([v0, v1, loose]) => t.test(`${v0} ${v1} ${loose}`, t => {
    t.plan(2)
    t.ok(lte(v0, v1, loose), `lte(${v0}, ${v1})`)
    t.ok(lte(v1, v0, loose), `lte(${v1}, ${v0})`)
  }))
})
