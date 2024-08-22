import { createReducer } from '@reduxjs/toolkit';
import { changeCityName, changeOfferSortingType, loadOffers } from './action';
import { Offer } from '../types/offer';
import { mockOffers } from '../mocks/offers';
import { DEFALUT_OFFER_SORTING_TYPE, DEFAULT_CITY_NAME } from '../const';

const emptyOffers: Offer[] = [];

const initialState = {
  //!authorizationStatus  можно суда перенести, наверное при выполении ДЗ с авторизацией
  cityName: DEFAULT_CITY_NAME,
  offerSoritngType: DEFALUT_OFFER_SORTING_TYPE,
  offers: emptyOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state) => {
      state.offers = mockOffers;
    })
    .addCase(changeCityName, (state, action) => {
      state.offerSoritngType = DEFALUT_OFFER_SORTING_TYPE;
      state.cityName = action.payload;
    })
    .addCase(changeOfferSortingType, (state, action) => {
      state.offerSoritngType = action.payload;
    });
});

export { reducer };
