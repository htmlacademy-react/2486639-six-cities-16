import { Offer, DetailOffer } from '../types/offer';

//export const offers: Offer[] = [];
//export const detailOffers: DetailOffer[] = [];

/**/
export const offers: Offer[] = [
  {
    id: 'e11c3fc7-e973-4446-b758-20e6e479378d',
    title: 'The house among olive ',
    type: 'house',
    price: 464,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  },
  {
    id: 'b1c2c3a5-a80a-4e0a-910f-ea1bdd1257a8',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 405,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.5
  },
  {
    id: '0eec958b-fc99-4281-80ce-e4402fe9083e',
    title: 'Wood and stone place',
    type: 'room',
    price: 281,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1
  },
  {
    id: '993b5f0a-3e91-4007-aab0-1107fe23467a',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 138,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8
  }
];

export const detailOffers: DetailOffer[] = [
  {
    id: 'e11c3fc7-e973-4446-b758-20e6e479378d',
    title: 'The house among olive ',
    type: 'house',
    price: 464,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.865610000000004,
      longitude: 2.350499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Maxx',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    maxAdults: 2
  },
  {
    id: 'b1c2c3a5-a80a-4e0a-910f-ea1bdd1257a8',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 405,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.846610000000005,
      longitude: 2.374499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      'Heating',
      'Wi-Fi',
      'Coffe',
      'Tea'
    ],
    host: {
      name: 'Maxx',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: true
    },
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '0eec958b-fc99-4281-80ce-e4402fe9083e',
    title: 'Wood and stone place',
    type: 'room',
    price: 281,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Coffe',
      'Tea'
    ],
    host: {
      name: 'Maxx',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg'

    ],
    maxAdults: 6
  },
  {
    id: '993b5f0a-3e91-4007-aab0-1107fe23467a',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 138,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.941361,
      longitude: 6.956974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    goods: [
      'Heating',
      'Wi-Fi'
    ],
    host: {
      name: 'Maxx',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: true
    },
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    maxAdults: 8
  }
];
/**/
