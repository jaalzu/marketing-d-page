// Selecciona el checkbox y todos los enlaces del menú
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('.menu-items a');

// Añade un evento de clic a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false; // Desmarca el checkbox para cerrar el menú
    });
});











// swiper from clients comments
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 25, 
  });



// icon effect from faq

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


// aria expandend for accesibility 
const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
      // Alternar el estado de expansión
      const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
      
      // Colapsar o expandir el panel correspondiente
      const panel = accordion.nextElementSibling;
      if (isExpanded) {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }

      // Actualizar el atributo aria-expanded
      accordion.setAttribute('aria-expanded', !isExpanded);
    });
  });










// swal fire script 

const form = document.getElementById('my-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        Swal.fire({
          icon: 'success',
          title: '¡Enviado!',
          text: 'Tu mensaje ha sido enviado exitosamente.',
          confirmButtonColor: '#390AE3',
          timer:3000,
          timerProgressBar:true,
           confirmButtonText: 'Cerrar',
          customClass:{
            popup:'custom-popup',
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar el formulario, por favor inténtalo nuevamente.',
        });
      }
    });
  });






  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marketing digital",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "25 de mayo 122",
        "addressLocality": "Chaco",
        "addressRegion": "Resistencia",
        "postalCode": "H3500",
        "addressCountry": "Argentina"
    },
    "telephone": "+54-3624003042",
    "url": "https://jaalzu.github.io/marketing-d-page/",
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
        "https://www.instagram.com/javier.alzu"
    ]
};

// Crea un nuevo elemento script
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData); 

document.head.appendChild(script); 