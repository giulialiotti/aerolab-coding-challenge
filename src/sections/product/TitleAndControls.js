import styled from "styled-components";
import { typographys } from "../../typographys";
import { styles } from "../../styles";

import { FilterSortPager } from "./FilterSortPager";

export const TitleAndControls = ({ buttonsState }) => {
  const { TitleL2 } = typographys;

  return (
    <Wrapper>
      <TitleL2>
        <SpanBlue>Tech</SpanBlue> Products
      </TitleL2>
      <FilterSortPager buttonsState={buttonsState} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SpanBlue = styled.span`
  color: ${styles.colors.brand.blue};
`;
