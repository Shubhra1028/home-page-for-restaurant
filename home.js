// $('html, body').animate({
//     scrollTop: ($('#element').offset().top)
// },500);


$('#linkToServices').on('click', function(){
    $('html, body').animate({
        scrollTop: ($('#services').offset().top)
    },400);    
});

$('#linkToMenu').on('click', function(){
    $('html, body').animate({
        scrollTop: ($('#menu').offset().top)
    },400);    
});

$('#linkToReservations').on('click', function(){
    $('html, body').animate({
        scrollTop: ($('#reserv').offset().top)
    },400);    
});


$('#linkToContact').on('click', function(){
    $('html, body').animate({
        scrollTop: ($('#contact').offset().top)
    },400);    
});


$('#linkToGallery').on('click', function(){
    $('html, body').animate({
        scrollTop: ($('#gallery').offset().top)
    },400);    
});

var x = $('#gallery>div');
var counter = 0;
var prev = counter-1;
var next = counter+1;

var bgimg = ["url('https://i1.wp.com/wallarthd.com/wp-content/uploads/2015/04/Pizza-Photography-Wallpaper-Picture.jpg?resize=618%2C386')", 
                "url('https://www.vegrecipesofindia.com/wp-content/uploads/2018/03/raj-kachori-chaat.jpg')",
            "url('http://powersquat.ru/images/Pitanye/pasta.jpg')",
            "url('http://data.1freewallpapers.com/download/free-indian-food-1024x576.jpg')",
            "url('https://smuggbugg.com/wp-content/uploads/2016/09/delicious-south-Indian-cuisines.jpg')",
            "url('http://www.friendsfamilyrestaurant.com/images/idly.jpg')",
            "url('http://jknewspoint.com/wp-content/uploads/Veg-momos.jpg')",
            "url('https://foodnhealth.org/wp-content/uploads/2015/06/khaman-dhokla.jpg')",
            "url('http://fablefeed.com/wp-content/uploads/2015/06/chole-bhaure.jpg')",
            "url('http://www.zeebite.com/wp-content/uploads/2018/02/Hyderabadi-Dum-Chicken-Biryani-5-1024x683.jpg')",
            "url('https://indianhealthyrecipes.com/wp-content/uploads/2015/09/swasthis-recipes-facebook.jpg')",
            "url('https://queridarecoleta.files.wordpress.com/2016/01/12250077_1524260274538629_2977807817500576724_n.jpg?w=960&h=515&crop=1')",
            "url('http://images.indianexpress.com/2018/03/easter-food-thinkstockphotos-759.jpg')",
            "url('https://www.ndtv.com/cooks/images/sewai_600.jpg')",
        ]

function gallery(){
    counter++;
    counter = counter%bgimg.length;
    prev = counter-1;
    next = counter+1;
    if(prev<0){
        prev=bgimg.length-1;}
    if(next>=bgimg.length){
        next=0;}
    $(x[0]).css('background-image', bgimg[prev]);
    $(x[1]).css('background-image', bgimg[counter]);
    $(x[2]).css('background-image', bgimg[next]);
}

setInterval(gallery, 3000);