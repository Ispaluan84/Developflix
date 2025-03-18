import peliculas from './peliculas.js'

//Filtramos las Peliculas por genero
const accion = document.getElementById("genero-28");
const thriller = document.getElementById("genero-53");
const aventura = document.getElementById("genero-12");

const peliculasAccion = peliculas.filter(element => element.genre_ids.includes (28));
const peliculasThriller = peliculas.filter(element => element.genre_ids.includes (53));
const peliculasAventura = peliculas.filter(element => element.genre_ids.includes (12));


//Llamamos a las peliculas para que aparezcan en la página

const listaAccion = document.getElementById("listaAccion");
if (peliculasAccion.length > 0) {
     peliculas.forEach (element => {listaAccion.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"><p>${element.title}</p></li>`
}
)
}

const listaThriller = document.getElementById("listaThriller");
if (peliculasThriller.length > 0) {
    peliculas.forEach (element => {listaThriller.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"><p>${element.title}</li>`
    }
)
}

const listaAventura = document.getElementById("listaAventura");
if (peliculasAventura.length > 0) {
    peliculas.forEach (element => {listaAventura.innerHTML += `<li><img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}"><p>${element.title}</li>`
    }
)
}
