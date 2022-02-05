// styles
import styled from "styled-components";
import { typographys } from "../../typographys";
import { styles } from "../../styles";

// components
import { CTAButton } from "../../components/CTAButton";

const { TextL1, TextL2AllCaps } = typographys;
const { colors } = styles;

export const ProductCard = ({ product: { name, category, img, cost } }) => {
  return (
    <Wrapper>
      <Card>
        <ImgWrapper>
          <img src={img.hdUrl} alt={name} />
        </ImgWrapper>
        <DetailWrapper>
          <TextL1>{name}</TextL1>
          <TextL2AllCaps color={colors.neutrals.six}>{category}</TextL2AllCaps>
        </DetailWrapper>
      </Card>
      <Button product text={cost} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Card = styled.div``;

const ImgWrapper = styled.div`
  background: ${colors.neutrals.cero};
  border: 1px solid ${colors.neutrals.three};
  border-radius: 16px 16px 0px 0px;
  padding: 64px 34px 76.9px;

  img {
    max-width: 100%;
  }
`;

const DetailWrapper = styled.div`
  background: ${colors.neutrals.cero};
  border: 1px solid ${colors.neutrals.three};
  border-top-style: none;
  border-radius: 0px 0px 16px 16px;
  padding: 16px 24px 24px;
`;

const Button = styled(CTAButton)`
  margin-top: 16px;
`