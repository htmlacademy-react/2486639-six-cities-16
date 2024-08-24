import { createReducer } from '@reduxjs/toolkit';
import { changeActiveOfferId, changeCityName, changeOfferSortingType, loadOffers } from './action';
import { CityName } from '../types';
import { Offer, OfferId } from '../types/offer';
import { mockOffers } from '../mocks/offers';
import { DEFALUT_OFFER_SORTING_TYPE, DEFAULT_CITY_NAME, OfferSortigType } from '../const';

type InitialState = {
  cityName: CityName;
  offerSoritngType: OfferSortigType;
  activeOfferId: OfferId;
  offers: Offer[];
}

const initialState: InitialState = {
  //!authorizationStatus  можно суда перенести, наверное при выполении ДЗ с авторизацией
  cityName: DEFAULT_CITY_NAME,
  offerSoritngType: DEFALUT_OFFER_SORTING_TYPE,
  activeOfferId: null,
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state) => {
      state.offers = mockOffers;
    })
    .addCase(changeCityName, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(changeOfferSortingType, (state, action) => {
      state.offerSoritngType = action.payload;
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    });
});

export { reducer };
