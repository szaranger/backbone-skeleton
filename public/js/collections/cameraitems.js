var CameraItems = Backbone.Collection.extend({
	comparator: 'name',
	model: CameraItemModel,
	url: '/items'
});


