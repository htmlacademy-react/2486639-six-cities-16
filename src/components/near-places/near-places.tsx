import PlaceCardInfo from '../place-card-info/place-card-info';
import { Offer } from '../../types/offer';

type NearPlacesProps = {
  offers: Offer[];
}

function NearPlaces({ offers }: NearPlacesProps): JSX.Element {
  const isOffersEmpty: boolean = !offers.length;
  const caption = isOffersEmpty ? 'There are no other places in the neighbourhood' : 'Other places in the neighbourhood';

  //! нужна прокрутка, может попробовать ScrollToTop в src\index.tsx

  return (
    <section className="near-places places">
      <h2 className="near-places__title">{caption}</h2>
      {
        !offers.length
          ? null
          :
          <div className="near-places__list places__list">
            {
              offers.map((offer) => (
                <article key={offer.id} className="near-places__card place-card">
                  <PlaceCardInfo
                    additionalImageClassName="near-places__image-wrapper"
                    imageWidth="260"
                    imageHeight="200"
                    offer={offer}
                  />
                </article>
              ))
            }
          </div>
      }
    </section>
  );
}

export default NearPlaces;
