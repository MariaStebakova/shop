// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false
        },
        coverageReporter: {
            dir: require('path').join(__dirname, '../coverage/shop'),
            subdir: '',
            reports: ['html', 'text-summary']
        },
        reporters: ['progress', 'kjhtml'],
        autoWatch: true,
        browsers: ['Chrome'],
        restartOnFileChange: true
    });
};