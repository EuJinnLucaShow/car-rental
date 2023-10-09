import SelectForm from 'components/Select/Select';

import { WrapperSelect, Wrapper } from './FavoritePage.styled';

function FavoritePage() {
  return (
    <>
      <WrapperSelect>
        <SelectForm />
      </WrapperSelect>
      <Wrapper></Wrapper>
    </>
  );
}

export default FavoritePage;
