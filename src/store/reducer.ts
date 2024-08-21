import { createReducer } from '@reduxjs/toolkit';
import { changeCityName, loadOffers } from './action';
import { Offer } from '../types/offer';
import { offers } from '../mocks/offers';
import { DEFAULT_CITY_NAME } from '../const';

const emptyOffers: Offer[] = [];

const initialState = {
  cityName: DEFAULT_CITY_NAME,
  offers: emptyOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    })
    .addCase(changeCityName, (state, action) => {
      state.cityName = action.payload;
    });
});

export { reducer };
