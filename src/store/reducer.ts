import { createReducer } from '@reduxjs/toolkit';
import {
  changeActiveOfferId, changeCityName, changeOfferSortingType, loadDetailOffer,
  loadFavoriteOffers, loadOfferNearOffers, loadOfferReviews, loadOffers, requireAuthorization,
  setOffersDataLoadingStatus, setUserName
} from './action';
import { CityName } from '../types';
import { DetailOffer, Offer, OfferId } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatus, DEFALUT_OFFER_SORTING_TYPE, DEFAULT_CITY_NAME, OfferSortigType } from '../const';

type InitialState = {
  cityName: CityName;
  offerSoritngType: OfferSortigType;
  activeOfferId: OfferId;
  offers: Offer[];
  favoriteOffers: Offer[];
  detailOffer: DetailOffer;
  offerNearOffers: Offer[];
  offerReviews: Review[];
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
  detailOffer: null,
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
