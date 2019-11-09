'use strict';

// An example configuration file.
exports.config = {
// The address of a running selenium server.
seleniumAddress: 'http://localhost:4422/wd/hub',
//seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

// Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['spec.js'],
    
    allScriptsTimeout: 11000,
};