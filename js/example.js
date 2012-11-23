$(function() {      
	var api = $("body").zon_api({
		query:"subtitle:walfang",
		api_key:"[ZEIT_API_KEY_HERE]",
		endpoint:"content",
		params:{fields:"subtitle,href"},
		limit: 100
	});

	// show in browser
	api.retrieve(0, function (data){
		console.debug("1",data.get_result().matches);
		
		var results = data.get_result().matches;

		for (var i = 0; i < results.length; i++) {
			var item = results[i];

			$('.result').append('<li><a href="'+item.href+'">'+ item.subtitle + '</a></li>');
		} 

	});

});
