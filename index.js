const nombres = [
    "Andres",
    "Andres de Anda",
    "Christian",
    "Damian",
    "Dani",
    "Diego",
    "Dan",
    "Gustavo",
    "Ignacio",
    "Jorge",
    "Karla",
    "Lau",
    "Luis",
    "Mara",
    "Max",
    "Pao",
    "Roberto",
    "Samantha"
]


const nombresEstructurados = nombres.reduce((accumuladorActual, current, idx) => {
    return {
      ...accumuladorActual,
      [current]: current.length
    }
  }, {})