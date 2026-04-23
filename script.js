let lobbyAudios = [
  document.getElementById("lobby1"),
  document.getElementById("lobby2"),
  document.getElementById("lobby3"),
  document.getElementById("lobby4"),
  document.getElementById("lobby5"),
];

document.addEventListener("click", iniciarAudio, { once: true });

function iniciarAudio() {
  playRandomLobby();
  activo = true;

  let btn = document.getElementById("btnAudio");
  btn.innerText = "🔊";
}

let audioAlto = document.getElementById("amorAlto");
let audioMedio = document.getElementById("amorMedio");
let audioBajo = document.getElementById("amorBajo");

let audioActual = null;
let activo = false;

function playRandomLobby() {
  let random = Math.floor(Math.random() * lobbyAudios.length);
  audioActual = lobbyAudios[random];
  audioActual.play();
}

function toggleAudio() {
  let btn = document.getElementById("btnAudio");

  if (!activo) {
    playRandomLobby();
    activo = true;
    btn.innerText = "🔊";
    btn.classList.add("activo");
  } else {
    detenerAudios();
    activo = false;
    btn.innerText = "🔇";
    btn.classList.remove("activo");
  }
}

function detenerAudios() {
  lobbyAudios.forEach((a) => {
    a.pause();
    a.currentTime = 0;
  });

  [audioAlto, audioMedio, audioBajo].forEach((a) => {
    a.pause();
    a.currentTime = 0;
  });
}

function vibrar() {
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }
}

function corazones() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

function calculadora() {
  let n1 = document.getElementById("nombre1").value;
  let n2 = document.getElementById("nombre2").value;

  if (n1 === "" || n2 === "") {
    mostrarModal("Pon ambos nombres 😡");
    return;
  }

  let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (!regex.test(n1) || !regex.test(n2)) {
    mostrarModal("Solo letras 💔");
    return;
  }

  let porcentaje = Math.floor(Math.random() * 101);

  document.getElementById("result").innerText =
    `${n1} ❤️ ${n2} = ${porcentaje}%`;

  vibrar();
  corazones();

  let imagenes = [
    "https://cdn.pixabay.com/photo/2015/09/27/19/50/fire-heart-961194_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/26/02/16/sees-it-8276376_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/01/13/05/55/geralt-heart-1137259_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/01/08/12/27/love-1127710_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/11/27/05/42/ai-generated-9227230_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/11/18/04/ai-generated-8121083_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/07/07/55/ai-generated-8174571_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/29/06/16/mouth-7684262_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/06/07/01/couple-8172283_1280.jpg",
  ];

  let randomImg = imagenes[Math.floor(Math.random() * imagenes.length)];
  document.body.style.backgroundImage = `url('${randomImg}')`;

  detenerAudios();

  let mensaje = "";

  if (porcentaje > 80) {
    mensaje = "💖 Amor verdadero 💖";
    audioAlto.play();
  } else if (porcentaje > 50) {
    mensaje = "😍 Casi algo 😍";
    audioMedio.play();
  } else {
    mensaje = "💔 Mejor amigos...";
    audioBajo.play();
  }

  mostrarModal(`${mensaje} (${porcentaje}%)`);
}

function mostrarModal(texto) {
  document.getElementById("mensaje").innerText = texto;
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";

  if (activo) {
    playRandomLobby();
  }
}
