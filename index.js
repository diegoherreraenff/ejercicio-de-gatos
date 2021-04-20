 console.log ("hello")
let body = document.querySelector("body");
let divContador = document.createElement("div")
let h1 = document.createElement("h1")
body.appendChild(divContador)
divContador.appendChild(h1)

body.appendChild(h1)
let width = 100
let heigth = 100
let i = 1

const url = function  (width,heigth  ) {
    return `http://placekitten.com/${width}/${heigth}`;

    
}

const interval = setInterval( () => {
    let img = document.createElement("img")
    img.src = url(width,heigth);
    body.appendChild(img)
    i++
    divContador.innerText = i
    width ++
    heigth ++

    if (i === 100) {
        return  clearInterval (interval)
    }

}

,100)