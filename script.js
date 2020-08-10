var menuItems =  document.getElementById('menuItems');
menuItems.style.maxHeight = "0px";

    var menuTogles = document.querySelector('.menu-container');
    var header = document.querySelector('.header');
    var productImg = document.getElementById('product-img');
    var smallImg = document.getElementsByClassName('small-img');
    

   

    function menuToggleIcon() {       
        menuTogles.classList.toggle("change");
        header.classList.toggle("drop-down");
        

        if (menuItems.style.maxHeight == "0px")
       {
        menuItems.style.maxHeight = "200px";
       }
       else
       {
        menuItems.style.maxHeight = "0px";
       }
    }
    
    let topnavHeight = ($('.header').height() ); 

    function navBarFixed(){
        if($('.header').length){
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();                
                if(scroll >= topnavHeight){
                    $('.header .container .navbar').addClass('navbar-fixed');
                }else{
                    $('.header .container .navbar').removeClass('navbar-fixed');
                }
            });
        }
    }
    navBarFixed();

    smallImg[0].onclick = function(){        
        productImg.src = smallImg[0].src;        
    }
    smallImg[1].onclick = function(){
        productImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function(){
        productImg.src = smallImg[2].src;
    }
     smallImg[3].onclick = function(){
        productImg.src = smallImg[3].src;
    }


