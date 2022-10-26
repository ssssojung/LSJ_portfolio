/*$(document).ready(
    function(){
        $('#allMenu').click(function(){
            $(this).toggleClass('open');//toggleClass는 addClass와 removeClass 합친거
        })
    }
)*/

$(document).ready(
    function(){
        $('#allMenu').click(function(){
            $(this).toggleClass('open');
        })
    }
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $('body').addClass('scroll');
        }else{
            $('body').removeClass('scroll');
    
        }
    })
 )

 