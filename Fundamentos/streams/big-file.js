const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i = 0; i <= 1e6; i++) {
    file.write(`Vamos a ver, intentaré reproducir en palabras la experiencia más encantadora que he tenido mientras duermo, aún cuando al despertar se transformó en algo “raro”…
    He soñado que tenía una relación con Cara Delevingne… Si… Ha sido loquísimo, bueno no hay tantos detalles, sólo que estábamos en un lugar cualquiera con unos amigos míos y yo con naturalidad la he mirado, tú sabes con esa mirada que desea un poco de cariño, contacto, un beso en definitiva, pero ella se ha negado, le insistí varias veces hasta que despedimos a mis amigos, le pregunté que pasaba y como respuesta dijo: “creo que ellos se pondrán celosos”, conectamos miradas cómplices y eso fue suficiente para saber que hacer… Si, he besado a Cara en mis sueños,y ha sido un buen beso…
    Fin`);    
}

file.end();