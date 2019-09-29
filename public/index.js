// Put all onload AJAX calls here, and event listeners
$(document).ready(function() {


		$('#sendData').on('click', function() {
			let university = $('#university').val();
			let transportation = $('#transportation').val();
			let location = $('#location').val();
			let amount = $('#amount').val();
			let parent = $('#parent').val();
			let last = $('#last').val();
			let area = $('#study').val();
			let tuition=$('#tuition').val();
			let ship = $('#ship').val();
			let food = $('#food').val();

			location=location*8;
			transportation=transportation*8;
			amount=amount*8;
			food=food*8;
			$('#showRate').empty();
			$('#showFunding').empty();
			//$('#makeSure').empty();


			console.log(university, transportation,location,amount, parent, last, area);
			if(food != '' && ship != '' && transportation != '' && university != '' && location != '' && amount != '' && parent != '' && last != '' && area != '' && tuition != '') {
				console.log("IT'S NOT EMPTY");
			}
			else{
				//$('#makeSure').append("Fill in all areas");
				console.log("oh no, it's empty");
			}
			let funding = "Funding";
			let rate    = "Rate";
							$.ajax({
									type: 'POST',
									contentType: "application/x-www-form-urlencoded;charset=utf-8",									dataType: 'json',
									url: 'http://0.0.0.0:5000/',
									// data: {
									// 				Funding:funding,
									// 				Rate:rate
									// 			},
										data: JSON.stringify({
											'University':university,
											'Parents':parent,
											'Income':last,
											'Degree':area,
											'Tuition': tuition,
											'Housing': location,
											'Transport': transportation,
											'Lifestyle':amount,
											'Food': food,
											'Scholarship': ship
								}),
							success: function (data) {
									
									console.log("GOT THIS FROM YiFei's Awesome API --->" + data.Rate + " "+data.Funding);
									$('#showRate').append(Math.round(data.Rate*100*100)/100);
									$('#showFunding').append(data.Funding);
							},
							fail: function(error) {
									// Non-200 return, do something with error
									console.log(error);
							}
						});//end jquery
	});

});
