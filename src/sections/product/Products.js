import React from "react";

// styles
import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

// functions
import { getProducts } from "../../functions";

// components
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  console.log(products);
  return (
    <Wrapper>
      {products?.map((product) => {
        return <ProductCard key={product.name} product={product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 48px 0;
  margin-top: 64px;

  ${breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 48px 24px;
  }

  ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 80px 24px;
  }
`;
