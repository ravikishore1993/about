$(document).ready(function(){
	$('#me').hover(
       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("Ravi Kishore")
                    .dequeue()
        })
        .animate({opacity:1});   },

       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("ME")
                    .dequeue()
        })
        .animate({opacity:1});   }
);
		$('#study').hover(
       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("3yr UG, IITR")
                    .dequeue()
        })
        .animate({opacity:1});   },

       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("I Study")
                    .dequeue()
        })
        .animate({opacity:1});   }
);
			$('#use').hover(
       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("PHP JS Nodejs")
                    .dequeue()
        })
        .animate({opacity:1});   },

       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("I Use")
                    .dequeue()
        })
        .animate({opacity:1});   }
);

	$('#intern').hover(
       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("Qualcomm \\m/")
                    .dequeue()
        })
        .animate({opacity:1});   },

       function(){ $(this).animate({opacity:0})
        .queue(function(){
             $(this).text("I Intern")
                    .dequeue()
        })
        .animate({opacity:1});   }
);


});