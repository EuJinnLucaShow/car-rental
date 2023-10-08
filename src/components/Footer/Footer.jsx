import { FooterWrapper, Container } from './Footer.styled';
import logoFooter from '../../images/car-rental-logopreview.png';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <img
          src={logoFooter}
          alt="logo"
          style={{ width: '100px', position: 'absolute', left: '48%' }}
        />
      </Container>
    </FooterWrapper>
  );
}
