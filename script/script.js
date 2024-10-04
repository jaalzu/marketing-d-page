var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true, // Agrega esta línea
    slidesPerView: 1, // Asegura que se vea solo un slide completamente
    spaceBetween: 20, // Ajusta el espacio entre los slides (20px en este caso)
  });