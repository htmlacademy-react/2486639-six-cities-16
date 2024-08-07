import { upFirstLetter } from '../../utils/util';
import { getFeatureText } from '../../utils/offer';
import { OfferTypeFeature } from '../../const';

type OfferFeaturesProps = {
  offerType: string;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeatures({ offerType, bedrooms, maxAdults }: OfferFeaturesProps): JSX.Element {
  const features = [
    { type: OfferTypeFeature.Entire, text: upFirstLetter(offerType) },
    { type: OfferTypeFeature.Bedrooms, text: getFeatureText(OfferTypeFeature.Bedrooms, bedrooms) },
    { type: OfferTypeFeature.Adults, text: getFeatureText(OfferTypeFeature.Adults, maxAdults) }
  ];

  return (
    <ul className="offer__features">
      {
        features.map(({ type, text }) => (
          <li key={type} className={`offer__feature offer__feature--${type}`}>
            {text}
          </li>
        ))
      }
    </ul>
  );
}

export default OfferFeatures;
