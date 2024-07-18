type OfferImageProps = {
  url: string;
  text: string;
}

function OfferImage({ url, text }: OfferImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={url} alt={text} />
    </div>
  );
}

export default OfferImage;
