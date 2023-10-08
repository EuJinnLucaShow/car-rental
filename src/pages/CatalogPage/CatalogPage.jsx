import CardItem from 'components/CardItem/CardItem';
import { Wrapper, WrapperSelect } from './CatalogPage.styled';
import SelectForm from 'components/Select/Select';

function CatalogPage() {
  return (
    <>
      <WrapperSelect>
        <SelectForm />
      </WrapperSelect>
      <Wrapper>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Wrapper>
    </>
  );
}

export default CatalogPage;
