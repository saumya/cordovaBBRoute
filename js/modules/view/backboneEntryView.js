define('view/backboneEntryView',
	[],
	function(){
		var BBApplicationView = Backbone.View.extend({
			initialize: function(){
				console.log('BBApplicationView : initialize : ');
			},
			render: function(){
				console.log('BBApplicationView : render : ');
			},
			destroy: function(){
				console.log('BBApplicationView : destroy : ');
			}
		});
		return BBApplicationView;

});