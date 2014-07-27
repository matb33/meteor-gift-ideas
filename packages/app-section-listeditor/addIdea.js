Meteor.startup(function () {
	Session.set("ideaExample", getRandomIdeaExample());
});

Template.addIdea.ideaText = function () {
	return Session.get("ideaText");
};

Template.addIdea.disabled = function () {
	return !Session.get("ideaText");
};

Template.addIdea.ideaExample = function () {
	return Session.get("ideaExample");
};

Template.addIdea.events({
	"submit form": function (evt, template) {
		evt.preventDefault();

		var text = Session.get("ideaText");

		Ideas.insert({text: text}, function (err, result) {
			if (!err) Session.set("ideaText", "");
			var $text = template.$("[name='text']");
			$text.focus();
			Session.set("ideaExample", getRandomIdeaExample());
		});
	},
	"keyup [name='text']": function (evt, template) {
		Session.set("ideaText", evt.target.value);
	}
});

function getRandomIdeaExample() {
	var ideas = [
		"Minecraft Creeper Backpack",
		"R2-D9 USB Car Charger",
		"Iron Man 3 Tony Stark Light-Up LED Shirt",
		"Star Trek TNG Uniform Tee",
		"3D Deco Superhero Wall Lights",
		"Half-Life 2 Zero Point Energy Field Manipulator Replica",
		"Aftershokz Bluez 2 - Wireless Bone Conduction Headphones",
		"Portal 2 Aperture Laboratories Messenger Bag",
		"Star Wars Millennium Falcon Bottle Opener",
		"GCW-ZERO - Open Source Gaming Console",
		"Star Wars Death Star Rug",
		"Minecraft Light-Up Diamond Ore",
		"Star Wars Force FX Removable Blade Lightsabers",
		"Portal 2 Atlas and P-Body Figures",
		"Star Wars LIGHT UP Chop Sabers",
		"Minecraft Foam Gold Pickaxe",
		"Doctor Who Beach Towel",
		"Designer Star Wars Watch",
		"Doctor Who TARDIS Collector Series Watch",
		"3Doodler 3D Printing Pen",
		"Light Show Fountain Speakers",
		"Team Fortress 2 Figure",
		"Star Wars Lightsaber Desk Lamp",
		"Star Wars Lamp",
		"Portal 2 Sentry Turret USB Desk Defender",
		"Minecraft Foam Diamond Sword and Pickaxe",
		"Tetris Stackable LED Desk Lamp",
		"Retro Video Game Collectible Enamel Pin Set Series 3",
		"Doctor Who TARDIS Throw Blanket",
		"Star Wars R2-D2 Measuring Cup Set",
		"Minecraft Papercraft Set",
		"Star Trek TNG Pajama Set",
		"Star Wars Millennium Falcon Windshield Sunshade",
		"Mass Effect 3 Commander Shepard Statue",
		"Iron Man Mark V Armor Suitcase Mobile Fuel Cell",
		"10th Doctor Sonic Screwdriver Exclusive Programmable TV Remote",
		"N7 Elite Armor Stripe Hoodie",
		"Harry Potter House Robe",
		"Star Trek The Next Generation Uniform Hoodie",
		"Periodic Table of Elements Blanket",
		"Build-On Brick Mug",
		"Organ Transport Lunch Cooler",
		"Fallout Bobblehead",
		"Electronic Butterfly in a Jar",
		"Necomimi Brainwave Cat Ears",
		"Rubik's Cube Lamp",
		"Batman Skyline Logo T-Shirt"
	];

	return _.sample(ideas);
}