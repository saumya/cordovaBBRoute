define('view/backboneEntryView',
	[],
	function(){
		//get the template
		
		var BBApplicationView = Backbone.View.extend({

			initialize: function(){
				console.log('BBApplicationView : initialize : ');
				//compile the template and store
				this.templateString=$('#tpl_page').html();//get the template
				this.compiledTeamplate=_.template(this.templateString);//compile and save to use later with data
				//hack render now
				this.render();
			},
			render: function(){
				console.log('BBApplicationView : render : ');
				//$('body').html('Hello World!');
				//
		        //$.mobile.navigate( "#bar" ); // change the URL
		        //$.mobile.changePage( "#one");// chagne the jquery mobile page
				//send data to the compiled template
				var v = this.compiledTeamplate({data:"BackboneJS"});
				//render the compiled template with data
				//$('body').html(v);
				$('#hackPage').html(v);
				//change url
				//$.mobile.navigate( "#one" );
				//change jquery page
				//$.mobile.changePage("#one");
			},
			destroy: function(){
				console.log('BBApplicationView : destroy : ');
			}
		});
		return BBApplicationView;

});