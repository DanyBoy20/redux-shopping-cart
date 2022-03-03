import { connect } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from "../redux/actions/gameShopAction";


const CompraPokemon = (props) => {
  
  return (
    <div>
      <button className="btn btn-dark btn-sm mb-2" onClick={() => {props.buy_pokemon_action(1)}}>Comprar Pokemon</button>
      <button className="btn btn-dark btn-sm" onClick={() => {props.return_pokemon_action(1)}}>Regresar Pokemon</button>
    </div>
  )
}
const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action  
}
// null se refiere añ estado, lo ponemos null por que en este componente no lo necesitamos
export default connect(null, mapDispatchToProps)(CompraPokemon);