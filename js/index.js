$(document).ready(function(){
    $("#blackCoffee").click(function(){
        $(this).css('color', #EA4A04);
    }).mouseout(function () {
        $(this).css('background-color', '#336699');
    });
 });


 $(".place").mouseover(function () {
    $(this).css('background-color', '#00cc00'); // green color
}).mouseout(function () {
    $(this).css('background-color', '#336699'); // light blue color
});

.ready(function{
    $("#blk-coffe").on(click, function(e){
        $("p").slideDown();
    });
    $("#blk-coffe").on(click, function(e){
        $("p").slideUp();
    });
})