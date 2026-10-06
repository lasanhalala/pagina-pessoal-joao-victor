const botaoMensagem = document.querySelector('#botao-mensagem');
const campoMensagem = document.querySelector('#mensagem');

botaoMensagem.addEventListener('click', () => {
  campoMensagem.textContent = 'Que bom ter você por aqui. Continue curioso e vá atrás dos seus sonhos!';
});
