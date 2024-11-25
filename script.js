const myModal = document.getElementById('exampleModal');
const myInput = document.getElementById('validationCustom');

// Foca o input quando o modal é exibido
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});

// Previne o envio do formulário antes da validação
document.getElementById('form_cadastro').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário por padrão
  event.stopPropagation(); // Impede a propagação do evento

  if (this.checkValidity()) {
    // Se o formulário for válido, atualiza o conteúdo e envia o formulário
    alert('Cadastro concluído com sucesso!')
    this.submit()
    this.reset() // Limpa todos os campos do formulário
    this.classList.remove('was-validated'); //remove a classe de validação
  } else {
    // Se o formulário for inválido, aplica os estilos de validação do Bootstrap
    this.classList.add('was-validated');
  }
});

