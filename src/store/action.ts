import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types';
import { DetailOffer, Offers, OfferId } from '../types/offer';
import { Reviews } from '../types/review';
import { ActionName, AuthorizationStatus, OfferSortigType } from '../const';

export const loadOffers = createAction<Offers>(ActionName.LoadOffers);

export const loadFavoriteOffers = createAction<Offers>(ActionName.LoadFavoriteOffers);

export const loadDetailOffer = createAction<DetailOffer>(ActionName.LoadDetailOffer);

export const loadOfferNearOffers = createAction<Offers>(ActionName.LoadOfferNearOffers);

export const loadOfferReviews = createAction<Reviews>(ActionName.LoadOfferReviews);

export const setOffersDataLoadingStatus = createAction<boolean>(ActionName.SetOffersDataLoadingStatus);

export const changeCityName = createAction<CityName>(ActionName.ChangeCityName);

export const changeOfferSortingType = createAction<OfferSortigType>(ActionName.ChangeOfferSortingType);

export const changeActiveOfferId = createAction<OfferId>(ActionName.ChangeActiveOfferId);

export const requireAuthorization = createAction<AuthorizationStatus>(ActionName.RequireAuthorization);

export const setUserName = createAction<string>(ActionName.SetUserName);
