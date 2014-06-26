Lists = new Meteor.Collection("lists", {
	transform: function (doc) { return new List(doc); }
});

Ideas = new Meteor.Collection("ideas", {
	transform: function (doc) { return new Idea(doc); }
});