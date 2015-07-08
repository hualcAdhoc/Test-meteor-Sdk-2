Package.describe({
  name: 'hualc:h5sdktest1',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'h5-sdk pack for meteor-based app',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('h5sdktest1.js');
});
