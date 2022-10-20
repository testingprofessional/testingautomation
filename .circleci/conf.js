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
        'functional/addcustomer.spec.js',
    ],
    capabilities: {
        'browserName': 'Chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        },
    },
    suites: {
        smoke: ['./smoke/*.spec.js'],
        regression: ['./regression/*.spec.js'],
        all: ['./*/*.spec.js'],
        selected: ['./functional/addcustomer.spec.js', './regression/openaccount.spec.js'],
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(25000);


        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'testReport/screenshots'
            }));
    },
    onComplete: function () {
        var sys = require('util')
        var exec = require('child_process').exec;
        function puts(error, stdout, stderr) {
            sys.puts(stdout)
        }
        exec("node temp_mail.js", puts);
    },
}