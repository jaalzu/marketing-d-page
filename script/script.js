var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 25, 
  });




  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    let icon = this.querySelector("i");

    if(icon.style.transform === "rotate(180deg)"){

      icon.style.transform = "rotate(0deg)";
    }else{
      icon.style.transform = "rotate(180deg)";
      
    }


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}