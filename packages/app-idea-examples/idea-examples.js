if (Meteor.isClient) {
	IdeaExamples = {
		data: false,
		getRandom: function (cb) {
			var self = this;
			var func = function () { return cb(_.sample(self.data)); };

			if (self.data) return func();

			Meteor.call("getIdeaExamples", function (err, result) {
				if (err) return false;
				self.data = result;
				return func();
			});
		}
	};
}

if (Meteor.isServer) {
	Meteor.methods({
		"getIdeaExamples": function () {
			var txt = Assets.getText("idea-examples.txt");
			return txt.split("\n");
		}
	});
}