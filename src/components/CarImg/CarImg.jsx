import { useEffect, useState } from 'react';
import { ImageCar } from './CarImg.styled';
import CarLoading from '../../images/loader.gif';

export default function CarImg({ data }) {
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = data.img;

    img.onload = () => {
      setImageLoading(true);
    };

    img.onerror = () => {
      setImageLoading(false);
      setImageError(true);
    };
  }, [data.img]);

  return (
    <>
      {imageError ? (
        <ImageCar src={CarLoading} alt="Error Loading Image Car" />
      ) : (
        imageLoading && <ImageCar src={data.img} alt="Car" />
      )}
    </>
  );
}
