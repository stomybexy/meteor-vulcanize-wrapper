Package.describe({
  name: 'jonatan:vulcanize-wrapper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrap vulcanize to bypass an obscure bug.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    'vulcanize':'1.14.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('vulcanize-wrapper.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jonatan:vulcanize-wrapper');
  api.mainModule('vulcanize-wrapper-tests.js');
});
