import styled from "styled-components";
import { styles, typographys } from "../../styles";

import { FilterSortPager } from "./FilterSortPager";

export const TitleAndControls = ({ categories, buttonsState }) => {
  const { TitleL2 } = typographys;

  return (
    <Wrapper>
      <TitleL2>
        <SpanBlue>Tech</SpanBlue> Products
      </TitleL2>
      <FilterSortPager categories={categories} buttonsState={buttonsState} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SpanBlue = styled.span`
  color: ${styles.colors.brand.blue};
`;
