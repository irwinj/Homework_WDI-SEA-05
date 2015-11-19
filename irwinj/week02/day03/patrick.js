$.ajax({
method : 'GET',
url    : 'https://api.doughnuts.ga/doughnuts',
success : function(response, textStatus, sink){
console.log(response);
}
});