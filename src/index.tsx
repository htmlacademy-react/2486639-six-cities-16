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
ДЗ 5
 подсветка маркеров
  на главной
  на предложении
 попробовать реализовать смену города - активный Париж / но нужный локации городов
   может оферы сгруппировать по городам и сразу сделать локации городов?
 где же взять иконки маркеров? /img/pin.svg /img/pin-active.svg
 типизировать useState
 нейминг, handleInputChange, а в пропсах onInputChange
 ? библиотеку map оставить на точках, а не привязывать к оферам, и сделать конвектор и причесать критерии
 константы объединенные как enum или const as const
 на карте перепроверить высоту...
 точки на карте сделать отдельным хуком?
 попробовать точкам передать описание и подсвечавить при наведении
 коментраии все, но выводяться последние 10 по дате! отсортировать!
 перепроверить передаче данных через index в App
 колбеки в списках опционально и не делать несколько списков

Вопросы:
  {isPro ? 'Pro' : ''} или весь span не показывать?
  <p className="offer__text"> как то разбито по частям, глянуть как в ТЗ, перенос строки или '.' или длинна
  как типизировать enum PlacesSortingTypes[key]? сделал {Object.values(PlacesSortingTypes).map(
  параметров в app.tsx еще нет console.log('app', useParams()); получаю offerId в offer-page
  не отрабатывает route NotFound для /1.jpg /1.html  - на лого была ссылка /main.html
  нужен ли route для все городов /paris ....
  imageWidth imageHeight iconWidth iconHeight? строками и константами нормально? или выносить в константы и делать числа?
  classNames
  css классы в коде у новых компонентов, нужно выносить в константы?
  <Helmet> <title>{`${APP_TITLE}: 404`}</title>....  что то придумать для сборки заголовка
   и добавить константы
   может какие то страницы упустил?

Заметки:
  aaa@aaa.aaa / a1
  price.tsx и остальные, может в компонент передавать тип 'place-card' 'offer',
   а не строку, сделать несколько вспомогательных функций is и переделать названия типов, добавить соответствие с префиксом класса
   проработать '<Mark className'
   проработать '<PlaceCardInfo'
   поискать еще...
  проверить key у компонетов, вездели ли есть и нет ли ошибок в консоли
  на домашнем ПК заново выпонить npm install
  в App <Route path={AppRoute.Main} сделать Layout и все переместить вовнутрь или нет или только для городов
  clsx можно установить? несколько суловных классов использовал в src/pages/main-page/main-page.tsx
  в городах NavLink + className ={({isActive})=>clsx({'qq','www':isActive, 'ccc'})}  to=city
  FavoriteItem - часть функционла похожа на place-card.tsx, ссылка с картинкой, премиум, там еще есть обработчики

  Переобъеденить HeaderAuth / HeaderNoAuth / HeaderLogin + class=header__logo-link--active
  Переданному id не найден оффер - добавить страницу оффер не найден и ссылку на возврат на главную
--
  const ratingValue = reviews.reduce((ratingTotal, { rating }) => ratingTotal + rating, 0) / reviews.length;
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
