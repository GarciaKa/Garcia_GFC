document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe um alerta de confirmação
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);

    // Limpa o formulário
    this.reset();
});

