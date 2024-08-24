import { User } from '.';

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
