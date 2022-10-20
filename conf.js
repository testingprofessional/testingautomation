var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
require('dotenv').config();
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    restartBrowserBetweenTests: false,
    framework: 'jasmine',
    useAllAngular2AppRoots: true,
    'jasmineNodeOpts': {
        showColors: true,
        defaultTimeoutInterval: 100000,
        isVerbose: true
    },
    specs: [
        'protractor/testspec.js'
    ]
}
