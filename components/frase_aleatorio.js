const frases = [
    "Todo debe simplificarse lo máximo posible, pero no más. Albert Einstein",
    "El secreto de la creatividad es saber cómo esconder tus fuentes. Albert Einstein",
    "Toda la ciencia no es más que un refinamiento del pensamiento cotidiano. Albert Einstein",
    "La educación es lo que queda una vez que olvidamos todo lo que aprendió en la escuela. Albert Einstein",
    "Cuando cortejas a una bella muchacha, una hora parece un segundo. Pero te sientas sobre carbón al rojo vivo, un segundo parecerá una hora. Eso es relatividad. Albert Einstein."
    ,"No hay que ir para atrás ni para darse impulso. Lao Tsé",
    "No hay caminos para la paz; la paz es el camino. Mahatma Gandhi",
    "Haz el amor y no la guerra. John Lennon",
    " Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse. Charles Baudelaire",
    "Lo peor que hacen los malos es obligarnos a dudar de los buenos. Jacinto Benavente",
    "Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos. Bob Marley)",
    "Aprende a vivir y sabrás morir bien. Confucio",
    "Cada día sabemos más y entendemos menos. Albert Einstein",
    "La medida del amor es amar sin medida. San Agustín",
    "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera. Albert Einstein",
    "El dinero no puede comprar la vida. Bob Marley",
    "La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco. Platón",
    "Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida. Lao Tsé",
    "Vale más actuar exponiéndose a arrepentirse de ello, que arrepentirse de no haber hecho nada. Giovanni Boccaccio",
    " Estar preparado es importante, saber esperarlo es aún más, pero aprovechar el momento adecuado es la clave de la vida. Arthur Schnitzler",
    "Estoy tan enamorado de mis propias opiniones que ignore lo que los demás puedan pensar acerca de ellas. Copérnico",
    "El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice. Aristóteles",
    "Hay dos cosas que son infinitas: el universo y la estupidez humana; de la primera no estoy muy seguro. Albert Einstein",
    "Lo que importa verdaderamente en la vida no son los objetivos que nos marcamos, sino los caminos que seguimos para lograrlo Peter Bamm",
    "El mundo es bello, pero tiene un defecto llamado hombre. Friedrich Nietzsche",
    "La pereza viaja tan despacio que la pobreza no tarda en alcanzarla. Benjamin Franklin",
    "No abras los labios si no estás seguro de que lo que vas a decir es más hermoso que el silencio. Proverbio árabe",
    "De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir. John Steinbeck","Ninguna persona merece tus lágrimas, y quien se las merezca no te hará llorar. Gabriel García Márquez"
  ];

  let frase;
 let fraseDelDia = document.querySelector(".p_frase")


let timerId = setInterval(() => {
  let aleatorio = Math.round(Math.random()*frases.length)
  frase = frases[aleatorio]
  fraseDelDia.textContent = frase}
  , 15000);

