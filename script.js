emailjs.init("MudNbBpwqBzqbawIS");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value, 
    message: document.getElementById("message").value
  };

  emailjs.send("service_ug69kur", "template_3bvwoda", params)
    .then(() => {
      document.getElementById("status").innerHTML = "Email enviado!";
    }, () => {
      document.getElementById("status").innerHTML = "Erro ao enviar.";
    });
});

function baixar() {
    var urlCurriculo = "Currículo.pdf";

    var xhr = new XMLHttpRequest();
    xhr.open('GET', urlCurriculo, true);
    xhr.responseType = 'blob';

    xhr.onload = function() {
        if (xhr.status === 200) {
            var blob = new Blob([xhr.response], { type: 'application/pdf' });

            // Crie um objeto URL para o blob
            var urlBlob = URL.createObjectURL(blob);

            // Crie um link temporário para o blob
            var link = document.createElement('a');
            link.href = urlBlob;

            // Defina o nome do arquivo para o download
            link.download = "currículo_helio_nogueira.pdf";

            // Adicione o link ao documento e clique nele para iniciar o download
            document.body.appendChild(link);
            link.click();

            // Limpe o link temporário e o objeto URL
            document.body.removeChild(link);
            URL.revokeObjectURL(urlBlob);
        }
    };

    xhr.send();
}
