$(document).ready(function(){
    
    $('.navbar-nav li').each(function(indice,elemento){
        $(this).css("top","-300px");
        $(this).animate({
            top:'0'
        }, 2000+(indice * 500) );
    });
//Animacion Header    
    $('.texto').css({
        opacity: 0,
        marginTop: 0
    });
    $('.texto').animate({
        opacity:1,
        marginTop:'-54px'
    },1100);
// Desplazamiento
    var informacion,tecnologia,contacto;
    informacion=$('.about').offset().top;
    tecnologia=$('.tecnologia').offset().top;
    contacto=$('.contacto').offset().top;
    
    function dezplazar(top){
        $('html, body').animate({
            scrollTop:top -80
        },500);
    }
    
    $('#info').on('click',function(e){
        e.preventDefault();
        $('.personal').animateCss('pulse'); 
        dezplazar(informacion);
    });
    
    $('#tec').on('click',function(e){
        e.preventDefault();
         $('.tecnologia').animateCss('pulse'); 
        dezplazar(tecnologia);
    });
    
    $('#contacto').on('click',function(e){
        e.preventDefault();
        dezplazar(contacto);
        $('.contacto').animateCss('pulse'); 
    });
// Navbar
    function animarBar(color){
        $('nav').animate({
            'background':color
        },500);
    }
    if($(window).width()>800){
         $(window).scroll(function(){
            var dezplazamiento=$(document).scrollTop();
                if(dezplazamiento>350){
                   
                   $('nav').css({
                        'background':'rgba(0, 51, 102, 0.9)'
                });
                }else{
                    animarBar("rgba(0, 0, 0, 0)");
                    $('nav').css({
                        'background':'rgba(0, 0, 0, 0)'
                }); 
                }
        });
    }else{
         $('nav').css({'background':'rgba(0, 51, 102, 0.9)'});
         $('.about img').hide();
    }
    //Animacion
    $.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
    });
    
    $('.galeria a').each(function(index,elem){
       $(this).tooltip();
       $(this).on('click',function(e){ e.preventDefault(); });
    });
    $('.galeria a img').each(function(indice,elemento){
        
        $(this).hover(function(){
           $(this).animateCss('rubberBand'); 
        },function(){
            
        });
    });
    $('.icons a').each(function(indice,elemento){
        
        $(this).hover(function(){
           $(this).animateCss('rubberBand'); 
        },function(){
            
        });
    });
    $('.card i').each(function(indice,elemento){
        
        $(this).hover(function(){
           $(this).animateCss('bounce');
           
        },function(){
            
        });
    });
     $('.card').each(function(indice,elemento){
        
        $(this).hover(function(){
           $(this).animateCss('bounce');
           
        },function(){
            
        });
    });
});
    