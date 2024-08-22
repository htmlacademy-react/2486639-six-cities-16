import { createReducer } from '@reduxjs/toolkit';
import { changeCityName, loadOffers } from './action';
import { Offer } from '../types/offer';
import { mockOffers } from '../mocks/offers';
import { DEFAULT_CITY_NAME } from '../const';

const emptyOffers: Offer[] = [];

const initialState = {
  //!authorizationStatus  можно суда перенести, наверное при выполении ДЗ с авторизацией
  cityName: DEFAULT_CITY_NAME,
  offers: emptyOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state) => {
      state.offers = mockOffers;
    })
    .addCase(changeCityName, (state, action) => {
      state.cityName = action.payload;
    });
});

export { reducer };
