define('controller/backboneController',
	['router/backboneRouter','view/backboneEntryView'],
	function(BBRouter,BBEntryView){
	var BBApplicationController = Backbone.View.extend({
		initialize: function(){
			console.log('BBApplicationController : initialize : ');
			

			
		},
		render: function(){
			console.log('BBApplicationController : render : ');
			//dispatch the creation complete event
			this.trigger('BBAppController:onCreationComplete');
		},
		initForApplication: function(){
			console.log('BBApplicationController : initForApplication : ');
			var router= new BBRouter();
			router.on('BBRouter:index',this.onIndex,this);
			//var bb= new BBEntryView();
			//finally enable the Router
			Backbone.history.start();
		},
		//EventHandlers
		onIndex: function(event){
			console.log('BBApplicationController : onIndex : ');
			var bb = new BBEntryView();
			
		},

		destroy: function(){
			console.log('BBApplicationController : destroy : ');
		}
	});
	return BBApplicationController;
});