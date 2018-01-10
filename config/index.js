'use strict';

const merge = require('lodash/merge');

// Load .env settings into process.env
// Will fail silently if no .env file present.
require('dotenv').config();

// Load our own defaults
const config = require('./env/defaults');

// Load environment-specific settings
let localConfig;
try {
  // The environment file might not exist
  localConfig = require(`./env/${config.env}`);
  localConfig = localConfig || {};
} catch(err) {
  localConfig = {};
}

// merge the config files
// localConfig will override defaults
const envConfig = merge({}, config, localConfig);

module.exports = envConfig;