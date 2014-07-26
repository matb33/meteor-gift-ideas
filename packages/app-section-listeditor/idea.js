var timeout;

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

		Meteor.clearTimeout(timeout);
		timeout = Meteor.setTimeout(function () {
			if (checked) {
				if (!confirm("Someone has expressed interest in getting this. Are you sure you want to change the text?")) {
					$text.val(template.data.text);
					return;
				}
			}

			Ideas.update({_id: template.data._id}, {$set: {text: value}});
		}, delay);
	},
	"click [name='del']": function (evt, template) {
		if (template.data.checked) {
			if (!confirm("Are you sure you want to remove this? Someone has expressed interest in getting it.")) {
				return;
			}
		}

		Ideas.remove({_id: template.data._id});

		var $check = template.$("[name='check']");
		$check.tooltip("hide");
	}
});