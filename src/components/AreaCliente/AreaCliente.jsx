import React from "react";
import "./AreaCliente.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cadastro from "./Cadastro/Cadastro";
import { useNavigate } from "react-router-dom";

const AreaCliente = () => {
  const navigate = useNavigate();
  function toRegister() {
    navigate("/area_do_cliente/cadastro"); //caminho definito na rota no App
  }
  function toPainel() {
    navigate("/area_do_cliente/painel");
  }

  return (
    <div className="content" id="container-client">
      <div className="form-area">
        <h1>Área do Cliente</h1>
        <form id="form-logon">
          <div className="content-form">
            <div class="form-group">
              <label for="exampleInputEmail1">Usuário</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Insira usuário"
              />
              <small id="emailHelp" class="form-text text-muted">
                Nunca compartilhe seus dados de acesso.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Senha"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
          </div>
          <div className="buttons-submit">
            <button type="submit" class="btn btn-success" onClick={toPainel}>
              Entrar
            </button>
            <button type="submit" class="btn btn-primary" onClick={toRegister}>
              Cadastre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AreaCliente;
