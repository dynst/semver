'use strict'

import Benchmark from 'benchmark'
import parse from '../functions/parse.js'
const suite = new Benchmark.Suite()

import cases from '../test/fixtures/valid-versions.js'
import invalidCases from '../test/fixtures/invalid-versions.js'

for (const test of cases) {
  suite.add(`parse(${test[0]})`, function () {
    parse(test[0])
  })
}

for (const test of invalidCases) {
  suite.add(`invalid parse(${test[0]})`, function () {
    parse(test[0])
  })
}

suite
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run({ async: false })
