/* $(function () {
    $('button').click(function () {
        $('#unico').css("color", "red");
    });
}); */

/* $(function () {
    $('#vermelho').click(function () {
        $('p').css("color", "red")
        $('p').fadeOut();
        $('p').delay(3000);
    });


    $('#azul').click(function () {
        $('p').css("color", "blue")
        .fadeIn()
        $('#msg')
        .text("Cor alterada com suscesso")
        .css('color', 'blue')
        .css('border', '1px solid blue')
        .delay(3000)
        .fadeOut('fast')
        .addClass('green')

        $('button').removeClass('blue')
        
    });

    

}); */


$(function(){
    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });
    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });
    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });
    
});