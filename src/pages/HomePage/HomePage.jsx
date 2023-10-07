import Button from 'components/Button/Button';
import CardItem from 'components/CardItem/CardItem';
import InputForm from 'components/InputForm/InputForm';

import SelectAvto from 'components/SelectAvto/SelectAvto';
import SelectCar from 'components/SelectCar/SelectCar';

function HomePage() {
  return (
    <>
      <CardItem />

      <InputForm />

      <SelectCar />
      <SelectAvto />
      <br />
      <br />
      <Button
        text="Learn more"
        onClick={() => alert('Click button')}
        width="274px"
      />
      <br />
      <br />
      <Button
        text="Rental car"
        onClick={() => alert('Click button')}
        width="168px"
      />
      <br />
      <br />
      <Button
        text="Search"
        onClick={() => alert('Click button')}
        width="135px"
      />
      <br />
      <br />
    </>
  );
}

export default HomePage;
