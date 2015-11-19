$(document).ready(function() {

//populate items from local storage
	// var items = JSON.parse(localStorage.getItem('todos'));
	// items.forEach(function(item) {
	// 	createToDo();
	// });

	// $('#todo-list').sortable();
	// $('#todo-list').disableSelection();

//event listeners

//save button event listener
// $('#save-button').click(function() {
// 	var listArray = [];
// 	$('.todo-item').each(function(index.value) {
// 		listArray.push(value.innerHTML);
// 	});

// 	localStorage.setItems('todos', JSON.)
// })

	$('form').submit(function () {
	    if ($('input').val() !== '') {
	        var input_value = $('input').val();
	        $('ul').append('<li>' + input_value + '<a href="">x</a></li>');
	    };
	    $('input').val('');
	    return false;
	});

	$(document).on('click', 'a', function (e) {
	    e.preventDefault();
	    $(this).parent().remove();
	});

	//makes the form able to move choices
		$('ul').sortable();
		$('ul').disableSelection();
})