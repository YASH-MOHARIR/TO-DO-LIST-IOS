$("ul").on("click","li", function(){
    $(this).toggleClass("task-completed");
});

$("ul").on("click","span",function(){

    $(this).parent().fadeOut(800,function(){
        $(this).remove();
    });

});

$("input[type='text']").keypress(function(event){

        if(event.which==13){

          var listText =  ($(this).val());
          $(this).val("");
          $("ul").append("<li>  <span><i class='fa fa-trash'></i></span>" + listText + "</li>"); 
        }
});

$(".fa-plus-circle").click(function(){

    $("input[type='text']").fadeToggle();

});