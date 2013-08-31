var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"cameras/new": "itemForm",
		"cameras/compare": "compare",
		"cameras/": "list",
		"cameras/:item": "details",
	},

	initialize: function  () {
		// collections
		this.cameraItems = new CameraItems();
		this.compareResults = new CompareResults();
		
		// models
		this.cameraItemModel = new CameraItemModel();
		this.compareResultModel = new CompareResultModel();
			
		// views
		this.cameraItemView = new CameraItemView({model: this.cameraItemModel});
		this.cameraView = new CameraView({collection: this.cameraItems});
		this.cameraFormView = new CameraFormView({model: new CameraItemModel()});
		this.compareView = new CompareView({collection: this.cameraItems});
	
	},

	list: function () {
		$('#app').html(this.cameraView.render().el);
	},
    details: function (item) {	
		this.cameraItemView.model = this.cameraItems.get(item);
		$('#app').html(this.cameraItemView.render().el);
	},
    itemForm: function () {
		$('#app').html(this.cameraFormView.render().el);
	},
	compare: function () {
		$('#app').html(this.compareView.render().el);
	},
	back: function() {
	    if(this.routesHit > 1) {
	      window.history.back();
	    } else {
	      this.navigate('app/', {trigger:true, replace:true});
	    }
  }
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});