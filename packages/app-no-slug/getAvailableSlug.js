function rand(limit) {
	return Math.floor(Math.random() * limit);
}

function generateRandomWord(length) {
	var consonants = "bcdfghjklmnpqrstvwxyz";
	var vowels = "aeiou";
	var i, word = "", length = parseInt(length, 10);
	var consonants = consonants.split("");
	var vowels = vowels.split("");
	var randConsonant;

	for (i = 0; i < length / 2; i++) {
		randConsonant = consonants[rand(consonants.length)],
		randVowel = vowels[rand(vowels.length)];
		word += randConsonant;
		word += i * 2 < length - 1 ? randVowel : "";
	}

	return word;
}

function getUniqueSlug(start, end, tries) {
	var word;
	for (var i = start; i <= end; i += (1 / tries)) {
		word = generateRandomWord(Math.floor(i));
		if (!Lists.findOne({slug: word})) {
			return word;
		}
	}
	return false;
}

Meteor.methods({
	getAvailableSlug: function () {
		return getUniqueSlug(3, 50, 10);
	}
});