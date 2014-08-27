Package.describe({
  summary: "Tiny ~1200 byte Express-inspired client-side router",
  version: "1.3.3"
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');
  api.addFiles('page-js/index.js', 'client');
});