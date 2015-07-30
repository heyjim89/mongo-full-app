$(function(){

	$('#hero-create').on('submit', function(event){
		event.preventDefault();

		$.ajax({
			method : 'POST',
			url	   : '/create-hero',
			data   : $(this).serialize()
			success : function(dataFromServer){
				console.log('Return', dataFromServer)
			}
		})
	})

	$('#get-heroes').on('click', function(){
		$.ajax({
			method : 'GET',
			url    : '/get-heroes',
			success : function(dataFromServer){
				console.log('Here they are:', dataFromServer)
			}
		})
	})

});