import OfferInsideItem from '../offer-inside-item/offer-inside-item';

function OfferInside(): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {Array.from({ length: 7 }, (_, index) => <OfferInsideItem key={`Wi-Fi-${index}`} text='Wi-Fi' />)}
      </ul>
    </div>
  );
}

export default OfferInside;
