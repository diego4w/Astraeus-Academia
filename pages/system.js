
const res = document.getElementById('res');

const arr = 
[{
  "nome": "João",
  "horarios": [
    "09:00",
    "10:30",
    "14:00",
    "15:30"
  ]
},
{
  "nome": "Carlos",
  "horarios": [
    "10:00",
    "11:30",
    "13:00",
    "16:30"
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
}]

function renderBarbeiros(barbeiros) {
  barbeiros.forEach(barbeiro => {
    const horariosHTML = barbeiro.horarios.map(horario => `<li><input type="checkbox" name="${barbeiro.nome}" id="">${horario}</li>`).join('');
    res.innerHTML += `
      <div class="container">
        <div class="avatar">
          <img src="../assets/logo.jpg" alt="">
          <h2>${barbeiro.nome}</h2>
        </div>
        <p>Horarios disponiveis</p>
        <ul>${horariosHTML}</ul>
        <div class="redes">
          <a href="#"><i class="bi bi-whatsapp"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    `;
  });
}

// Chamada da função de renderização
renderBarbeiros(arr);

const back = document.getElementById("back")

function voltar(){
    window.location.href = "../index.html"
}

back.onclick = voltar