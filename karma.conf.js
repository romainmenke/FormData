function files() {
  if (process.env['POLYFILL']) {
    if (process.env['SIMULATE'] === 'FILE_CONSTRUCTOR_THROW') {
      return [
        'test/remove-native.js',
        'test/simulate-file-constructor-throw.js',
        'formdata.min.js',
        'test/test.js'
      ];
    }

    return [
      'test/remove-native.js',
      'formdata.min.js',
      'test/test.js'
    ];
  }

  return [
    'formdata.min.js',
    'test/test.js'
  ];
}

function customLaunchers() {
  if (process.env['CHROME_HEADLESS_NO_SANDBOX'] === 'true') {
    return {
      ChromeHeadlessMaybeSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    };
  }

  return {
    ChromeHeadlessMaybeSandbox: {
      base: 'ChromeHeadless',
      flags: []
    }
  };
}

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: files(),
    reporters: ['progress'],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadlessMaybeSandbox'],
    customLaunchers: customLaunchers(),
    autoWatch: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  })
}
