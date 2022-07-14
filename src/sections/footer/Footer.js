// Styles
import styled from "styled-components";
import { styles, breakpoints } from "styles";

// Assets
import { icons } from "assets";

export const Footer = () => {
  return (
    <Wrapper>
      <LinkWrapper
        href="https://github.com/giulialiotti/aerolab-coding-challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon src={icons.githubIcon} alt="GitHub icon" />
        View this repository
      </LinkWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 46.5px 0;
  margin-top: 80px;

  ${breakpoints.tablet} {
    margin-top: 160px;
  }

  ${breakpoints.desktopXL} {
    padding: 80px 0;
  }
`;

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${styles.colors.neutrals.six};
  text-decoration: none;

  ${breakpoints.desktopXL} {
    font-size: 18px;
  }
`;

const GithubIcon = styled.img`
  margin-right: 10px;
  width: 27.97px;
`;
