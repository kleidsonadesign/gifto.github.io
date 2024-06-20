// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})
// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o link de "Contato" no menu
  const contactLink = document.getElementById('contact-link');
    const testimonialsLink = document.getElementById('testimonials-link');
	  const aboutUsLink = document.getElementById('about-us-link');
  
  
  // Adiciona um evento de clique ao link de "Contato"
  contactLink.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    
    // Obtém a posição vertical da seção de contato
    const contactSection = document.getElementById('contact');
    const offsetTop = contactSection.offsetTop;
    
    // Faz a rolagem suave até a seção de contato
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'  // Comportamento suave da rolagem
    });
  });
});
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio do formulário
  
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value.trim();
  
  // Expressão regular para validar o formato do e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Valida o e-mail
  if (regex.test(email)) {
    
    document.getElementById('error-message').textContent = '';
    emailInput.classList.remove('invalid');
    
    // Simulando envio do formulário
    alert(`E-mail '${email}' válido. Formulário enviado!`);
    // Aqui você pode enviar o formulário para o backend ou outra ação necessária
  } else {
    // E-mail inválido, exibe mensagem de erro
    document.getElementById('error-message').textContent = 'Por favor, insira um e-mail válido.';
    emailInput.classList.add('invalid');
  }
});