// Karma configuration
var webpack = require('webpack'),
    path = require('path');

var configSettings = { // eslint-disable-line no-unused-vars
  normal: {},
  uglified: {
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'/*,'sinon-chai'*//*,'phantomjs-shim'*/],
    files: [ 'test/index.js' ], // only specify one entry pointand require all tests in there 
    exclude: [], // list of files / patterns to exclude
    // preprocess matching files before serving them to the browser available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack','sourcemap','coverage'],
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader?presets[]=env' 
            },
            // instrument only testing sources with Istanbul 
            {
              test: /\.js$/,
              use: { 
                loader: 'istanbul-instrumenter-loader',
                //options: { esModules: true }
              },
              enforce: 'post',
              include: path.resolve('src/'),
              exclude: /node_modules|\.spec\.js$/
            }
        ]
    },
    },

    webpackMiddleware: {
      stats: "errors-only"
      //noInfo: true  //please don't spam the console when running in karma!
      // stats: {
      //   colors: true
      // }
    },
    reporters: ['progress','coverage-istanbul'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // List plugins explicitly, since autoloading karma-webpack
    // won't work here
    plugins: [
      // anything named karma-* is normally auto included so you probably dont need this
      require('karma-mocha'),
      require('karma-spec-reporter'),
      require('karma-chrome-launcher'),
      require('./node_modules/karma-webpack/lib/karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-coverage'),
      require('karma-chai'), // pendiente revisar
      require('sinon'), // pendiente revisar
      require('sinon-chai'), // pendiente revisar
      require('karma-coverage-istanbul-reporter'),
    ],

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: path.join(__dirname, 'coverage'),
      // Combines coverage information from multiple browsers into one report rather than outputting a report
      // for each browser.
      combineBrowserReports: true,
      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,
      // stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped`
      skipFilesWithNoCoverage: true,

       // enforce percentage thresholds
       // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
       thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        global: { // thresholds for all files
          statements: 50,
          lines: 50,
          branches: 50,
          functions: 50
        },
        each: { // thresholds per file
          statements: 10,
          lines: 10,
          branches: 10,
          functions: 10,
        }
      }
    }

  })
}
