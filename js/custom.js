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


//
$(document).ready(function() {
    $("#subscribeForm").submit(function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        var email = $("#emailInput").val(); // Obtém o valor do campo de e-mail

        // Mostra a roda de carregamento ao lado do campo de e-mail
        $("#loadingSpinner").removeClass("d-none");

        // Simula um tempo de espera (para propósitos de demonstração)
        setTimeout(function() {
            // Oculta a roda de carregamento após o tempo de espera
            $("#loadingSpinner").addClass("d-none");

            // Exibe a mensagem de sucesso
            $("#successMessage").removeClass("d-none");

            // Limpa o campo de e-mail
            $("#emailInput").val("");

            // Oculta a mensagem de sucesso após alguns segundos
            setTimeout(function() {
                $("#successMessage").addClass("d-none");
            }, 3000); // 3000 milissegundos = 3 segundos
        }, 2000); // 2000 milissegundos = 2 segundos (tempo simulado de envio)
    });
});




