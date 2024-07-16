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

*/
