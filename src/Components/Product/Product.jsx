import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Components/Loader/Loader";
import classes from "./Product.module.css";
function Product() {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log(products);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                product={singleProduct}
                renderAdd={true}
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
}
export default Product;
