import OfferImage from '../offer-image/offer-image';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery({ images }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => <OfferImage key={image} url={image} text='Photo studio' />)}
      </div>
    </div>
  );
}

export default OfferGallery;
