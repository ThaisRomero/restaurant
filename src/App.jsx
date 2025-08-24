import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import OsChefs from "./components/OsChefs/OsChefs";
import Cardapio from "./components/Cardapio/Cardapio";
import AreaCliente from "./components/AreaCliente/AreaCliente";
import Delivery from "./components/Delivery/Categorias/Delivery";
import Footer from "./components/Footer/Footer";
import ItensCardapio from "./components/Delivery/ItensCardapio/ItensCardapio";
import Cart from "./components/Delivery/Cart/Cart";
import { useState } from "react";
import Cadastro from "./components/AreaCliente/Cadastro/Cadastro";
import Casa from "./components/Casa/Casa";
import Painel from "./components/AreaCliente/Painel/Painel";
import Dashboard from "./components/AreaCliente/Painel/Dashboard/Dashboard";

// import vetorNav from './assets/Images/nav_vetor.png'

function App() {
  const [countItens, setCountItens] = useState(0);
  function changeValueItensCountKart() {
    if (countItens) setCountItens(false);
    else setCountItens(true);
  }
  return (
    <div className="App">
      <NavBar countItens={countItens} />

      <Routes>
        {/* path é o que irá conter após a barra na URL */}

        <Route element={<Home />} path="/" />

        <Route element={<OsChefs />} path="/chefs" />

        <Route element={<Cardapio />} path="/cardapio" />

        <Route element={<Delivery />} path="/delivery" />
        <Route
          element={<ItensCardapio count={changeValueItensCountKart} />}
          path="/delivery/produtos/:category"
        />
        <Route
          element={<Cart count={changeValueItensCountKart} />}
          path="/delivery/carrinho"
        />

        <Route element={<Casa />} path="/casa" />

        <Route element={<AreaCliente />} path="/area_do_cliente" />
        <Route element={<Cadastro />} path="/area_do_cliente/cadastro" />
        <Route element={<Painel />} path="/area_do_cliente/painel" />
        <Route
          element={<Dashboard />}
          path="/area_do_cliente/painel/dashboard"
        />
        {/* <Route element={< />} path="/area_do_cliente/painel/" />
        <Route element={< />} path="/area_do_cliente/painel/" />
        <Route element={< />} path="/area_do_cliente/painel/" />
        <Route element={< />} path="/area_do_cliente/painel/" /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
