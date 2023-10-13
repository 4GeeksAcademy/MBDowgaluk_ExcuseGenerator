import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#buttonExcuse").addEventListener("click", () => {
    document.querySelector("#excuseGenerator").innerHTML = generatorExcuses();
  });
};

let generatorExcuses = () => {
  let pronombre = ["My", "The", "Your", "His"];
  let sujeto = ["dog", "cat", "grandma"];
  let accion = ["ate", "peed", "crushed", "broke"];
  let que = ["my homework", "the keys", "the car"];
  let donde = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    que[queIndex] +
    " " +
    donde[dondeIndex]
  );
};
