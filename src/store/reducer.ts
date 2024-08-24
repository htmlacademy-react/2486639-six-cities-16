import { createReducer } from '@reduxjs/toolkit';
import { changeActiveOfferId, changeCityName, changeOfferSortingType, loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { CityName } from '../types';
import { Offer, OfferId } from '../types/offer';
import {
  AuthorizationStatus, DEFALUT_OFFER_SORTING_TYPE,
  DEFAULT_CITY_NAME, OfferSortigType
} from '../const';

type InitialState = {
  cityName: CityName;
  offerSoritngType: OfferSortigType;
  activeOfferId: OfferId;
  offers: Offer[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  cityName: DEFAULT_CITY_NAME,
  offerSoritngType: DEFALUT_OFFER_SORTING_TYPE,
  activeOfferId: null,
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
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
    });
});

export { reducer };
