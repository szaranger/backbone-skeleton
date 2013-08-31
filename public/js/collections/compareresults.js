var CompareResults = Backbone.Collection.extend({
	comparator: 'name',
	model: CompareResultModel,
	url: '/items'
});


