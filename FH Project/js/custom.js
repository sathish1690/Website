
<!-- City Selection Radio button -->
$(document).ready(function(){
  $("#id_radio1").click(function(){
    $("#div1").show();
	$("#div2").hide();
	$("#div3").hide();
  });
  $("#id_radio2").click(function(){
    $("#div2").show();
	$("#div1").hide();
	$("#div3").hide();
  });
  $("#id_radio3").click(function(){
    $("#div3").show();
	$("#div1").hide();
	$("#div2").hide();
  });
});	
	
<!--Return section Date picker-->
$(function() {
    var date1 = $('#txtDepDate');
    var date2 = $('#txtDestDate');
    date1.datepicker({
        changeMonth: false,
        numberOfMonths: 2,
		 minDate: 0,
		 maxDate: "+1y",
         dateFormat: 'dd/mm',
        onClose: function( selectDate ) {
            var date = $(this).datepicker('getDate');
           //date2.datepicker("setDate", date);
			$("#txtDestDate").datepicker("option", "minDate", selectDate);
            date2.datepicker( "show" );
        }
    }).datepicker("setDate", "0");
    date2.datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 2,
		dateFormat: 'dd/mm',
        onClose: function( selectDate ) {
            var date = $(this).datepicker("getDate");
            var formattedDate = $.datepicker.formatDate('dd/mm', date);
            date1.val(date1.val() + " - " + formattedDate);

        }
    })
});

<!--oneway section Date picker-->
$(function() {
    var date1 = $('#onewaytxtDepDate');
    var date2 = $('#onewaytxtDestDate');
    date1.datepicker({
        changeMonth: false,
        numberOfMonths: 2,
		 minDate: 0,
		 maxDate: "+1y",
         dateFormat: 'dd/mm',
        onClose: function( selectedDate ) {
            var date = $(this).datepicker('getDate');
           //date2.datepicker("setDate", date);
			$("#onewaytxtDestDate").datepicker("option", "minDate", selectedDate);
            date2.datepicker( "show" );
        }
    }).datepicker("setDate", "0");
	
    date2.datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 2,
		dateFormat: 'dd/mm',
        onClose: function( selectedDate ) {
            var date = $(this).datepicker("getDate");
            var formattedDate = $.datepicker.formatDate('dd/mm', date);
            date1.val(date1.val() + " - " + formattedDate);
        }
    })
});


<!--multiway section Date picker-->
  $(document).ready(function () {
                $('#multiwaytxtDepDate').datepicker({
                    numberOfMonths: 2,
                    minDate: 0,
                    dateFormat: 'dd-mm-yy',
                    maxDate: "+1y",
                    altField: "#txtCheckInDate",
                    onSelect: function (selectedDate) {
                        var date = $(this).datepicker('getDate');
                        var date1 = $('#multiwaytxtDepDate').datepicker('getDate');
                        var date2 = $('#multiwaytxtDestDate').datepicker('getDate');
                        $("#multiwaytxtDestDate").datepicker("option", "minDate", selectedDate);
                        if (date1 >= date2 || date1 == date2 || date1.getDate() == date2.getDate()) 
                        {
                            date.setDate(date.getDate() + 3);
                            $('#multiwaytxtDestDate').datepicker('setDate', date);
                            $('#multiwaytxtCheckInDate').datepicker('option', 'minDate', selectedDate);
                            $('#multiwaytxtCheckOutDate').datepicker('option', 'minDate', selectedDate);
                        }
                    }

                }).datepicker("setDate", "0");
                $("#multiwaytxtDestDate").datepicker({
                         numberOfMonths: 2,
                         maxDate: "+1y",
                         dateFormat: 'dd-mm-yy',
                         altField: "#txtCheckOutDate",
                         onSelect: function (selectedDate) {
                         $("#multiwaytxtDepDate").datepicker("option", "maxDate")

                    }
                }).datepicker("setDate", "7").datepicker("option", "minDate", "0");
            });
			
<!--Owl Carousel-->			
$(document).ready(function() {
	  var owl = $('#owl-carousel');
	  owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		responsive: {
		  0: {
			items: 1
		  },
		  600:{
            items:3
        }
		}
	  })
	})
	$(document).ready(function() {
	  var owl = $('#owl-carousel1');
	  owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		responsive: {
		  0: {
			items: 1
		  },
		   600:{
            items:3
        }
		}
	  })
	})			
	$(document).ready(function() {
	  var owl = $('#owl-carousel2');
	  owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		responsive: {
		  0: {
			items: 1
		  },
		   600:{
            items:3
        }
		}
	  })
	})			
	$(document).ready(function() {
	  var owl = $('#owl-carousel3');
	  owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		responsive: {
		  0: {
			items: 1
		  },
		   600:{
            items:3
        }
		}
	  })
	})	

<!--Time Range slider-->		
$(function() {
    $("#slider-range1").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        slide: function(e, ui) {
            var hours = Math.floor(ui.value / 60);
            var minutes = ui.value - (hours * 60);

            if(hours.toString().length == 1) hours = '0' + hours;
            if(minutes.toString().length == 1) minutes = '0' + minutes;
             minutes = minutes + "mins";
			 hours = hours + "hrs"
            $('#something').html(hours+':'+minutes);
        }
    });
	
});	
$(function() {
    $("#slider-range2").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        slide: function(e, ui) {
            var hours = Math.floor(ui.value / 60);
            var minutes = ui.value - (hours * 60);

            if(hours.toString().length == 1) hours = '0' + hours;
            if(minutes.toString().length == 1) minutes = '0' + minutes;
             minutes = minutes + "mins";
			 hours = hours + "hrs"
            $('#something1').html(hours+':'+minutes);
        }
    });
	
});	

<!--Price Range slider-->	
$( function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 0, 500 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	} );
$( function() {
		$( "#slider-range3" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 0, 500 ],
			slide: function( event, ui ) {
				$( "#amount1" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount1" ).val( "$" + $( "#slider-range3" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range3" ).slider( "values", 1 ) );
	} );
	
	
<!--Hotel search show more-->		
 function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
         