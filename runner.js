const { createRunner } = require("atom-jasmine3-test-runner")

// https://github.com/UziTech/atom-jasmine3-test-runner#api
module.exports = createRunner({
    testPackages: [],
    timeReporter : true,
    specHelper: true,
    attachToDOM: true,
    legacySuffix: "-spec-v1",
    // Extra Packages
    customMatchers: true,
    jasmineFocused: true,
    jasmineJson: false,
    jasminePass: false,
    jasmineShouldFail: false,
    jasmineTagged: false,
    mockClock: true,
    mockLocalStorage: false,
    profile: true,
    unspy: false,
})
