// primero importamos useEffect y useState de react para poder utilizarlos en nuestro componente
import { useState, useEffect } from 'react'

const App = () => {
  // creamos una constante que representa un estado y su setter o modificador (asignador) y le asignamos un valor inicial
  const [contador, incrementarContador] = useState(0)

  // el useEffect toma dos parametros: el primero es el codigo o 'efecto' que queremos que ejecute, y el segundo (llamado array de dependencias) es quien le dice al useEffect CUANDO debe ejecutar este codigo, segun cual sea la variable por la que este 'escuchando'
  useEffect(() => {
    console.log('se produjo un cambio en el contador', contador)
  }, [contador])

  // en caso de tener un useEffect con el segundo parametro (el array de dependencias) vacio, esto significa que el codigo se ejecutara solo la primera vez que se pinte el componente
  useEffect(() => {
    console.log('App.js se acaba de renderizar por primera vez!')
  }, [])

  return (
    <>
      <h1>[ useState & useEffect ]</h1>

      {/* aqui interpolamos en el html nuestra variable/estado 'contador' para que refleje el valor actual */}
      <h2>Valor del contador: {contador}</h2>

      {/* en cada uno de los botones asignamos al evento onClick la funcion modificadora/asignadora de nuestro estado 'contador' (el que creamos con el useState) para que al escuchar el clic ejecute el codigo que le pasamos por parametro (por ejemplo que reasigne el valor del contador al valor actual mas uno) */}
      <button
        onClick={() => {
          incrementarContador(contador - 1)
        }}
      >
        - 1
      </button>
      <button
        onClick={() => {
          incrementarContador(contador + 1)
        }}
      >
        + 1
      </button>
    </>
  )
}

export default App
