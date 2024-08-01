import { Offer } from '../../types/offer';
import PlaceCardImageLink from '../place-card-image-link/place-card-image-link';
import PlaceCardInfo from '../place-card-info/place-card-info';
import PlaceCardMark from '../place-card-mark/place-card-mark';

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
            {offers.map((offer) => {
              const {
                id,
                previewImage,
                isPremium
              } = offer;

              return (
                <article key={id} className="near-places__card place-card">
                  {isPremium ? <PlaceCardMark /> : null}
                  <PlaceCardImageLink
                    additionalClassName="near-places__image-wrapper"
                    id={id}
                    previewImage={previewImage}
                    imageWidth="260"
                    imageHeight="200"
                  />
                  <PlaceCardInfo offer={offer} />
                </article>
              );
            })}
          </div>
      }
    </section>
  );
}

export default NearPlaces;
