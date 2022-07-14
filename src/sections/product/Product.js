import React from "react";

// styles
import styled from "styled-components";
import { breakpoints } from "../../styles";

// self components
import { TitleAndControls } from "./TitleAndControls";
import { Products } from "./Products";

// functions
import { getData, sortProducts } from "../../utils/functions";

// products endpoint
const productsUrl = "https://coding-challenge-api.aerolab.co/products";

export const Product = () => {
  const [products, setProducts] = React.useState([]);
  const categories = [];

  // get products categories
  products.map((product) => {
    return categories.push(product.category);
  });
  let filteredCategories = [...new Set(categories)];

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

  // Rearranged products array based on sort buttons state
  React.useEffect(() => {
    getData(productsUrl).then((products) => {
      if (sortButtons.mostRecent) setProducts(products);
      if (sortButtons.lowestPrice)
        setProducts([...products].sort(sortProducts));
      if (sortButtons.highestPrice)
        setProducts([...products].sort(sortProducts).reverse());
    });
  }, [sortButtons]);

  return (
    <SectionWrapper id="product">
      <TitleAndControls
        categories={filteredCategories}
        buttonsState={buttonsState}
      />
      <Products products={products} />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  padding-left: 5.3%;
  padding-right: 5.3%;
  margin-top: 80px;

  ${breakpoints.tablet} {
    padding-left: 1.7%;
    padding-right: 1.7%;
    margin-top: 170px;
  }

  ${breakpoints.desktopXL} {
    padding-left: 12%;
    padding-right: 12%;
    margin-top: 160px;
  }
`;
