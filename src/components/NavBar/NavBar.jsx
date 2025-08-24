import React, { useEffect, useState } from "react";
import vetorNav from "../../assets/Images/nav_vetor.png";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import itens from "../../mocks/Products";

const NavBar = ({ countItens }) => {
  const navigate = useNavigate();
  const [totalItens, setTotalItens] = useState(0);
  function toCart() {
    navigate("../delivery/carrinho"); //caminho definito na rota no App
  }

  useEffect(() => {
    let total = 0;
    itens.forEach((item) => {
      const itemStorage = JSON.parse(localStorage.getItem(item.id));
      if (localStorage.getItem(item.id)) total = total + itemStorage.count;
    });
    setTotalItens(total);
  }, [countItens]);
  return (
    <div>
      <header className="App-header">
        <div id="menu-itens">
          <div id="branch">
            <img id="vetor" src={vetorNav} alt="vetor" />
            <p>Encanto Gastronomia</p>
          </div>
          <nav className="box-nav">
            <ul id="menu">
              <li>
                <Link className="link-navigate" to="/">
                  {" "}
                  Início
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/Casa">
                  A Casa
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/chefs">
                  {" "}
                  Os Chefs
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/cardapio">
                  {" "}
                  Cardápio
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/delivery">
                  {" "}
                  Delivery
                </Link>
              </li>
              <li>
                <Link className="link-navigate" to="/area_do_cliente">
                  {" "}
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </nav>

          <div className="logon-cart">
            <Badge count={totalItens} showZero>
              <ShoppingCartOutlined onClick={toCart} />
            </Badge>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
