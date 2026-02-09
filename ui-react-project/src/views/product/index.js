import React, { useEffect } from "react";
import { getProduct } from "./../../utils";
import MainLayout from "./../../components/layout/MainLayout"
import { useParams } from "react-router-dom";

function ProductView(props) {
  const [product, setProduct] = React.useState(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(`Ha ocurrido un error: ${JSON.stringify(error)}`);
      });
  }, [props]);

  return (
    <>
      <MainLayout product={product}/>
    </>
  )
}

export default ProductView;