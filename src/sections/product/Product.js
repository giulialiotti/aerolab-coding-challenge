import React from "react";
// styles
import styled from "styled-components";

// reusable components
import { Section } from "../../components";

// self components
import { TitleAndControls } from "./TitleAndControls";
import { Products } from "./Products";

// functions
import { getProducts, sortProducts } from "../../functions";

export const Product = () => {
  const [products, setProducts] = React.useState([]);

  // State to control sort functionality
  const [sortButtons, setSortButtons] = React.useState({
    mostRecent: true,
    lowestPrice: false,
    highestPrice: false,
  });

  // Object to pass down as prop
  const buttonsState = {
    sortButtons,
    setSortButtons,
  };

  React.useEffect(() => {
    getProducts().then((products) => {
      if (sortButtons.mostRecent) setProducts(products);
      if (sortButtons.lowestPrice) setProducts(products.sort(sortProducts));
      if (sortButtons.highestPrice) setProducts(products.sort(sortProducts).reverse());
    });
  }, [sortButtons]);

  return (
    <Section id="product">
      <TitleAndControls buttonsState={buttonsState} />
      <Products products={products} />
    </Section>
  );
};
