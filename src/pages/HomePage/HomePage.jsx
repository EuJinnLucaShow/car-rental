import Button from 'components/Button/Button';

function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
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
    </>
  );
}

export default HomePage;
