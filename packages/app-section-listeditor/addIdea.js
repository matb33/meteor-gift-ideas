Template.addIdea.ideaText = function () {
	return Session.get("ideaText");
};

Template.addIdea.disabled = function () {
	return !Session.get("ideaText");
};

Template.addIdea.events({
	"submit form": function (evt, template) {
		evt.preventDefault();

		var text = Session.get("ideaText");

		Ideas.insert({text: text}, function (err, result) {
			if (!err) Session.set("ideaText", "");
			$text.focus();
		});
	},
	"keyup [name='text']": function (evt, template) {
		Session.set("ideaText", evt.target.value);
	}
});