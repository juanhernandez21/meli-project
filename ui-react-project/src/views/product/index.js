import React, { useEffect } from "react";
import { getProduct, getOffer } from "./../../utils";
import MainLayout from "./../../components/layout/MainLayout"
import Header from "../../components/layout/NavHeader";
import Footer from "../../components/layout/Footer";
import { useParams } from "react-router-dom";

function ProductView(props) {
  const [product, setProduct] = React.useState({});
  const [offer, setOffer] = React.useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(`Ha ocurrido un error: ${JSON.stringify(error)}`);
      });
    getOffer(id)
      .then((response) => {
        setOffer(response);
      })
      .catch((error) => {
        console.error(`Ha ocurrido un error: ${JSON.stringify(error)}`);
      });
  }, [props]);

  return (
    <>
      <Header/>
      <MainLayout productResponse={product} offerResponse={offer}/>
      <Footer/>
    </>
  )
}

export default ProductView;