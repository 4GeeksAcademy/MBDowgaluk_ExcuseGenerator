import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#excuse").innerHTML = generatorExcuses();

  console.log("Hello Rigo from the console!");
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

  let pronIndx = Math.floor(Math.random() * pronombre.length);
  let sujIndx = Math.floor(Math.random() * sujeto.length);
  let accIndx = Math.floor(Math.random() * accion.length);
  let queIndx = Math.floor(Math.random() * que.length);
  let dondIndx = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronIndx] +
    " " +
    sujeto[sujIndx] +
    " " +
    accion[accIndx] +
    " " +
    que[queIndx] +
    " " +
    donde[dondIndx]
  );
};
