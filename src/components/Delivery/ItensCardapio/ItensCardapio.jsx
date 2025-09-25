import { useState, useEffect, useRef } from "react";
import "./ItensCardapio.css";
import { useParams } from "react-router-dom";
import itens from "../../../mocks/Products";
import ItemBox from "./ItemBox/ItemBox";
import categories from "../../../mocks/Categories";
import { motion } from "framer-motion";

const ItensCardapio = ({ count }) => {
  const { category } = useParams();
  const listProducts = itens.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const listCategories = categories.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

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
          <div className="container-cards">
            <div className="button-cards">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
            </div>
            <motion.div
              ref={carousel}
              className="gallery"
              whileTap={{ cursor: "grabbing" }}>
              <motion.div
                className="container-itens-box"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}>
                {listProducts.map((product) => {
                  return (
                    <div key={product.name} className="item-box1">
                      <ItemBox product={product} countKart={count} />
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
            <div className="button-cards">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItensCardapio;
