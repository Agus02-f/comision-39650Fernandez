import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { products } from "../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    // const itemCollection = collection(db, "products");

    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="red" size={20} />;
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
