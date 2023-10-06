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
      <Button text="Learn more" onClick={() => alert('Click button')} />
    </>
  );
}

export default HomePage;
