$('a.title.').on('click.hello', function(event){
	event.preventDefault();

	console.log($(this).attr('href'));
	});

	$('a.title').off('click.hello'));