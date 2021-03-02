// Este es el punto de entrada de tu aplicación

import { changeRouter } from "./lib/router.js";

// Aqui llamamos a la función del router

window.addEventListener("load", () => {
  changeRouter(window.location.hash);
});

window.addEventListener("hashchange", () => {
  changeRouter(window.location.hash);
});
