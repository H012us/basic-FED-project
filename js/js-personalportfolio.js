/**
 * Created by yoga12 on 26/08/2016.
 */
$(document).ready(function(e) {
    $(".anchor-div").mouseenter(function() {
       var id = $(this).attr('id');
       $("li").removeClass("active");
        $("#the-"+id).addClass("active");
    });
});
