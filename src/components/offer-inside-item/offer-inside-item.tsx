type OfferInsideItemProps = {
  text: string;
}

function OfferInsideItem({ text }: OfferInsideItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {text}
    </li>
  );
}

export default OfferInsideItem;
