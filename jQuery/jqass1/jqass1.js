function firstjqass1() {
    $("h1").css('color', 'red');
    $("div").css('background-color', 'blue');
    $("p").css('color', 'white');
    $('#div1,#div2').css('border', '2px solid black');
    $("#para1").css('font-size', '20px');
    $('#para1').fadeOut(3000);
    $('#para1').fadeIn(3000);
    $('div').addClass('highlight');
    $('div').removeClass('highlight');
    $('#para2').hide(3000);
    $('#para2').show(3000);
    $("#para5").slideUp(3000);
    $("#para5").slideDown(3000);
    /* $("#para6").toggle(3000);
    $("#para4").fadeToggle(3000); */
    $("#para5").append(" - Appended Text");
    $("#para3").append(" - Appended Text");

}
