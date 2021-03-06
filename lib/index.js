/*!
 * Copyright (c) 2018-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

if(require('semver').gte(process.version, '8.0.0')) {
  module.exports = require('./drivers');
} else {
  module.exports = require('../dist/node6/lib/drivers');
}
