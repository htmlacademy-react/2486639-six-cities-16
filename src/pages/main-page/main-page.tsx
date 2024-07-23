import { Offer } from '../../types/offer';
import HeaderAuth from '../../components/header/header-auth';
import Locations from '../../components/locations/locations';
import Cities from '../../components/cities/cities';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderAuth />

      <main className={`page__main page__main--index ${(offers.length) ? '' : 'page__main--index-empty'}`}>
        <Locations />
        <Cities offers={offers} />
      </main>
    </div>
  );
}

export default MainPage;
