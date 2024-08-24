import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { OfferId } from '../types/offer';
import { ActionName, OfferSortigType } from '../const';

export const loadOffers = createAction(ActionName.LoadOffers);

export const changeCityName = createAction<CityName>(ActionName.ChangeCityName);

export const changeOfferSortingType = createAction<OfferSortigType>(ActionName.ChangeOfferSortingType);

export const changeActiveOfferId = createAction<OfferId>(ActionName.ChangeActiveOfferId);
