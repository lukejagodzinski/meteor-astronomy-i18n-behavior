Package.describe({
  summary: 'The i18n behavior for Meteor Astronomy',
  version: '1.0.0-rc.1',
  name: 'jagi:astronomy-i18n-behavior',
  git: 'https://github.com/jagi/meteor-astronomy-i18n-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('jagi:astronomy@2.0.0-rc.1');
});
