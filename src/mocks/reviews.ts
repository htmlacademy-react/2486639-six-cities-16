import { Review } from '../types/review';

export const mockReviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-10-08T14:13:56.569Z',
    user: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b622',
    date: '2019-06-09T14:13:56.569Z',
    user: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  }];
