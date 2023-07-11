const back = document.getElementById("back")
const submit = document.getElementById("submit")

function voltar(){
    window.location.href = "../index.html"
}


back.onclick = voltar

  // Evento de envio do formulário
  document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    // Obtém os valores dos horários selecionados
    var horariosDisponiveis = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
      horariosDisponiveis.push(checkbox.value);
    });

    // Salva os valores em uma array ou executa a ação desejada
    var dadosFormulario = {
      nome: nome,
      email: email,
      telefone: telefone,
      horarios: horariosDisponiveis
    };
    console.log(dadosFormulario);

  });

  nome.value = ""
  email.value = ""
  telefone.value = ""