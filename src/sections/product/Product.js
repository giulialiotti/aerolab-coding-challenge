import styled from "styled-components";
import { Section } from "../../components";

import { TitleAndControls } from "./TitleAndControls";
import { Products } from "./Products";

export const Product = () => {
  return (
    <Section id="product">
      <TitleAndControls />
      <Products />
    </Section>
  );
};
