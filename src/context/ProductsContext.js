import React, { createContext } from "react";

// Utils
import {
  getData,
  sortProducts,
  productsUrl,
  sortButtons,
  allProducts,
} from "utils";

export const ProductsContext = createContext();

export const useProductsContext = () => React.useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [activeFilter, setActiveFilter] = React.useState(allProducts);

  // State to control sort functionality
  const [activeSortButton, setActiveSortButton] = React.useState(
    sortButtons[0].order
  );

  // Rearranged products array based on sort buttons state
  React.useEffect(() => {
    getData(productsUrl).then((products) => {
      // Filter products array by active category
      const filterProducts = products.filter(
        (prod) => prod.category === activeFilter
      );

      // If there's active filter get filterProducts else get all products
      const productsToSet =
        filterProducts.length !== 0 ? filterProducts : products;

      // Most Recent order
      if (activeSortButton === sortButtons[0].order) setProducts(productsToSet);

      // Lowest Price order
      if (activeSortButton === sortButtons[1].order)
        setProducts(productsToSet.sort(sortProducts));

      // Highest Price
      if (activeSortButton === sortButtons[2].order)
        setProducts(productsToSet.sort(sortProducts).reverse());
    });
  }, [activeSortButton, activeFilter]);

  // Loop through product to get categories, filter duplicate ones and set state
  React.useEffect(() => {
    if (!products || activeFilter !== allProducts) return;

    let cat = [allProducts];

    products.map((product) => {
      return cat.push(product.category);
    });

    let filteredCategories = [...new Set(cat)];

    setCategories(filteredCategories);
  }, [products, activeFilter]);

  const value = {
    products,
    categories,
    activeSortButton,
    setActiveSortButton,
    activeFilter,
    setActiveFilter,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
