
var CompareView = Backbone.View.extend({
	
	events: {
		'click #compare' : 'compare',
		'click #compare-another' : 'compareAnother'
	},

	initialize: function  () {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},
	
	render: function () {
		this.$el.html(Handlebars.templates.compare(this.collection));
		
		var items = [];
		var cameraItemsLeft = [];
		var cameraItemsRight = [];
		
		_.each(this.collection.models, function(model) {
			items.push(model.attributes.name);
		});
			
		cameraItemsLeft = cameraItemsRight = items;
		
		this.$('#cameraItemsLeft').autocomplete({ 
			source: cameraItemsLeft, 
			minLength: 2,
			autoFill: true, 
			select: function(event, ui) {
				cameraItemsRight.splice( cameraItemsRight.indexOf( ui.item.value ), 1 );
				cameraItemsLeft = items;
			}
		});
		this.$('#cameraItemsRight').autocomplete({ 
			source: cameraItemsRight, 
			minLength: 2,
			autoFill: true, 
			select: function(event, ui) {
				cameraItemsLeft.splice( cameraItemsLeft.indexOf( ui.item.value ), 1 );
				cameraItemsRight = items;
			}
		});
		
 		return this;
	},
	
	
	compare : function () {

		var compareCollection = new Backbone.Collection();

		_.each(this.collection.models, function(model) {
			if(model.attributes.name == $('#cameraItemsLeft').val()){
				compareCollection.models[0] = model;
			}
			if(model.attributes.name == $('#cameraItemsRight').val()){
				compareCollection.models[1] = model;
			}
		});

		if(compareCollection.models[0] != null && compareCollection.models[1] != null)
			this.$el.html(Handlebars.templates.compareresult(compareCollection));
	},
	
	compareAnother : function() {

		this.$el.html(Handlebars.templates.compare(this.collection));
	}
});





