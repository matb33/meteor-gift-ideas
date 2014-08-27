Package.describe({
  summary: "HTML5 History API expansion for browsers not supporting pushState, replaceState",
  version: "4.0.5"
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');
  api.addFiles('HTML5-History-API/history.iegte8.js', 'client');
  api.addFiles('settings.js', 'client');
});