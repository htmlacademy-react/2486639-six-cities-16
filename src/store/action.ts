import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { PlacesSortingTypes } from '../const';

export const loadOffers = createAction('load/Offers');

export const changeCityName = createAction<CityName>('changeCityName');

export const changePlacesSortingType = createAction<PlacesSortingTypes>('changePlacesSortingType');
