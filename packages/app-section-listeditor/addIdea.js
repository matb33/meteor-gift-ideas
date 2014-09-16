Meteor.startup(function () {
	IdeaExamples.getRandom(function (ideaExample) {
		Session.set("ideaExample", ideaExample);
	});
});

Template.addIdea.disabled = function () {
	return !Session.get("ideaText");
};

Template.addIdea.ideaExample = function () {
	return Session.get("ideaExample");
};

Template.addIdea.events({
	"submit form": function (evt, template) {
		evt.preventDefault();

		var $text = template.$("[name='text']");
		var text = $text.val();

		Ideas.insert({text: text}, function (err, result) {
			if (!err) $text.val("");

			IdeaExamples.getRandom(function (ideaExample) {
				Session.set("ideaExample", ideaExample);
			});

			// Force dismissing the keyboard in iOS
			$text.blur().focus();
		});
	},
	"keyup [name='text'], keydown [name='text'], change [name='text']": function (evt, template) {
		Session.set("ideaText", evt.target.value);
	}
});