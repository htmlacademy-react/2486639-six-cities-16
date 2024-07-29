import OfferImage from '../offer-image/offer-image';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image, index) => {
          const key = `img-${index}`;
          //! когда будут реальные данные, то ключь сделать путем и проверить ошибки в консоли
          //! с одинковым ключем у всех 6ти не корректно обновлялись при переключичении с мест не подалеку

          return (<OfferImage key={key} url={image} text='Photo studio' />);
        })}
      </div>
    </div>
  );
}

export default OfferGallery;
