import styled from "styled-components";
import { typographys } from "../../typographys";
import { styles } from "../../styles";

import { SortButton } from "../../components";

const { TextL1 } = typographys;

export const FilterSortPager = () => {
  return (
    <Wrapper>
      <SortWrapper>
        <SortTitle color={styles.colors.neutrals.six}>Sort by:</SortTitle>
        <StyledButton selected>Most Recent</StyledButton>
        <StyledButton selected={false}>Lowest Price</StyledButton>
        <SortButton selected={false}>Highest Price</SortButton>
      </SortWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SortTitle = styled(TextL1)`
  margin-right: 16px;
`;

const StyledButton = styled(SortButton)`
  margin-right: 12px;
`;
