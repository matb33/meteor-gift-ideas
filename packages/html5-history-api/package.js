Package.describe({
  summary: "HTML5 History API expansion for browsers not supporting pushState, replaceState"
});

Package.on_use(function (api, where) {
  api.add_files('HTML5-History-API/history.iegte8.js', 'client');
  api.add_files('settings.js', 'client');
});