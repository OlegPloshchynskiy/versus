$(document).ready(function(){

    let flag = false
    $('.burger').click(function(){
        if(!flag){
            // $('.menu').fadeIn();
            $('.menu').slideDown();
            $('.menu').css('display', 'flex');
            $('.lines').css('position', 'absolute');
            $('.lone').css('transform', 'rotate(45deg)')
            $('.ltwo').css('transform', 'rotate(-45deg)')
        }else{
            $('.menu').slideUp();
            $('.lone').css('transform', 'rotate(0)')
            $('.ltwo').css('transform', 'rotate(0)')
            $('.lines').css('position', 'relative');
        }
        flag = !flag
    })

})