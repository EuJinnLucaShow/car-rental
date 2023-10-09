import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import CardItem from 'components/CardItem/CardItem';
import SelectForm from 'components/Select/Select';
import { useGetCarsByPageQuery } from '../../redux/operations';
import { Loader } from 'components/Loader/Loader';

import { Wrapper, WrapperSelect } from './CatalogPage.styled';

function CatalogPage() {
  const [page, setPage] = useState(1);
  const [catalog, setCatalog] = useState([]); // Стейт для хранения всех карточек

  const { data, error, isLoading, isFetching } = useGetCarsByPageQuery(page);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      setCatalog(prevCatalog => [...prevCatalog, ...data]);
    }
  }, [data]);

  return (
    <>
      <WrapperSelect>
        <SelectForm />
      </WrapperSelect>
      <Wrapper>
        {error ? (
          <>Oops, there was an error...</>
        ) : isLoading ? (
          <Loader />
        ) : catalog.length > 0 ? (
          <>
            {catalog.map(car => (
              <CardItem key={car.id} data={car} />
            ))}
          </>
        ) : null}
        {data && data.length >= 8 && (
          <Button variant="text" onClick={loadMore} disabled={isFetching}>
            Load more
          </Button>
        )}
      </Wrapper>
    </>
  );
}

export default CatalogPage;
