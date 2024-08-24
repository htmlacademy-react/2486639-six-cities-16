import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types';
import { Offer, OfferId } from '../types/offer';
import { ActionName, OfferSortigType } from '../const';

export const loadOffers = createAction<Offer[]>(ActionName.LoadOffers);

export const setOffersDataLoadingStatus = createAction<boolean>(ActionName.SetOffersDataLoadingStatus);

export const changeCityName = createAction<CityName>(ActionName.ChangeCityName);

export const changeOfferSortingType = createAction<OfferSortigType>(ActionName.ChangeOfferSortingType);

export const changeActiveOfferId = createAction<OfferId>(ActionName.ChangeActiveOfferId);
