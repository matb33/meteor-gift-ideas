Package.describe({
  summary: "A reactive router built on page.js",
  version: "0.5.5"
});

Npm.depends({
  'connect': '2.7.10'
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');

  api.use('deps', 'client');
  api.use('startup', 'client');
  api.use('templating', 'client');
  api.use('ui', 'client');
  api.use('page-js-ie-support', 'client');
  api.use('underscore', ['client', 'server']);
  api.use('html5-history-api', 'client', {weak: true});
  
  api.addFiles('lib/router_client.js', 'client');
  api.addFiles('lib/router_helpers.js', 'client');
  api.addFiles('lib/router_server.js', 'server');
  api.addFiles('lib/router_common.js', ['client', 'server']);
  
  // for backward compat before Meteor linker changes
  if (typeof api.export !== 'undefined') {
    //api.use('webapp', 'server');
  }
});


Package.onTest(function (api) {
  api.use('router', ['client', 'server']);
  api.use('test-helpers', ['client', 'server']);
  api.use('tinytest', ['client', 'server']);
  
  api.use('session', 'client');
  api.addFiles('tests/router_client_tests.js', 'client');
  
  api.use('http', 'server');
  api.addFiles('tests/router_server_tests.js', 'server');
  
  api.addFiles('tests/router_common_tests.js', ['client', 'server']);
});
