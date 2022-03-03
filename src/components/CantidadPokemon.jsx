// El provider lo que nos proporciona es que todo el store este disponible para todos los componentes (en toda la aplicación)
// sin embargo, hay que conectar los componentes con el provider para que puedan acceder al store
import { connect } from "react-redux"; // importamos la funcion connect, para conectar el componente con el store

const CantidadPokemon = (props) => {
  return (
    <div>
      <>
        Unidades: { props.game_shop.pokemon }        
      </>
    </div>
  )
}
// convertir el estado del store en props
const mapStateToProps = (state) => { // state es el estado del store
  return {
    game_shop: state.game_shop, // game_shop es el nombre del estado del store
  }
}
// conectamos el componente con el store para que pueda acceder a los datos del store
export default connect(mapStateToProps)(CantidadPokemon);