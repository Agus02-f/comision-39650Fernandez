import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoryResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoryResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnudj79f9/image/upload/v1682275621/Babys.com/logo_bjonlp.png"
            alt="Este es el logo de mi Empresa"
          />
        </Link>
        <ul style={{ display: "flex", gap: "30px" }}>
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
