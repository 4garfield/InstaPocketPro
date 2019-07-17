// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      // require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-htmlfile-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'html'],
    htmlReporter: {
      outputFile: 'coverage/report.html',
      pageTitle: 'InstaPocketPro',
      subPageTitle: 'Unit Tests',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
