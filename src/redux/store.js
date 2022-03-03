import { createStore } from "redux";
import rootReducers from "./reducers/rootReducers";

/* Usando lainstalacion que hicimos en nuestro proyecto:
   npm install --save redux-devtools-extension
*/
/* import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducers, composeWithDevTools()); */

/* Cuando no instalamos composeWithDevTools, escribimos la L13 */
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
