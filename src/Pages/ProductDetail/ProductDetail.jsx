import React, { useEffect, useState } from "react";

import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

// // Use the provided productId to fetch the product data from the API and display it in the UI.

function ProductDetail() {
  const { productId } = useParams();
  //   // console.log(productId); // This will print the product ID passed as a parameter
  const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  //   // Now you can fetch the product data from the API using the productId and display it in the UI.
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
