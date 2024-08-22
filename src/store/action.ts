import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { OfferSortigTypes } from '../const';

export const loadOffers = createAction('load/Offers');

export const changeCityName = createAction<CityName>('changeCityName');

export const changeOfferSortingType = createAction<OfferSortigTypes>('changeOfferSortingType');
