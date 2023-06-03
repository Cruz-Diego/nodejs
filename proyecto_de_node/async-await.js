
const pastel = {
    leerReceta: false,
    conseguirIngredientes: false,
    masaPreparada: false,
    hornearElPastel: false,
    decorarElPastel: false
};

const leerReceta = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastel.leerReceta = true;
            if (!pastel.leerReceta) {
                reject("Tienes que leer la receta primero");
            }
            resolve(pastel);
        }, 3000);
    });
};

const conseguirIngredientes = (pastelLeido) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelLeido.conseguirIngredientes = true;
            if (!pastelLeido.conseguirIngredientes) {
                reject("No conseguimos los ingredientes del paste;");
            }

            resolve(pastelLeido);
        }, 2000);
    });
};

const prepararMasa = (pastelConIngredientes) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelConIngredientes.masaPreparada = true;
            if (!pastelConIngredientes.masaPreparada) {
                reject("No se preparo la masa");
            }

            resolve(pastelConIngredientes);
        }, 2000);
    });
};

const procesoHorneado = (masaHecha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            masaHecha.hornearElPastel = true;
            if (!masaHecha.hornearElPastel) {
                reject("No se horneo el pastel");
            }

            resolve(masaHecha);
        }, 1000);
    });
};

const procesoDecorado = (pastelhorneado) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelhorneado.decorarElPastel = true;
            if (!pastelhorneado.decorarElPastel) {
                reject("No se decoro el pastel");
            }
            resolve(pastelhorneado);
        }, 3000);
    });
};


const terminarPastel = async (pastel) => {
    try {
      // Las promesas que queremos ejecutar y que resuelvan
      const pastelConRecetaLeida = await leerReceta(pastel)
      const pastelConIngredientesConseguidos = await conseguirIngredientes(pastelConRecetaLeida)
      const pastelConMasaPreparada = await prepararMasa(pastelConIngredientesConseguidos)
      const pastelHorneado = await procesoHorneado(pastelConMasaPreparada)
      const pastelDecorado = await procesoDecorado(pastelHorneado)
      return await pastelDecorado;
    }catch(err) {
      // Cualquier error que pase dentro del try, se maneja aqui.
      console.log("Error", err)
    }
  }
  
  const resultado = terminarPastel(pastel)
  .then((pastel) => {
    console.log("pastel terminado", pastel)
  })