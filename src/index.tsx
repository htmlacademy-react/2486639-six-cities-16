import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

/*
Доделать сначала и перепроверить, что автотесты не ломаются:
  +1. применить classNames в остальных компанентах
  +2. в NearPlaces нужен ScrollToTop при переходе по ссылкам, т.к.находимся внизу другого предложения
    после сети и отображения заглушки само прокручиваеться, но может что поменяется
    не работает показалось сделать ScrollToTop !
  3. Проверить Спинеры на разных страницах
    если смотриться не очеть то сделать еще Loading... для компонетов где уже есть внешнее оформление
  4. Предупреждение React на navigate(AppRoute.Main); после if (loginCheckRequestStatus === RequestStatus.Success) {
    login-form.tsx:15 - You should call navigate() in a React.useEffect(), not when your component is first rendered.
    если сделать useEffect, то не работает автотест 1.1.3 Страница Login - При переключении страниц форма очищается

  константы объединенные как enum или const as const! критерий!
  проверить типизацию useState!
  проверить key у компонентов, есть ли ошибки в консоли!
  ...s = []!

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
    передать пропс isHoverChange для обработки
  5. <Helmet> <title>{`${APP_TITLE}: 404`}</title>....  что то придумать для сборки заголовка
    и добавить константы
    может какие то страницы упустил ?
  6. проверить однотипность function и ()=> есть критерий?
  7. одинаковый код FavoriteItem и LoginPage обработка клика на название города
    параметр только название города
  8. OfferPage при загрузке данных отрисовывает не надолго 404
    нужен либо таймаю либо текс с информацией о загрузки данных
    const detailOffer = useAppSelector((state) => state.detailOffer);
    if (!detailOffer) {...

    !!!
    пока сделал EMPTY_DETAIL_OFFER, но при сбое запроса выполняю
    dispatch(loadDetailOffer( EMPTY_DETAIL_OFFER ));
    так на странице предложения выполнил
    dispatch(loadDetailOffer({ ...EMPTY_DETAIL_OFFER, id: offerId }));

  9. При логине/логауте обновлять списка предложений, т.к. там появляються и исчезают отметки избранное
    сделал
        if (isChangeAuthorizationStatus) {
          dispatch(fetchOffersAction());
          dispatch(changeAuthorizationStatus(false));
          // если наоборот то автотест сортировки ломаеться
        }
    загрузка оферов была один раз
        useEffect(() => {
          dispatch(fetchOffersAction());
        }, [dispatch]);
    ! так была ошибка при реакта при отрисовке, либо в начале, если поменять очередность загрузки то при входе выходе
    ! поставил загрузку предложений после проверки статуса авторизации и после выхода и входа

Автотесты:
  1. login-page.feature / 1.1.3 Страница Login / Валидация логина и пароля
    при запросе с паролем 'i' подменяет ответ на 200 в ответе указан e-mail: test-user@htmlacademy.ru,
    а должен вернуть 401 и проверить, что форма не очистилась,
    а далее ввести 'i1' и проверить, что авторизация успешна и информация о пользователе появилась.
    для проверки: в const loginAction = createAsyncThunk...
    посе try {
    вставить
      if (password === 'i') {
        dispatch(setLoginCheckRequestStatus(RequestStatus.Failed));
        return;
      }
Новые возможности:
  1. При переходе на предложение из похожих мест, стоит прокрутка страницы вверх
  2. При входе и выходе пользователя обновляеться список предложений, т.к. у гостя признак "избранное" у всех предложений всегда ложно. Нет проверки в автотестах.

Заметки:
  aaa@aaa.aaa / a1

  в App <Route path={AppRoute.Main} сделать Layout и все переместить во внутрь или нет...

  библиотеку map оставить на точках, а не привязывать к оферам, и сделать конвектор и причесать критерии
  точки на карте сделать отдельным хуком?
  попробовать точкам передать описание и подсвечавить при наведении
  как типизировать
    format: string -> format: typeof DateFormat ...  const DateFormat = {DATE: 'YYYY-MM-DD',  MONTH_YEAR: 'MMMM YYYY'}...
      или только через enum или массив, а может сузить...

  отаются полоски над и под назвааниями городов locations__item-link tabs__item tabs__item--active
    пока не переключишься на другую вкладку и обранто, но и при наведении иногда появляются

  после входа направляю откуда пришли navigate(AppRoute.Main);
    т.к. если сразу navigate(-1)
    а вошли на логин и неавторизован, то не успевает в корректной последовательности выполниться запросы авторизации и проврки авторизации
    и список оферов пустой
    можно сделать в хранилище backRouteAfterLogin  и заполнять в нужных местах и/или передавать через пропы Header
    есть useLocation, добавить пропс from? как в разботе ДЗ ProtectRoute

*/
