import { User } from '../../types/user';

type OfferHostProps = {
  host: User;
  description: string;
}

function OfferHost({ host, description }: OfferHostProps): JSX.Element {
  const { name, isPro, avatarUrl } = host;
  const descriptions = [description, description];

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="offer__user-name">
          {name}
        </span>
        <span className="offer__user-status">
          {isPro ? 'Pro' : ''}
        </span>
      </div>
      <div className="offer__description">
        {
          descriptions.map((text, index) => {
            const key = `text-${index}`;

            return (
              <p key={key} className="offer__text">
                {text}
              </p>
            );
          })
        }
      </div>
    </div>
  );
}

export default OfferHost;
