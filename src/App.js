import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Chart from "./components/Chart";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faStar, faPlusCircle, faMinusCircle);

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-serv.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header data={data} isLoading={isLoading} />
      <Chart items={items} setItems={setItems} />
      <Main
        data={data}
        isLoading={isLoading}
        items={items}
        setItems={setItems}
      />
    </>
  );
}

export default App;
