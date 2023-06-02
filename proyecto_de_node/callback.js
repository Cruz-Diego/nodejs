  /*
   * Ejercicio:
   * Pastel
   * 1 - Leer la receta
   * 2 - Conseguir los ingredientes
   * 3 - Preparacion de la masa
   * 4 - Hornear el pastel
   * 5 - Decorar el pastel
   */
  
  const pastel = {
    LeerLaReceta: false,
    ConseguirLosIngredientes: false,
    HornearElPastel: false,
    DecorarElPastel: false
  }

  const ConseguirReceta = (pastel, LeerLaReceta) => {
    let error = null;
    setTimeout(() => {
      pastel.LeerLaReceta = true;
      if(!pastel.LeerLaReceta) {
        error = "Se necesita conseguir la receta primero";
      }
      LeerLaReceta(error, pastel);
    }, 2000)
  }

  const conseguirIngredientes = (obtencionIngredientes, horneado) => {
    let error = null
    setTimeout(() => {
        obtencionIngredientes.ConseguirLosIngredientes = true;
      if(!obtencionIngredientes.ConseguirLosIngredientes) {
        error = "Se necesita conseguir los ingredientes primero"
      }
      horneado(error, obtencionIngredientes);
    }, 3000)
  }

  const procesoHorneado = (pastelHorneado, decorar) => {
    let error = null;
    setTimeout(() => {
        pastelHorneado.HornearElPastel = true;
      if(!pastelHorneado.HornearElPastel) {
        error = "Se necesita hornear el pastel"
      }
      decorar(error, pastelHorneado)
    }, 5000)
  }

  const procesoDecorado = (pastelDecorado) => {
    setTimeout(() => {
      pastelDecorado.DecorarElPastel = true
      console.log("Pastel finalizado", pastelDecorado);
    }, 3000)
  }

//* *//
  
    ConseguirReceta(pastel, (error, LeerReceta) => {
    if(error) {
      console.log(error)
      return;
    }
    conseguirIngredientes(LeerReceta, (error, obtencionDeIngredientes) => {
      if(error) {
        console.log(error)
        return;
      }
        procesoHorneado(obtencionDeIngredientes, (error, pastelHorneado) => {
        if(error) {
          console.log(error)
          return;
        }
        procesoDecorado(pastelHorneado);
      })
    })
  });