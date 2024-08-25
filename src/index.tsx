import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';

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
Сделать отправить комментарий и обновить все 100%, избранное убрать/добавить в ответе детальный, его обновить из ответа, а остальное обновить сразу избранные и обычные
  для счетчика можно сделать +-1 в зависимости от действия или от ответа с детализацией и тогда её вынести отдельно и запускать, только на странице с избранным

Вопросы:

Доделать:
  1. пришлось добавить map?.setView(center, zoom); а может, что то не то?
  2. функциям проставить типизацию возвращаемого значение из утилит и остальных модулей
    только, то что TS не может подсказать
    function getCityOffers(cityName: CityName, offers: Offers): Offers {
    function getCityOffers(cityName: CityName, offers: Offers){
  3. типизировать функции и значения
    onSortingTypeChange: (sortingType: OfferSortigType) => void;
      может <argT>  (value:argT)....
  4. списках мест сделать на одном компоненте
    переделать списки в NearPlaces / FavoritesPage + FavoriteItem или есть еще?
  5. в NearPlaces нужен ScrollToTop при переходе по ссылкам, т.к.находимся внизу другого предложения
    после сети и отображения заглушки само прокручиваеться, но может что поменяется
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
  12. когда будет отдельный компонент Лого, то его добавить в Spinner
  13. 7-2-3 Для обработки статуса 401 можно воспользоваться механизмом перехватчиков в axios.
  14. обработать 'Sign out' пока поставил <Link className="header__nav-link" to={AppRoute.Main}>, возможно нужно дейсвие и выход на главную
  15. одинаковый код FavoriteItem и LoginPage обработка клика на название города
    параметр только название города
  16. OfferPage при загрузке данных отрисовывает не надолго 404
    нужен либо таймаю либо текс с информацией о загрузки данных
    const detailOffer = useAppSelector((state) => state.detailOffer);
    if (!detailOffer) {...

    !!!
    пока сделал EMPTY_DETAIL_OFFER, но при сбое запроса выполняю
    dispatch(loadDetailOffer( EMPTY_DETAIL_OFFER ));
    так на странице предложения выполнил
    dispatch(loadDetailOffer({ ...EMPTY_DETAIL_OFFER, id: offerId }));

  17. const offerReviews = [...reviews] // ... т.к. при ассинхронном действии успевает затираться
    может что то будет для 17
  18. при отладке иногда пропадают все предложения и на главной пишет что для города ничего нет...
    особбенно, если зашел по ссылке на оффер, то сначала авторизация, потом оферы, потом детальная информация
    вроде поправил после входа стояло не правильно загрузка избранного, но обычные оферы
  19. //!! очиска формы evt.target.reset

Для авто тестов - если будут ошибки
  1. прячу весь span {isPro ? <span className="offer__user-status">Pro</span> : null}
  2. маркеры на карте 27*39 середина 27/2, если что указать 28*40 и 14
  3. после входа направляю откуда пришли navigate(AppRoute.Main);
    т.к. если сразу navigate(-1)
    а вошли на логин и неавторизован, то не успевает в корректной последовательности выполниться запросы авторизации и проврки авторизации
    и список оферов пустой
    можно сделать в хранилище backRouteAfterLogin  и заполнять в нужных местах и/или передавать через пропы Header

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
