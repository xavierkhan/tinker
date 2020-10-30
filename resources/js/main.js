

    $(document).ready(function(){

   	// STICKY MENU
   	 $(".js-sticky").waypoint(function(direction){
   	 	if (direction == "down"){
   	 		$("nav").addClass("sticky");
   	 	} else {
   	 		$("nav").removeClass("sticky");
   	 	}
   	 });


   	 // MISITUP (PORTFOLIO SECTION)
   	var mixer = mixitup('.container');

   	});
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var icon1 = document.querySelector('#icon-1');
var icon2 = document.querySelector('#icon-2');
var icon3 = document.querySelector('#icon-3');
var icon4 = document.querySelector('#icon-4');
btn1.style.color="#F7C552";
btn1.addEventListener('click',function(){
	icon1.style.display="block";
	icon2.style.display="none";
	icon3.style.display="none";
	icon4.style.display="none";
	btn1.style.color="#F7C552";
	btn2.style.color="";
	btn3.style.color="";
	btn4.style.color="";
})
btn2.addEventListener('click',function(){
	icon1.style.display="none";
	icon2.style.display="block";
	icon3.style.display="none";
	icon4.style.display="none";
	btn2.style.color="#F7C552";
	btn1.style.color="";
	btn3.style.color="";
	btn4.style.color="";
})
btn3.addEventListener('click',function(){
	icon1.style.display="none";
	icon2.style.display="none";
	icon3.style.display="block";
	icon4.style.display="none";
	btn3.style.color="#F7C552";
	btn1.style.color="";
	btn2.style.color="";
	btn4.style.color="";
})
btn4.addEventListener('click',function(){
	icon1.style.display="none";
	icon2.style.display="none";
	icon3.style.display="none";
	icon4.style.display="block";
	btn4.style.color="#F7C552";
	btn1.style.color="";
	btn2.style.color="";
	btn3.style.color="";
})
	function openNav(){
      document.getElementById("myNav").style.width = "100%";
   }
   function closeNav(){
      document.getElementById("myNav").style.width = "0%";
   }