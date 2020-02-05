import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";
import AgregarProducto from "./components/AgregarProducto";
import ProductoUnidad from "./components/ProductoUnidad";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-5 ">
        <Switch>
          <Route exact path="/productos/nuevo" component={AgregarProducto} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/productos/:id" component={ProductoUnidad} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  );
} 

export default App;
