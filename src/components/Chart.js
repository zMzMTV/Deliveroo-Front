import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Chart = ({ items, setItems }) => {
  return (
    <>
      <div>
        <button type="submit">Valider mon Panier</button>

        <div>
          {items.map((order, id) => {
            return (
              <div key={id}>
                <div className="counter">
                  <FontAwesomeIcon
                    icon="minus-circle"
                    onClick={() => {
                      const newItems = [...items];
                      setItems(newItems);
                      order.quantity--;
                    }}
                  />
                  <p>{order.quantity}</p>
                  <FontAwesomeIcon
                    icon="plus-circle"
                    onClick={() => {
                      const newItems = [...items];
                      setItems(newItems);
                      order.quantity++;
                    }}
                  />
                </div>

                <span>{order.title}</span>
                <span>{order.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Chart;
