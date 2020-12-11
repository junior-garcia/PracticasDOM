
import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";



document.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("../assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","feb 24,2021 05:23:12","feliz cumpleaños");
});

document.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});