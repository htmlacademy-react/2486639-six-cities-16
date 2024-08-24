import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types';
import { DetailOffer, Offer, OfferId } from '../types/offer';
import { ActionName, AuthorizationStatus, OfferSortigType } from '../const';

export const loadOffers = createAction<Offer[]>(ActionName.LoadOffers);

export const loadDetailOffer = createAction<DetailOffer | null>(ActionName.LoadDetailOffer);

export const setOffersDataLoadingStatus = createAction<boolean>(ActionName.SetOffersDataLoadingStatus);

export const changeCityName = createAction<CityName>(ActionName.ChangeCityName);

export const changeOfferSortingType = createAction<OfferSortigType>(ActionName.ChangeOfferSortingType);

export const changeActiveOfferId = createAction<OfferId>(ActionName.ChangeActiveOfferId);

export const requireAuthorization = createAction<AuthorizationStatus>(ActionName.RequireAuthorization);

export const setUserName = createAction<string>(ActionName.SetUserName);
