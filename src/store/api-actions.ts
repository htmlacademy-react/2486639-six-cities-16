import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  loadDetailOffer, loadFavoriteOffers, loadOfferNearOffers, loadOfferReviews,
  loadOffers, requireAuthorization, setOffersDataLoadingStatus, setUserName
} from './action';
import { saveToken } from '../services/token';
import { AuthData, UserData } from '../types';
import { AppDispatch, State } from '../types/state';
import { DetailOffer, Offer, OfferFavorite, OfferId } from '../types/offer';
import { OfferBaseReview, Review } from '../types/review';
import { APIRoute, ActionName, AuthorizationStatus, EMPTY_DETAIL_OFFER } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.FetchOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.FetchFavoriteOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadFavoriteOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.CheckAuth,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserName(data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.Login,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserName(data.email));
    dispatch(fetchFavoriteOffersAction());
  }
);

export const fetchDetailOfferAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.FetchDetailOffer,
  async (id, { dispatch, extra: api }) => {
    const route = `${APIRoute.Offers}/${id}`;
    try {
      const { data } = await api.get<DetailOffer>(route);
      dispatch(loadDetailOffer(data));
    } catch {
      dispatch(loadDetailOffer(EMPTY_DETAIL_OFFER));
    }
  }
);

export const fetchOfferNearOffersAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.FetchOfferNearOffers,
  async (id, { dispatch, extra: api }) => {
    const route = `${APIRoute.Offers}/${id}${APIRoute.Nearby}`;
    const { data } = await api.get<Offer[]>(route);

    dispatch(loadOfferNearOffers(data));
  }
);

export const fetchOfferReviewsAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.FetchOfferReviews,
  async (id, { dispatch, extra: api }) => {
    const route = `${APIRoute.Comments}/${id}`;
    const { data } = await api.get<Review[]>(route);

    dispatch(loadOfferReviews(data));
  }
);

export const postOfferReviewAction = createAsyncThunk<void, OfferBaseReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.Login,
  async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
    await api.post<Review>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
    dispatch(fetchOfferReviewsAction(offerId));
  }
);

export const postOfferFavoriteAction = createAsyncThunk<void, OfferFavorite, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.Login,
  async ({ id, status }, { dispatch, extra: api }) => {
    await api.post<Review>(`${APIRoute.Favorite}/${id}/${Number(status)}`);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoriteOffersAction());
  }
);
