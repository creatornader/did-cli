/*!
 * Copyright (c) 2017-2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const helpers = require('./helpers');
const logger = require('./logger');

module.exports = async ({options, didDocument, operationType = 'create'}) => {
  const v1 = helpers.getV1(options);
  if(operationType === 'create') {
    logger._log(options, 'Preparing to register a DID on Veres One...');
    try {
      await v1.register({didDocument});
      logger._log(options, 'DID registration sent to ledger.');
    } catch(e) {
      console.log('An error occurred:', e.message);
    }
  }
  if(operationType === 'update') {
    logger._log(options, 'Preparing to update a DID Document on Veres One...');
    try {
      await v1.update({didDocument});
      logger._log(options, 'DID update sent to ledger.');
    } catch(e) {
      console.log('An error occurred:', e.message);
    }
  }
  logger._log(options, 'Please wait ~15-30 seconds for ledger consensus.');
  logger._log(options, 'You may use the `info` command to monitor the ' +
    'registration of your DID.');
};
