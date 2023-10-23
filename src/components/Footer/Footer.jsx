import { FooterWrapper, Container, Logo } from './Footer.styled';
import logoFooter from '../../images/car-rental-logopreview.png';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Logo src={logoFooter} alt="logo" />
      </Container>
    </FooterWrapper>
  );
}
