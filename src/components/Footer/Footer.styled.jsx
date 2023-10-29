import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  height: 50px;
  background-color: #f0f0fa;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Logo = styled.img`
  width: 100px;
  position: absolute;
  left: 48%;
  @media screen and (max-width: 768px) {
    left: 38%;
  }
`;
