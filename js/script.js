$(document).ready(function() {
  $("form#stress_test").submit(function(event){
     event.preventDefault();
     $("#life").show();
     $("input:checkbox[name=life]:checked").each(function(){
       var workTransportationMode = $(this).val();
       $('#work-responses').append(workTransportationMode + "<br>");
     });
     $("#fun-responses").show();
     $("input:checkbox[name=fun-transportation]:checked").each(function(){
       var funTransportationMode = $(this).val();
       $('#fun-responses').append(funTransportationMode + "<br>");
     });
     $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
      });
     $('#stress_test').hide();
   });
 });
