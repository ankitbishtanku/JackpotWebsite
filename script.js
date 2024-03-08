const siteimg = {
	img1: "assets/images/order-online.png",
	img2: "assets/images/favorite-lotteries.png",
	img3: "assets/images/ticket.png",
	img4: "assets/images/payout-process.png",
};

function mainImage(value) {
	document.getElementById('siteImg').src = value;
}


// slider js
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        navigation:true,
        autoPlay:false,
         navigationText:["",""],
    });
});