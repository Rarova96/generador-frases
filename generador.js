const chistes = ['—¿Qué le dice una iguana a su hermana gemela?, -Iguanita', '-¿Cómo se llama el campeón de buceo japonés? -Tokofondo', '-¿Cual es el animal más antiguo? -La cebra, porque está en blanco y negro', '-Que hace una abeja en un gimnasio? -Zum-ba', '-Por que los pájaros no usan Facebook? -Porque ya tienen Twitter'];

const refranes = ['A quien madruga, Dios lo ayuda.','Más vale tarde que nunca.', 'El que mucho abarca, poco aprieta.', 'No hay mal que por bien no venga.', 'Camarón que se duerme, se lo lleva la corriente.'];

const moralejas = ['La unión hace la fuerza.', 'No juzgues a alguien por su apariencia.', 'El que quiere todo, se queda sin nada.', 'La paciencia y la constancia vencen al talento sin esfuerzo.', 'No dejes para mañana lo que puedes hacer hoy.'];

const proverbios = ['El que siembra vientos, recoge tempestades.', 'En casa de herrero, cuchillo de palo.', 'A buen entendedor, pocas palabras bastan.', 'Cría cuervos y te sacarán los ojos.', 'Agua que no has de beber, déjala correr.'];

const consejos = ['Escucha más de lo que hablas.', 'No tomes decisiones enojado.', 'Cuida tu salud, es tu mayor riqueza.', 'Rodéate de gente que te sume.', 'Hazlo con miedo, pero hazlo.'];

const agrupacion = [chistes, refranes, moralejas, proverbios, consejos];

const aleatorio = (array =>{
    const selectorAleatorio = Math.floor(Math.random() * array.length);
    const selector = array[selectorAleatorio];
    const subSelectorAleatorio = Math.floor(Math.random() * selector.length);
    return selector[subSelectorAleatorio];
})

document.querySelector('.boton').addEventListener('click', () => {
    const frase = aleatorio(agrupacion);
    document.getElementById('resultado').textContent = frase;
})


