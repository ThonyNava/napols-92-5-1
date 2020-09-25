let habitacion_1 = {
  huesped: "Daniela",
  numero: "34654171283",
  bio: "❤️🧡💛💚💙💜",
  img: "img/1.jpeg",
};
let habitacion_2 = {
  huesped: "Nicola",
  numero: "34678937218",
  bio: "Todo tipo Chil pues..",
  img: "img/user.png",
};
let habitacion_3 = {
  huesped: "",
  numero: "",
  bio: "",
  img: "img/user.png",
};
let habitacion_4 = {
  huesped: "Sami",
  numero: "34677349162",
  bio: "Todo Marzo tiene su Abril.",
  img: "img/4.jpeg",
};
let habitacion_5 = {
  huesped: "Majo",
  numero: "34662467918",
  bio: "Drive out of the city, away from the crowd.",
  img: "img/user.png",
};
let habitacion_6 = {
  huesped: "Eva",
  numero: "+351911881288",
  bio: "Soy una bomba sexual ♥️",
  img: "img/6.jpeg",
};
let habitacion_7 = {
  huesped: "Thony",
  numero: "34695597044",
  bio: "📚 + ☕️ = 🚀",
  img: "img/7.jpeg",
};
let habitacion_7_2 = {
  huesped: "Zaquiel",
  numero: "34632819705",
  bio: "La perfección es mi deporte.",
  img: "img/7_2.jpeg",
};
let habitacion_8 = {
  huesped: "Albert",
  numero: "34645512971",
  bio: "🐶 Codaiias!!",
  img: "img/8.jpeg",
};

let huespedes = [
  habitacion_1,
  habitacion_2,
  habitacion_4,
  habitacion_5,
  habitacion_6,
  habitacion_7,
  habitacion_7_2,
  habitacion_8,
];

let bloques = Array.from(document.querySelectorAll(".bloque"));

// console.log(bloques[0]);

for (let i = 0; i < bloques.length; i++) {
  let hsp_numero = huespedes[i].numero;
  let hsp_nombre = huespedes[i].huesped;
  bloques[i].querySelector("h3").innerHTML = hsp_nombre;
  bloques[i].querySelector("img").src = huespedes[i].img;
  bloques[i].querySelector("p").innerHTML = huespedes[i].bio;

  let btn_cont = `https://api.whatsapp.com/send?phone=${hsp_numero}&text=Hola%20${hsp_nombre},%20%C2%BFQu%C3%A9%20tal?`;

  bloques[i].querySelector("a").href = btn_cont;

  let btns_warning = bloques[i].querySelectorAll(".btn-warning");
  let btns_danger = bloques[i].querySelectorAll(".btn-danger");

  for (let i = 0; i < btns_warning.length; i++) {
    let dia = btns_warning[i].parentElement.parentElement.parentElement
      .querySelector(".diaDeLimpieza")
      .innerHTML.trim()
      .toLocaleLowerCase();
    let area = btns_warning[i].parentElement.parentElement.parentElement
      .querySelector(".areaDeLimpieza")
      .innerHTML.trim()
      .toLocaleLowerCase();

    // console.log(dia);
    // console.log(area);

    let warning = `https://api.whatsapp.com/send?phone=${hsp_numero}&text=Hola%20${hsp_nombre},%20deseo%20que%20est%C3%A9s%20bien.%20Seg%C3%BAn%20el%20sistema%20de%20limpieza%20el%20d%C3%ADa%20${dia}%20te%20toca%20${area}.%20Por%20favor,%20a%20medida%20de%20tus%20posibilidades%20%C3%A9chale%20un%20vistazo.%20Saludos.`;
    btns_warning[i].href = warning;

    let danger = `https://api.whatsapp.com/send?phone=${hsp_numero}&text=Hola%20${hsp_nombre},%20deseo%20que%20est%C3%A9s%20bien.%20Seg%C3%BAn%20el%20sistema%20de%20limpieza%20el%20d%C3%ADa%20${dia}%20te%20tocaba%20${area}.%20Me%20parece%20que%20no%20se%20ha%20limpiado%20debidamente.%20Si%20en%20alg%C3%BAn%20momento%20no%20te%20es%20posible%20limpiar%20tu%20%C3%A1rea,%20siempre%20puedes%20delegarlo%20con%20otra%20persona%20comunic%C3%A1ndolo.%20Por%20favor,%20evitemos%20que%20suceda%20nuevamente%20por%20el%20bienestar%20de%20todos.%20Saludos.`;
    btns_danger[i].href = danger;
  }
}
