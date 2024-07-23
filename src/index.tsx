import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews} />
  </React.StrictMode>
);

/*
Вопросы:
  {Array.from({ length: placeCardCount }, (_, index) => <PlaceCard key={index} message={message} />)}
    key={index} ?
  favorites.html + favorites-empty.html может объеденить?
    <footer class="footer container">?
    <footer class="footer">
  main.html + main-empty.html может объеденить?
  offer.html + offer-not-logged.html может объеденить?
  параметров в app.tsx еще нет console.log('app', useParams()); получаю offerId в offer-page
  не отрабатывает route NotFound для /1.jpg /1.html  - на лого была ссылка /main.html
  /src/type.ts - расположение именование?
  нужен ли route для все городов /paris ....
Заметки:
  aaa@aaa.aaa / a1
  на домашнем ПК заново выпонить npm install
  в App <Route path={AppRoute.Main} сделать Layout и все переместить вовнутрь или нет или только для городов
  clsx можно установить? несколько суловных классов использовал в src/pages/main-page/main-page.tsx
  в городах NavLink + className ={({isActive})=>clsx({'qq','www':isActive, 'ccc'})}  to=city
  Добавить компонеты:
    +Header  href="main.html" исправил на /  ! Переобъеденить HeaderAuth / HeaderNoAuth / HeaderLogin + class=header__logo-link--active
    +Footer - есть только на Favorites, добавить на другие?  ссылку  href="main.html" исправил на /
    LocationItem
    LocationsList
    Map
    OffersList
    SortingOffersList
    HeaderOffersList?
    Footer?
    Favorite(s)Button / BookmarkButton на нескольких страницах
  Оптимизировать Helmet <title>{`${APP_TITLE}: 404`}</title>....  что то придумать для сборки заголовка
  Переданному id не найден оффер - добавить страницу оффер не найден и ссылку на возврат на главную
--
//Для этого создадим компонент ScrollToTop:
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
--
<ScrollToTop />
--

*/
