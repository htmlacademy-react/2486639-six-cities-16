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
ДЗ 4
 форма добавления коментария
  state (rating и text) - вывести куданибуть в верхний компонет через обработчик, rating без делегирования, прямо каждой звезде а не общему диву
   evt.target instanceof HTMLInputElement
 расширенный массив моков
  расширенный тип, общее выделить в один тип, сделать тип для id и то что отдельно испкользуется
  создать расширенные с теми же данными
  добавить вывод в компоненты, для спален и т.д. предуксмотреть множественное число не 's', а нормальный словарь
 тип для пользователя
 пересмотреть алгоритм группировки по городам
 ссылки на города в избранных похожи на ссылки на города на главной

  как типизировать enum PlacesSortingTypes[key]? сделал {Object.values(PlacesSortingTypes).map(
  параметров в app.tsx еще нет console.log('app', useParams()); получаю offerId в offer-page
  не отрабатывает route NotFound для /1.jpg /1.html  - на лого была ссылка /main.html
  нужен ли route для все городов /paris ....
  imageWidth imageHeight iconWidth iconHeight? строками и константами нормально? или выносить в константы и делать числа?
  css классы в коде у новых компонентов, нужно выносить в константы?
  <Helmet> <title>{`${APP_TITLE}: 404`}</title>....  что то придумать для сборки заголовка
   и добавить константы
   может какие то страницы упустил?

Заметки:
  aaa@aaa.aaa / a1
  много похожих типов, выделить type Id = string, не всегда помнишь типы... MiniOffer = Offer без ...
  разметку компонентов *List
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
