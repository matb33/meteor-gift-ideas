Template.idea.events({
	"click [name='check'], click .col-check": function (evt, template) {
		Ideas.update({_id: template.data._id}, {$set: {checked: !template.data.checked}});
	},
	"click [name='del']": function (evt, template) {
		//if (confirm("Are you sure?")) {
			Ideas.remove({_id: template.data._id});
		//}
	}
});