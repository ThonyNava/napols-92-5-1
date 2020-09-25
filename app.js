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
  numero: "",
  bio: "",
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

let bloques = Array.from(document.querySelectorAll(".bg-info"));

console.log(bloques[0]);

for (let i = 0; i < bloques.length; i++) {
  bloques[i].querySelector("h3").innerHTML = huespedes[i].huesped;
  bloques[i].querySelector("img").src = huespedes[i].img;
  bloques[i].querySelector("p").innerHTML = huespedes[i].bio;

  let btn_cont = `https://api.whatsapp.com/send?phone=${huespedes[i].numero}&text=Hola%20${huespedes[i].huesped},%20%C2%BFQu%C3%A9%20tal?`;

  bloques[i].querySelector("a").href = btn_cont;
}
