'use strict'

import t from 'tap'
import preload from '../preload.js'
import index from '../index.js'
t.equal(preload, index, 'preload and index match')
