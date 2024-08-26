import { createReducer } from '@reduxjs/toolkit';
import {
  changeActiveOfferId, changeCityName, changeDetailOffer, changeOfferSortingType,
  loadDetailOffer, loadFavoriteOffers, loadOfferNearOffers, loadOfferReview,
  loadOfferReviews, loadOffers, requireAuthorization, setOffersDataLoadingStatus,
  setUserName
} from './action';
import { CityName } from '../types';
import { DetailOffer, Offers, OfferId } from '../types/offer';
import { Reviews } from '../types/review';
import { upadteOffer } from '../utils/offer';
import {
  AuthorizationStatus, DEFALUT_OFFER_SORTING_TYPE, DEFAULT_CITY_NAME,
  EMPTY_DETAIL_OFFER, OfferSortigType
} from '../const';

type InitialState = {
  cityName: CityName;
  offerSoritngType: OfferSortigType;
  activeOfferId: OfferId;
  offers: Offers;
  favoriteOffers: Offers;
  detailOffer: DetailOffer;
  offerNearOffers: Offers;
  offerReviews: Reviews;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userName: string;
}

const initialState: InitialState = {
  cityName: DEFAULT_CITY_NAME,
  offerSoritngType: DEFALUT_OFFER_SORTING_TYPE,
  activeOfferId: null,
  offers: [],
  favoriteOffers: [],
  detailOffer: EMPTY_DETAIL_OFFER,
  offerNearOffers: [],
  offerReviews: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userName: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeDetailOffer, (state, action) => {
      state.detailOffer = action.payload;
      upadteOffer(action.payload, state.offers);
      upadteOffer(action.payload, state.favoriteOffers);
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(loadDetailOffer, (state, action) => {
      state.detailOffer = action.payload;
    })
    .addCase(loadOfferNearOffers, (state, action) => {
      state.offerNearOffers = action.payload;
    })
    .addCase(loadOfferReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(loadOfferReview, (state, action) => {
      state.offerReviews.push(action.payload);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(changeCityName, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(changeOfferSortingType, (state, action) => {
      state.offerSoritngType = action.payload;
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.userName = action.payload;
    });
});

export { reducer };
