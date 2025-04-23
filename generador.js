
//Arrays con las frases:

const chistes = ['—¿Qué le dice una iguana a su hermana gemela?, -Iguanita', '-¿Cómo se llama el campeón de buceo japonés? -Tokofondo', '-¿Cual es el animal más antiguo? -La cebra, porque está en blanco y negro', '-Que hace una abeja en un gimnasio? -Zum-ba', '-Por que los pájaros no usan Facebook? -Porque ya tienen Twitter'];

const refranes = ['A quien madruga, Dios lo ayuda.', 'Más vale tarde que nunca.', 'El que mucho abarca, poco aprieta.', 'No hay mal que por bien no venga.', 'Camarón que se duerme, se lo lleva la corriente.'];

const moralejas = ['La unión hace la fuerza.', 'No juzgues a alguien por su apariencia.', 'El que quiere todo, se queda sin nada.', 'La paciencia y la constancia vencen al talento sin esfuerzo.', 'No dejes para mañana lo que puedes hacer hoy.'];

const proverbios = ['El que siembra vientos, recoge tempestades.', 'En casa de herrero, cuchillo de palo.', 'A buen entendedor, pocas palabras bastan.', 'Cría cuervos y te sacarán los ojos.', 'Agua que no has de beber, déjala correr.'];

const consejos = ['Escucha más de lo que hablas.', 'No tomes decisiones enojado.', 'Cuida tu salud, es tu mayor riqueza.', 'Rodéate de gente que te sume.', 'Hazlo con miedo, pero hazlo.'];


//Lista de arrays:

const agrupacion = [chistes, refranes, moralejas, proverbios, consejos];


const favoritas = [];
let fraseActual = '';

//Función que elije una frase aleatoria:

const aleatorio = () => {
    const tipoFrase = agrupacion[Math.floor(Math.random() * agrupacion.length)];
    const frase = tipoFrase[Math.floor(Math.random() * tipoFrase.length)];
    fraseActual = frase;
    return frase;
};




const categorias = {
    chistes,
    refranes,
    moralejas,
    proverbios,
    consejos
};


//El botón generador se encarga de llamar a aleatorios o a una categoría en concreto

document.querySelector('.boton-aleatorio').addEventListener('click', () => {
    const seleccion = document.getElementById('categorias').value;
    let frase = '';

    if (seleccion === 'aleatorio') {
        const tipoFrase = agrupacion[Math.floor(Math.random() * agrupacion.length)];
        frase = tipoFrase[Math.floor(Math.random() * tipoFrase.length)];
    } else {
        const categoriaElegida = categorias[seleccion];
        frase = categoriaElegida[Math.floor(Math.random() * categoriaElegida.length)];
    }

    fraseActual = frase;
    document.getElementById('resultado').textContent = frase;
});


//Elegir una frase favorita:



document.querySelector('.boton-favorito').addEventListener('click', () => {
    if (fraseActual === '') {
        alert('Primero genera una frase antes de guardarla.');
        return;
    }
    if (favoritas.includes(fraseActual)) {
        alert('Ya guardaste esta frase.');
        return;
    }

    favoritas.push(fraseActual);
});


//DOOM para que nos muestre al darle al botón "Mostrar favoritos" una lista de favoritos:

document.querySelector('.boton-mostrar-favorito').addEventListener('click', () => {

    const lista = document.getElementById('lista');
    lista.innerHTML = ''; //Limpiamos la lista antes de guardarla

    if (fraseActual === '') {
        alert('No hay frases guardadas como favorito');
    }
    favoritas.forEach(frase => {
        const item = document.createElement('li');
        item.textContent = frase;
        lista.appendChild(item); //Agregamos a la lista un nuevo elemento item como hijo
    })

});

//DOOM para que no nos muestre la lista

document.querySelector('.boton-ocultar-favorito').addEventListener('click', () => {

    const ocultar = document.getElementById('lista');
    ocultar.innerHTML = '';
})



