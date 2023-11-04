import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

import CardItem from 'components/CardItem/CardItem';
import SelectForm from 'components/Select/Select';
import {
  WrapperSelect,
  Wrapper,
  WrapperLink,
  Button,
  ImgEmptyFav,
} from './FavoritePage.styled';

function FavoritePage() {
  const [catalog, setCatalog] = useState([]);
  const cars = useSelector(selectFavorites);

  useEffect(() => {
    if (cars) {
      setCatalog(cars);
    }
  }, [cars]);

  const [filters, setFilters] = useState({
    make: '',
    filteredPrices: [],
    minMileage: '',
    maxMileage: '',
  });
  const [filteredAdverts, setFilteredAdverts] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    if (isFiltering) {
      if (
        filters.make ||
        filters.filteredPrices.length > 0 ||
        filters.minMileage ||
        filters.maxMileage
      ) {
        const filteredAdverts = catalog.filter(advert => {
          if (filters.make && advert.make !== filters.make.value) {
            return false;
          }
          if (
            filters.filteredPrices.length > 0 &&
            !filters.filteredPrices.some(
              priceObj => priceObj.value === advert.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }
          if (filters.minMileage && advert.mileage < filters.minMileage) {
            return false;
          }
          if (filters.maxMileage && advert.mileage > filters.maxMileage) {
            return false;
          }
          return true;
        });
        setFilteredAdverts(filteredAdverts);
      } else {
        setFilteredAdverts([]);
      }
    }
  }, [filters, catalog, isFiltering]);

  const makes = catalog ? [...new Set(catalog.map(advert => advert.make))] : [];
  const prices = catalog
    ? [...new Set(catalog.map(advert => advert.rentalPrice.replace('$', '')))]
    : [];
  const mileage = catalog
    ? [...new Set(catalog.map(advert => advert.mileage))]
    : [];
  const minMileage = Math.min(...mileage);
  const maxMileage = Math.max(...mileage);
  console.log(filters);
  return (
    <>
      <WrapperSelect>
        <SelectForm
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={newFilters => {
            setFilters(newFilters);
            setIsFiltering(true);
          }}
          filters={filters}
        />
      </WrapperSelect>
      <Wrapper>
        {isFiltering ? (
          filteredAdverts !== null && filteredAdverts.length > 0 ? (
            filteredAdverts.map((car, index) => (
              <CardItem key={index} data={car} />
            ))
          ) : (
            <div>No results found for the selected criteria.</div>
          )
        ) : catalog.length > 0 ? (
          catalog.map((car, index) => <CardItem key={index} data={car} />)
        ) : (
          <WrapperLink>
            <span>Favorite is empty.</span>
            <ImgEmptyFav alt="favorite-is-empty" />
            <Button to={'/catalog'}>Go to catalog</Button>
          </WrapperLink>
        )}
      </Wrapper>
    </>
  );
}

export default FavoritePage;
