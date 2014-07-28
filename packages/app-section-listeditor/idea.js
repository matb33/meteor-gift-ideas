var timeout;

Template.idea.rendered = function () {
	var self = this;
	var $idea = this.$(self.firstNode);
	var index = $idea.index();
	Meteor.setTimeout(function () {
		$idea.addClass("rendered");
	}, 15 + (10 * index));
};

Template.idea.events({
	"click .check": function (evt, template) {
		var self = this;
		var $check = template.$("[name='check']");
		var checked = !template.data.checked;

		Ideas.update({_id: template.data._id}, {$set: {checked: checked}});

		Meteor.clearTimeout(self.tooltipTimeout);

		if (checked) {
			$check.tooltip("show");
			self.tooltipTimeout = Meteor.setTimeout(function () {
				$check.tooltip("hide");
			}, 3000);
		} else {
			$check.tooltip("hide");
		}
	},
	"keyup [name='text']": function (evt, template) {
		var $text = template.$(evt.target);
		var value = $text.val();
		var checked = template.data.checked;
		var delay = 0;

		if (evt.keyCode === 13) delay = 500;
		if (checked) delay = 750;

		var func = function () {
			Ideas.update({_id: template.data._id}, {$set: {text: value}});
		};

		Meteor.clearTimeout(timeout);
		timeout = Meteor.setTimeout(function () {
			if (checked) {
				confirm("Someone has expressed interest in getting this. Are you sure you want to change the text?", function (result) {
					if (result) return func();
					$text.val(template.data.text);
				});
			} else {
				func();
			}
		}, delay);
	},
	"click [name='del']": function (evt, template) {
		var func = function () {
			var $check = template.$("[name='check']");
			$check.tooltip("hide");

			Ideas.remove({_id: template.data._id});
		};

		if (template.data.checked) {
			confirm("Are you sure you want to remove this gift idea? Someone has expressed interest in getting it.", function (result) {
				result && func();
			});
		} else {
			func();
		}
	}
});