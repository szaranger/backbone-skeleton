var CameraItemModel = Backbone.Model.extend({
	urlRoot: '/items',
	defaults: {
		category: 'Cameras',
		imagepath: 'no-image.jpg',
		name: '',
		megapixels: ''
	},

});