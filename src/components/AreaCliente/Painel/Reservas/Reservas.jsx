import React from "react";
import "./Reservas.css";

const Reservas = () => {
  return (
    <div className="box-pedidos">
      <div className="line">
        <h3>Minhas Reservas</h3>
        <p>Gerencie suas reservas</p>
      </div>
      <div className="line">
        <div className="box-reseva">
          <div className="side-a2">
            <div className="mesa-status">
              <h4>Mesa XX</h4>
              <p>Confirmada</p>
            </div>
            <div className="data-hora">
              <div className="item-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <p>XX-XX-XX</p>
              </div>
              <div className="item-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p> 00:00</p>
              </div>
            </div>
          </div>
          <div className="side-b2">
            <li>Editar</li>
            <li>Alterar</li>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="box-reseva">
          <div className="side-a2">
            <div className="mesa-status">
              <h4>Mesa XX</h4>
              <p>Concluída</p>
            </div>
            <div className="data-hora">
              <div className="item-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                <p>XX-XX-XX</p>
              </div>
              <div className="item-data">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <p> 00:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
