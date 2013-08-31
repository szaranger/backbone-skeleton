var CameraItemModel = Backbone.Model.extend({
	urlRoot: '/items',
	defaults: {
		category: 'Entreés',
		imagepath: 'no-image.jpg',
		name: '',
		megapixels: ''
	}
});