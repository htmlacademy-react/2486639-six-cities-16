function OfferInside(): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {
          Array.from(
            { length: 7 },
            (_, index) => (
              <li key={`Wi-Fi-${index}`} className="offer__inside-item">
                {'Wi-Fi'}
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default OfferInside;
