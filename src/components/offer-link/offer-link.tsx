import { Link } from 'react-router-dom';
import { OFFER_PATH } from '../../const';

type OfferLinkProps = {
  offerId: string;
  children: string | JSX.Element;
}

function OfferLink({ offerId, children }: OfferLinkProps): JSX.Element {
  return (
    <Link to={`${OFFER_PATH}${offerId}`}>
      {children}
    </Link>
  );
}

export default OfferLink;
