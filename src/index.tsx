import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCardCount={Setting.PLACE_CARD_COUNT} />
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
Заметки:
  на домашнем ПК заново выпонить npm install
  Добавить компонеты:
    Header
    LocationItem
    LocationsList
    Map
    OffersList
    SortingOffersList
    HeaderOffersList?
    Footer?
    Favorite(s)Button / BookmarkButton на нескольких страницах

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
