UI.registerHelper("renderPage", function (name) {
  if (!_.isString(name))
    name = Meteor.Router.page();

  if (!Template[name]) return null;
  return Template[name];//.extend({data: null});
});

UI.registerHelper("currentPage", function () {
  return Meteor.Router.page();
});