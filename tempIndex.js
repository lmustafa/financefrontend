// Put all onload AJAX calls here, and event listeners
$(document).ready(function() {


		$('#sendData').on('click', function() {
			let university = $('#university').val();
			let area = $('#area').val();
			let location = $('#location').val();
			let amount = $('#amount').val();
			let parent = $('#parent').val();
			let last = $('#last').val();
			let study = $('#study').val();

			if(university != '' && area != '' && location != '' && amount != '' && parent != '' && last != '' && study != '') {
				console.log("IT'S NOT EMPTY");
			}
			else{
				$('#makeSure').append("Fill in all areas");
				console.log("oh no, it's empty");
			}

			let funding = "Funding";
			let rate    = "Rate";
							$.ajax({
									type: 'POST',
									// contentType:"application/x-www-form-urlencoded;charset=utf-8",
									dataType: 'json',
									url: 'http://0.0.0.0:5000/',
									data: {
													University:university,
													Parents:parent,
													Income:last,
													Degree:study,
													Tuition: tuition,
													Housing: area,
													Transport: location,
													Lifestyle:amount,
												},
							// 		data: JSON.stringify({
							// 	'Funding': 'bar',
							// 	'Rate': 'no$libri'
							// }),
									success: function (data) {

									console.log("GOT THIS FROM POSTMAN --->" + data);
							},
							fail: function(error) {
									// Non-200 return, do something with error
									console.log(error);
							}
						});//end jquery
	});

});
