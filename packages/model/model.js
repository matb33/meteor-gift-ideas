Model = function (collection) {
	return function (/* doc | docId */) {
		this.collection = collection;
		return _.extend(this, _.isString(arguments[0]) ? collection.findOne({_id: arguments[0]}) : arguments[0]);
	};
};