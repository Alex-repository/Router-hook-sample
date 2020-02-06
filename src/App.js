import React,{ useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from "axios";

import Productos from "./components/Productos";
import EditarProducto from "./components/EditarProducto";
import AgregarProducto from "./components/AgregarProducto";
import ProductoUnidad from "./components/ProductoUnidad";
import Header from "./components/Header";
import Main from "./components/";



function App() {

  const [productos, guardarProductos]= useState([]);

  useEffect( ()=>{
    const consultarApi = async ()=>{
      //consulta Json server
      const respuesta = await axios.get("http://localhost:4000/restaurant");
      guardarProductos(respuesta.data);
    }
    consultarApi();
  },[]);

  return (
    <Router>
      <Header />
      <main className="container mt-5 ">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productos" 
            render={ ()=>(
                <Productos 
                  productos = {productos}
                />
            )}
          />
          <Route exact path="/producto-nuevo" component={AgregarProducto} />
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
