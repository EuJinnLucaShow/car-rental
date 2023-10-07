import advertsCars from '../../db/advertsCars.json';

export default function InputForm() {
  const uniqueCarMakes = [...new Set(advertsCars.map(cars => cars.make))];
  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label
          htmlFor="cars"
          style={{
            color: '#8A8A89',
            fontFamily: ' Manrope',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '18px',
          }}
        >
          Car brand
        </label>
        <select
          name="cars"
          id="cars"
          style={{
            borderRadius: '14px',
            background: '#F7F7FB',
            padding: '14px 89px 14px 18px',
            border: 'none',
            width: '225px',
          }}
        >
          <option value="">Enter the text</option>
          {uniqueCarMakes.map(make => (
            <option value={make}>{make}</option>
          ))}
        </select>
      </form>
    </div>
  );
}
