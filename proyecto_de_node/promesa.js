/***
 *
 * Estados:
 * 1 - Pending: la promesa no se ha resuelto, estado inicial
 * 2 - Accepted: la promesa se resolvio
 * 3 - Rejected: la promesa fue rechazada
 *
 * - Declarar/Crear -
 * Al momento de nosotros hacer un promesa ->
 * - resolve -> vamos a indicar cuando una promesa es resulta
 * - reject -> vamos a indicar cuando una promesa es rechazada
 *
 * - Ejecutar
 * THEN -> la promesa ya esta resuelta
 * CATCH -> la promesa esta rechazada
 *
 * - Sintaxis
 * new Promise((resolve, reject)) ->
 */

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
                // No se resuelve -> CATCH recibe esto
                reject("Tienes que leer la receta primero");
            }
            // Si si se resuelve -> THEN recibe esto
            resolve(pastel);
        }, 3000);
    });
};

// Declarar
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
            /*else{
                console.log("Pastel finalizado!!!")
            }*/
            resolve(pastelhorneado);
        }, 3000);
    });
};


// Ejecucion
leerReceta(pastel)
    .then((pastelLeido) => {
        conseguirIngredientes(pastelLeido)
            .then((pastelConIngredientes) => {
                prepararMasa(pastelConIngredientes) // -> pendiente
                    .then((masaHecha) => {
                        procesoHorneado(masaHecha) // -> pendiente
                            .then((pastelhorneado) => {
                                procesoDecorado(pastelhorneado) 
                                    .then(() => {
                                    console.log("pastel", pastelhorneado)
                                    console.log("Pastel finalizado!!!")
                             })
                             .catch((error) => {
                             console.log(error)
                             });
                        })
                        .catch((error) => {
                        console.log(error)
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log("error", error);
    });