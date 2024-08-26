import { createReducer } from '@reduxjs/toolkit';
import {
  changeActiveOfferId, changeCityName, changeDetailOffer, changeOfferSortingType,
  loadDetailOffer, loadFavoriteOffers, loadOfferNearOffers, loadOfferReview,
  loadOfferReviews, loadOffers, requireAuthorization, setLoginCheckRequestStatus,
  setOffersLoadingRequestStatus, setReviewPostingRequestStatus, setUserName
} from './action';
import { CityName } from '../types';
import { DetailOffer, Offers, OfferId } from '../types/offer';
import { Reviews } from '../types/review';
import { upadteOffer } from '../utils/offer';
import {
  AuthorizationStatus, DEFALUT_OFFER_SORTING_TYPE, DEFAULT_CITY_NAME, EMPTY_DETAIL_OFFER,
  OfferSortigType, RequestStatus
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
  loginCheckRequestStatus: RequestStatus;
  offersLoadingRequestStatus: RequestStatus;
  reviewPostingRequestStatus: RequestStatus;
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
  loginCheckRequestStatus: RequestStatus.Idle,
  offersLoadingRequestStatus: RequestStatus.Idle,
  reviewPostingRequestStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
  userName: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeDetailOffer, (state, action) => {
      const detailOffer = action.payload;

      state.detailOffer = detailOffer;
      upadteOffer(detailOffer, state.offers);
      if (!detailOffer.isFavorite) {
        state.favoriteOffers = state.favoriteOffers.filter(({ id }) => (id !== detailOffer.id));
      }
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
    .addCase(setLoginCheckRequestStatus, (state, action) => {
      state.loginCheckRequestStatus = action.payload;
    })
    .addCase(setOffersLoadingRequestStatus, (state, action) => {
      state.offersLoadingRequestStatus = action.payload;
    })
    .addCase(setReviewPostingRequestStatus, (state, action) => {
      state.reviewPostingRequestStatus = action.payload;
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
