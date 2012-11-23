$(function() {      
	var api = $("body").zon_api({
		query:"subtitle:walfang",
		api_key:"[ZEIT_API_KEY_HERE]",
		endpoint:"content",
		params:{fields:"subtitle,uri"},
		limit: 100
	});

	api.retrieve(0, function (data){
		console.debug("1",data.get_result());
		api.retrieve(2, function (data){
			console.debug("2",data.get_result());
			data.get_result().matches[0].uri.retrieve(0, function(data){
				console.debug(data.get_result());
			});
		});
	});
});
