UI.Component.renderPage = function (name, options) {
  if (!_.isString(name))
    name = Meteor.Router.page();

  if (!Template[name]) return null;
  return Template[name];//.extend({data: null});
};

UI.Component.currentPage = function() {
  return Meteor.Router.page();
};