import "./ItensCardapio.css";
import { useParams } from "react-router-dom";
import itens from "../../../mocks/Products";
import ItemBox from "./ItemBox/ItemBox";
import categories from "../../../mocks/Categories";

const ItensCardapio = ({ count }) => {
  const { category } = useParams();
  const listProducts = itens.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const listCategories = categories.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="content">
      <div className="page-itens content">
        <div className="box-bg">
          <div className="info-container">
            <div className="box-infos">
              <h1>{listCategories[0].title}</h1>
              <h2>{listCategories[0].catDescription}</h2>
            </div>
          </div>
          <div className="container-itens-box">
            {listProducts.map((product) => {
              return (
                <div key={product.name} className="item-box1">
                  <ItemBox product={product} countKart={count} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItensCardapio;
