import "./main.css";
import { useState, useEffect } from "react";
import Catalog from "../Catalog/Catalog";

const Main = ({ data, setData, setSelectedItems,selectedItems}) => {

    const [idArray, setIdArray] = useState([])

  return (
    <main className="main">
      <Catalog
        data={data}
        setData={setData}
        idArray={idArray}
        setIdArray={setIdArray}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
      />
    </main>
  );
};

export default Main;
