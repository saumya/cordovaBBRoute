define('controller/backboneController',
	['router/backboneRouter','view/backboneEntryView'],
	function(BBRouter,BBEntryView){
	var BBApplicationController = Backbone.View.extend({
		initialize: function(){
			console.log('BBApplicationController : initialize : ');
			var router= new BBRouter();
			var bb= new BBEntryView();
			
			//finally enable the Router
			Backbone.history.start();
		},
		render: function(){
			console.log('BBApplicationController : render : ');
		},
		destroy: function(){
			console.log('BBApplicationController : destroy : ');
		}
	});
	return BBApplicationController;
});