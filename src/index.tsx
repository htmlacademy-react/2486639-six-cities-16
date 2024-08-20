import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers, detailOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      detailOffers={detailOffers}
      nearOffers={offers}
      reviews={reviews}
    />
  </React.StrictMode>
);

/*
Вопросы:
  1. {isPro ? 'Pro' : ''} или весь span не показывать?
  2. какие выбрать размеры для иконок маркеров карты /img/pin.svg /img/pin-active.svg
    в <svg width="27" height="39"
    указать 28*40? а середину 27/2 13 14? без разницы?
  3. в маркапах <p className="offer__text"> как то разбито по частям.... перенос строки или '.' или длинна какая-то... глянуть как в ТЗ
    OfferHost / const descriptions = [description, description];
  4. параметров в app.tsx еще нет console.log('app', useParams()); получаю offerId в offer-page
    а есть вариант как получить в APP и например подготовить данные
      const params = useParams();
      const offerId: OfferId | undefined = params.id;
  5. не отрабатывает route NotFound для /1.jpg /1.html  - на лого была ссылка /main.html
  6. css классы в коде у новых компонентов, нужно выносить в константы?
  7. отаются полоски над и под назвааниями городов locations__item-link tabs__item tabs__item--active
    пока не переключишься на другую вкладку и обранто, но и при наведении иногда появляются
  8. ссылка на город
    на главной что в сделать в заголовке?, как в макете #? или имя города? посмотреть в ТЗ
    на странице с избранным
      где сгруппировано по городам сделать Route?
      Оформелние 'favorites__locations locations locations--current' посмотреть макет...
        наведенный? выбранный на главной? или просто отображение синим все города?
  9. OfferReviewsForm
    перепроверить условие включения кнопки по ТЗ, нужен ли trim для текста?
      const isSubmitButtonDisabled = ...
    заменить "Your review {rating} - {text}" -> "Your review"

Доделать:
  1. функциям проставить типизацию возвращаемого значение из утилит и остальных модулей
  2. типизировать функции и значения
    onMouseEnter ?: (offerId: OfferId) => void;
    onMouseLeave ?: () => void;
    onPlaceCardMouseEnter ?: (offerId: OfferId) => void;
    onPlaceCardMouseLeave ?: () => void;
    onCityNameClick: (cityName: CityName) => void;
    const handlePlaceCardMouseEnter: Тип
    const handlePlaceCardMouseLeave: Тип
    const handleCityNameClick: Тип
  3. classNamePrefix попробовать переделать на передачу типа или как то по другому
    или имя сменить
    или разбить на нужные
    и убрать излишние константы
      OfferTypeFeatureTemplate[OfferTypeFeature.Entire]: ['', '']
        не могу убрать ошибку TS OfferTypeFeatureTemplate[key] хотя выше проверка - (key in OfferTypeFeatureTemplate)
        и BookmarkButtonIconSize[ClassNamePrefix.Reviews]: { width: 0, height: 0 }, +[ClassNamePrefix.Cities]: { width: 0, height: 0 }
  4. в списках мест сделать опциональные колбеки и перенести все списки на один компонент
    сделать опцию выводить сортировку или перенсти в родительский компонент
    переделать списки в NearPlaces / FavoritesPage + FavoriteItem или есть еще?
  5. в NearPlaces нужен ScrollToTop при переходе по ссылкам, т.к.находимся внизу другого предложения
  6. применить classNames в остальных компанентах
  7. <Helmet> <title>{`${APP_TITLE}: 404`}</title>....  что то придумать для сборки заголовка
    и добавить константы
    может какие то страницы упустил ?
  8. Переобъеденить HeaderAuth / HeaderNoAuth / HeaderLogin + class=header__logo - link--active
    HeaderAuth - сделать разное поведение ссылки
      <a className = "header__logo-link header__logo-link--active">
      <a className="header__logo-link">
  9. OfferGallery - const key = `img-${index}`;
    когда будут реальные данные, то ключ сделать путем и проверить ошибки в консоли
    с одинковым ключем у всех 6-ти не корректно обновлялись при переключичении с мест не подалеку

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
