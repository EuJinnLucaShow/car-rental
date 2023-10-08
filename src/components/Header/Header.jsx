import { NavMenu, HeaderWrapper, Container } from './HeaderStyled';

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <NavMenu to="/">Home</NavMenu>
        <NavMenu to="/catalog">Catalog</NavMenu>
        <NavMenu to="/favorites">Favorites</NavMenu>
      </Container>
    </HeaderWrapper>
  );
}
