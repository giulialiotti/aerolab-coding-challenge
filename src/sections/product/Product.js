import React from "react";

// reusable components
import { Section } from "../../components";

// self components
import { TitleAndControls } from "./TitleAndControls";
import { Products } from "./Products";

// functions
import { getData, sortProducts } from "../../functions";

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
    <Section id="product">
      <TitleAndControls
        categories={filteredCategories}
        buttonsState={buttonsState}
      />
      <Products products={products} />
    </Section>
  );
};
