import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city';

export const loadOffers = createAction('load/Offers');

export const changeCityName = createAction<CityName>('changeCityName');
