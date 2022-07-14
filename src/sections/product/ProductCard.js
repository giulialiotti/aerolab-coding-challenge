import React, { useContext } from "react";

// context
import { UserContext } from "../../context/UserContext";

// styles
import styled from "styled-components";
import { typographys } from "../../typographys";
import { styles } from "../../styles";
// import { breakpoints } from "../../breakpoints";

// components
import { CTAButton } from "../../components/CTAButton";
import { breakpoints } from "../../breakpoints";

const { TextL1, TextL2AllCaps } = typographys;
const { colors } = styles;

export const ProductCard = ({
  product: { _id, name, category, img, cost }
}) => {
  const { user, setUser, handleRedeemProduct } = useContext(UserContext);
 
  const canAfford = cost <= user.points;
  const amountMissing = cost - user.points;

  const product = {
    productId: _id,
  };

  const handleRedeem = () => {
    handleRedeemProduct(product);
    setUser({ ...user, points: user.points - cost });
  };

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
      <Button
        product
        disabled={canAfford ? false : true}
        text={canAfford ? cost : amountMissing}
        onClick={handleRedeem}
      />
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
  display: flex;
  justify-content: center;
  padding: 64px 28px 80px;

  img {
    height: 204px;
    width: 280px;
  }

  ${breakpoints.tablet} {
    padding: 64px 16px;
  }

  ${breakpoints.desktopXL} {
    padding: 64px 34px 76.9px;
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
`;
