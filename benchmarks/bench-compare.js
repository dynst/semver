import Benchmark from 'benchmark'
import SemVer from '../classes/semver.js'
const suite = new Benchmark.Suite()

import comparisons from '../test/fixtures/comparisons.js'

for (const [v0, v1] of comparisons) {
  suite.add(`compare ${v0} to ${v1}`, function () {
    const semver = new SemVer(v0)
    semver.compare(v1)
  })
}

suite
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run({ async: false })
