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
            link.download = "meu-curriculo.pdf";

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
