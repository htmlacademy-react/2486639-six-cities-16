import OfferImage from '../offer-image/offer-image';

function OfferGallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {Array.from({ length: 6 }, () => <OfferImage key='img/room.jpg' url='img/room.jpg' text='Photo studio' />)}
      </div>
    </div>
  );
}

export default OfferGallery;
