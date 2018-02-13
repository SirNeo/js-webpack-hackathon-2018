// Karma configuration
var webpack = require('webpack')

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

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'/*,'sinon-chai'*//*,'phantomjs-shim'*/],
    // list of files / patterns to load in the browser
    files: [
      //{pattern: 'test/**/*spec.js', included: true},
      //{pattern: 'test/*spec.js', included: true}
      
      // only specify one entry point
      // and require all tests in there
      'test/test_index.js'
    ],
    // list of files / patterns to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'test/*spec.js':  ['webpack'/*,'sourcemap'*/],
      //'test/**/*spec.js':  ['webpack'/*,'sourcemap'*/]

      // add webpack as preprocessor
      'test/test_index.js': ['webpack','sourcemap']
    },
    // webpack configuration
    // webpack: require("./config/dev.webpack.config.js"),
    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      devtool: 'inline-source-map',

      // resolve: {
      //   extensions: ['', '.js']
      // },
      // module: {}
      module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=env' }
        ]
    },
    },

    webpackMiddleware: {
      stats: "errors-only"
      //noInfo: true
      // stats: {
      //   colors: true
      // }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','spec','coverage'],

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
    browsers: ['PhantomJS','Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // List plugins explicitly, since autoloading karma-webpack
    // won't work here
    plugins: [
      require('karma-mocha'),
      require('karma-spec-reporter'),
      require('karma-chrome-launcher'),
      //require('../../dist/karma-webpack')
      require('./node_modules/karma-webpack/lib/karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-coverage'),
      require('karma-chai'),
      require('sinon'),
      require('sinon-chai')
      
    ],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
