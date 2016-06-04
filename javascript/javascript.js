
$(document).ready(function() {

    $("#red").hover( function(){
    	

    	$("#top").css("background-color","red");
    });
     $("#red").mouseout( function(){

    	$("#top").css("background-color","#ff4500");
    });
     
    $("#yellow").hover( function(){
    	
 
    	$("#mid").css("background-color","yellow");
    });
     $("#yellow").mouseout( function(){

    	$("#mid").css("background-color","#ffffe0");
    });
     

     $("#green").hover( function(){
    	

    	$("#bot").css("background-color","green");
    });
     $("#green").mouseout( function(){

    	$("#bot").css("background-color","#adff2f");
    }); 
});