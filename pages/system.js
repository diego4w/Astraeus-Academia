const res = document.getElementById('res');

const arr = [
  {
    "nome": "João",
    "horarios": [
      "Dom 09:00",
      "Seg 10:30",
      "Ter 14:00",
      "Sex 15:30"
    ]
  },
  {
    "nome": "Carlos",
    "horarios": [
      "Dom 10:00",
      "Seg 11:30",
      "Quart 13:00",
      "Sext 16:30"
    ]
  },
  {
    "nome": "Miguel",
    "horarios": [
      "Dom 11:00",
      "Seg 12:30",
      "Quart 15:00",
      "Sext 17:30"
    ]
  },
  {
    "nome": "Denis",
    "horarios": [
      "seg 11:00",
      "ter 12:30",
      "Quart 15:00",
      "Sext 17:30"
    ]
  }

];

function renderBarbeiros(barbeiros) {
  res.innerHTML = ''; // Limpa o conteúdo anterior
  barbeiros.forEach(barbeiro => {
    const horariosHTML = barbeiro.horarios.map(horario => `<li><input type="checkbox" name="${barbeiro.nome}">${horario}</li>`).join('');
    res.innerHTML += `
      <div class="container" id="nome${barbeiro.nome}">
        <div class="avatar">
          <img src="../assets/logo.jpg" alt="">
          <h2>${barbeiro.nome}</h2>
        </div>
        <p>Horarios disponiveis</p>
        <ul>${horariosHTML}</ul>
        <div class="redes">
          <button id="btna" style="margin: 5px; color: #000; background-color: #fff; cursor: pointer; border-radius: 5px" onclick="agend('${barbeiro.nome}')">agendar</button>
          <a href="#"><i class="bi bi-whatsapp"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    `;
  });
}

function agend(nomeBarbeiro) {
  var myCheckbox = document.querySelector(`#nome${nomeBarbeiro} input[type="checkbox"]:checked`);
  if (myCheckbox) {
    const horarioAgendado = myCheckbox.nextSibling.textContent;
    console.log("Horário selecionado:", horarioAgendado);
    myCheckbox.checked = false; // Desmarca o checkbox após agendar

    // Exibe o modal com a mensagem de sucesso e a hora agendada
    showModal("Agendamento realizado com sucesso!", `Horário agendado: ${horarioAgendado}`, `com o Barbeiro ${nomeBarbeiro}`);
  } else {
    console.log("Nenhum horário selecionado.");
  }
}

// Função para exibir o modal
function showModal(title, message, message2) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${title} 🔥🤘</h2>
      <p>${message}</p>
      <p>${message2}</p>
    </div>
  `;

  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", function() {
    modal.remove();
  });

  document.body.appendChild(modal);
}


// Chamada da função de renderização
renderBarbeiros(arr);

const back = document.getElementById("back");

function voltar() {
  window.location.href = "../index.html";
}

back.onclick = voltar;
