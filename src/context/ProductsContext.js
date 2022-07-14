import React, { createContext } from "react";

// Utils
import { getData, sortProducts, productsUrl, sortButtons } from "utils";

export const ProductsContext = createContext();

export const useProductsContext = () => React.useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  // State to control sort functionality
  const [activeSortButton, setActiveSortButton] = React.useState(
    sortButtons[0].order
  );

  // Rearranged products array based on sort buttons state
  React.useEffect(() => {
    getData(productsUrl).then((products) => {
      // Most Recent order
      if (activeSortButton === sortButtons[0].order) setProducts(products);

      // Lowest Price order
      if (activeSortButton === sortButtons[1].order)
        setProducts(products.sort(sortProducts));

      // Highest Price
      if (activeSortButton === sortButtons[2].order)
        setProducts(products.sort(sortProducts).reverse());
    });
  }, [activeSortButton]);

  // Loop through product to get categories, filter duplicate ones and set state
  React.useEffect(() => {
    if (!products) return;

    let cat = [];

    products.map((product) => {
      return cat.push(product.category);
    });

    let filteredCategories = [...new Set(cat)];

    setCategories(filteredCategories);
  }, [products]);

  const value = {
    products,
    categories,
    activeSortButton,
    setActiveSortButton,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
