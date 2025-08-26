import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="content1">
      <div className="all-box">
        <div className="box1">
          <div className="total-pedidos box1-item ibox">
            <div className="box1-line1">
              <h3>Total de Pedidos</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <div className="box1-line2">
              <p>X</p>
              <p>Este mês</p>
            </div>
          </div>
          <div className="prox-reserva box1-item ibox">
            <div className="box1-line1">
              <h3>Próxima Reserva</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar"
                viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
            </div>
            <div className="box1-line2">
              <p>xx/xx</p>
              <p>xx:xx - X pessoas</p>
            </div>
          </div>
          <div className="pratos-favoritos box1-item ibox">
            <div className="box1-line1">
              <h3>Pratos favoritos</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </div>
            <div className="box1-line2">
              <p>X</p>
              <p>Salvos</p>
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="pedidos-recentes box2-item ibox">
            <div className="box2-line1">
              <h3>Pedidos Recentes</h3>
              <p>Seus últimos 3 pedidos</p>
            </div>
            <div className="box2-line2">
              <div className="pedido1 pedido">
                <div className="left">
                  <p>#001</p>
                  <p>DD/MM/AA às 00:00 </p>
                </div>
                <div className="right">
                  <p>R$XX,XX</p>
                  <p>Entregue</p>
                </div>
              </div>
              <div className="pedido2 pedido">
                <div className="left">
                  <p>#002</p>
                  <p>DD/MM/AA às 00:00</p>
                </div>
                <div className="right">
                  <p>R$XX,XX</p>
                  <p>Entregue</p>
                </div>
              </div>
              <div className="pedido3 pedido">
                <div className="left">
                  <p>#003</p>
                  <p>DD/MM/AA às 00:00</p>
                </div>

                <div className="right">
                  <p>R$XX,XX</p>
                  <p>Entregue</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reservas-proximas box2-item ibox">
            <div className="box2-line1">
              <h3>Reservas Próximas</h3>
              <p>Suas próximas reservas</p>
            </div>
            <div className="box2-line2 reserva">
              <div className="reserva-left">
                <p>Mesa 12</p>
                <p>xx/xx/xx ás xx:xx</p>
              </div>
              <div className="reserva-right">
                <p>X pessoas</p>
                <p>Confirmada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
