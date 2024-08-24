import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { OfferId } from '../types/offer';
import { OfferSortigType } from '../const';

export const loadOffers = createAction('load/Offers');

export const changeCityName = createAction<CityName>('main/changeCityName');

export const changeOfferSortingType = createAction<OfferSortigType>('main/changeOfferSortingType');

export const changeActiveOfferId = createAction<OfferId>('main/changeActiveOfferId');
