import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
Вопросы:

Доделать:
  1. пришлось добавить map?.setView(center, zoom); а может, что то не то?
  2. функциям проставить типизацию возвращаемого значение из утилит и остальных модулей
    только, то что TS не может подсказать
    function getCityOffers(cityName: CityName, offers: Offer[]): Offer[] {
    function getCityOffers(cityName: CityName, offers: Offer[]){
  3. типизировать функции и значения
    onSortingTypeChange: (sortingType: OfferSortigType) => void;
      может <argT>  (value:argT)....
  4. списках мест сделать на одном компоненте
    переделать списки в NearPlaces / FavoritesPage + FavoriteItem или есть еще?
  5. в NearPlaces нужен ScrollToTop при переходе по ссылкам, т.к.находимся внизу другого предложения
  6. применить classNames в остальных компанентах
  7. <Helmet> <title>{`${APP_TITLE}: 404`}</title>....  что то придумать для сборки заголовка
    и добавить константы
    может какие то страницы упустил ?
  8. OfferGallery - const key = `img-${index}`;
    когда будут реальные данные, то ключ сделать путем и проверить ошибки в консоли
    с одинковым ключем у всех 6-ти не корректно обновлялись при переключичении с мест не подалеку
  9. проверить однотипность function и ()=> есть критерий?
  10. createAction('load/Offers'); всынести строку в константы, если не сделаем по имени действия
  11. в демо feath вызван вне App
  12. заменить в OfferReviewsForm "Your review {rating} - {text}" -> "Your review", как будет готов API
  13. когда будет отдельный компонент Лого, то его добавить в Spinner
  14. 7-2-3 Для обработки статуса 401 можно воспользоваться механизмом перехватчиков в axios.
  15. обработать 'Sign out' пока поставил <Link className="header__nav-link" to={AppRoute.Main}>, возможно нужно дейсвие и выход на главную
  16. одинаковый код FavoriteItem и LoginPage обработка клика на название города
    параметр только название города

Для авто тестов - если будут ошибки
  1. прячу весь span {isPro ? <span className="offer__user-status">Pro</span> : null}
  2. маркеры на карте 27*39 середина 27/2, если что указать 28*40 и 14

Заметки:
  aaa@aaa.aaa / a1

  в App <Route path={AppRoute.Main} сделать Layout и все переместить вовнутрь или нет или только для городов

  константы объединенные как enum или const as const! критерий!
  проверить типизацию useState!
  проверить key у компонетов, вездели ли есть и нет ли ошибок в консоли!
  ...s = []!

  библиотеку map оставить на точках, а не привязывать к оферам, и сделать конвектор и причесать критерии
  точки на карте сделать отдельным хуком?
  попробовать точкам передать описание и подсвечавить при наведении
  как типизировать
    format: string -> format: typeof DateFormat ...  const DateFormat = {DATE: 'YYYY-MM-DD',  MONTH_YEAR: 'MMMM YYYY'}...
      или только через enum или массив, а может сузить...

  отаются полоски над и под назвааниями городов locations__item-link tabs__item tabs__item--active
    пока не переключишься на другую вкладку и обранто, но и при наведении иногда появляются

  ссылка на лого на главной, при клике остаеться наведенной навигация не происходит т.к. уже на главной...
    может если на главной, то отключить ссылку на логотипе?

--
// может понадобится подчет рейтинга...
const ratingValue = reviews.reduce((ratingTotal, {rating}) => ratingTotal + rating, 0) / reviews.length;
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
