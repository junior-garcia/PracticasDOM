const d = document;

export function shortcuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.altKey);
    console.log(e.ctrlKey);

    if(e.key==="a"&&e.altKey){
        alert("haz lanzado una alert cn el teclado")
    }
}