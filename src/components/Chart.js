import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Chart = ({ counters, setCounters, items, setItems }) => {
  return (
    <>
      <button type="submit">Valider mon panier</button>
      {counters.map((quantity, index) => {
        return (
          <div key={index}>
            <FontAwesomeIcon
              icon="minus-circle"
              onClick={() => {
                const newCounters = [...counters];
                newCounters[index]--;
                setCounters(newCounters);
              }}
            />
            <p>{items.quantity}</p>
            <FontAwesomeIcon
              icon="plus-circle"
              onClick={() => {
                const newCounters = [...counters];
                newCounters[index]++;
                setCounters(newCounters);
              }}
            />
          </div>
        );
      })}
      <div>
        {items.map((order, id) => {
          return (
            <div key={id}>
              <p>{order.title}</p>
              <p>{order.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Chart;
