import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types';
import { DetailOffer, Offer, OfferId } from '../types/offer';
import { Review } from '../types/review';
import { ActionName, AuthorizationStatus, OfferSortigType } from '../const';

export const loadOffers = createAction<Offer[]>(ActionName.LoadOffers);

export const loadFavoriteOffers = createAction<Offer[]>(ActionName.LoadFavoriteOffers);

export const loadDetailOffer = createAction<DetailOffer>(ActionName.LoadDetailOffer);

export const loadOfferNearOffers = createAction<Offer[]>(ActionName.LoadOfferNearOffers);

export const loadOfferReviews = createAction<Review[]>(ActionName.LoadOfferReviews);

export const setOffersDataLoadingStatus = createAction<boolean>(ActionName.SetOffersDataLoadingStatus);

export const changeCityName = createAction<CityName>(ActionName.ChangeCityName);

export const changeOfferSortingType = createAction<OfferSortigType>(ActionName.ChangeOfferSortingType);

export const changeActiveOfferId = createAction<OfferId>(ActionName.ChangeActiveOfferId);

export const requireAuthorization = createAction<AuthorizationStatus>(ActionName.RequireAuthorization);

export const setUserName = createAction<string>(ActionName.SetUserName);
