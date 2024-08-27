import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { store } from './store';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>
);

/*
Доделать сначала и перепроверить, что автотесты не ломаются:
  1. <Helmet> <title>{`${APP_TITLE}: 404`}</title>....  что то придумать для сборки заголовка
    и добавить константы
    может какие то страницы упустил ?
  2. Оптимизация:
    1. Частая перерисовка
      наведение мышкой на предложение
      список городов при смене города... должно быть проще, с одного выделение снять на друго поставить
        попробовать декопозировать
      выставление признака избранного
        в предложении
        на основной
        в избранном
      еще посмотреть
    2. Декомпозировать
      счетчик избранного, иня пользователя от заголовка
      список городов
  3. Слайсы
  4. RequestStatus используется не все, подумать над boolean
    используется RequestStatus.Loading + RequestStatus.Success


  константы объединенные как enum или const as const! критерий!
  проверить типизацию useState!
  проверить key у компонентов, есть ли ошибки в консоли!
  ...s = []!


Доделать:
  1. пришлось добавить в function useMap
    map?.setView(center, zoom);
    может, что то не так сделал? и должно работать без этого
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
  5. проверить однотипность function и ()=> есть критерий?
  6. одинаковый код FavoriteItem и LoginPage обработка клика на название города
    параметр только название города
  7. OfferPage при загрузке данных отрисовывает не надолго 404
    нужен либо таймаю либо текс с информацией о загрузки данных
    const detailOffer = useAppSelector((state) => state.detailOffer);
    if (!detailOffer) {...

    !!!
    пока сделал EMPTY_DETAIL_OFFER, но при сбое запроса выполняю
    dispatch(loadDetailOffer( EMPTY_DETAIL_OFFER ));
    так на странице предложения выполнил
    dispatch(loadDetailOffer({ ...EMPTY_DETAIL_OFFER, id: offerId }));


Автотесты:
  1. login-page.feature / 1.1.3 Страница Login / Валидация логина и пароля
    возможно стоит разделить автотест на два
      и в первом проверить валидность пароль на "форме",
      а во втором на стороне API
    т.к. вводит в заблуждение подмена ответа при запросе
      при запросе с паролем 'i' подменяет ответ на 200 в ответе указан e-mail: test-user@htmlacademy.ru,
      а должен вернуть 401 и проверить, что форма не очистилась,
      а далее ввести 'i1' и проверить, что авторизация успешна и информация о пользователе появилась.


Новые возможности:
  1. При переходе на предложение из похожих мест, стоит прокрутка страницы вверх
  2. При входе и выходе пользователя обновляеться список предложений, т.к. у гостя признак "избранное" у всех предложений всегда ложно. Нет проверки в автотестах.
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

  после входа ходелось бы направить откуда пришли...
    Route в App направляет на главную, сделать state или prop
    в внего складывать значение, если оно не заполнено то возврат на по умолчанию
*/
