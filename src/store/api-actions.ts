import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  changeDetailOffer, loadDetailOffer, loadFavoriteOffers, loadOfferNearOffers,
  loadOfferReview, loadOfferReviews, loadOffers, requireAuthorization,
  setLoginCheckRequestStatus, setOffersLoadingRequestStatus, setReviewPostingRequestStatus, setUserName
} from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthData, UserData } from '../types';
import { AppDispatch, State } from '../types/state';
import { DetailOffer, Offers, OfferFavorite, OfferId } from '../types/offer';
import { OfferBaseReview, Review, Reviews } from '../types/review';
import { APIRoute, ActionName, AuthorizationStatus, EMPTY_DETAIL_OFFER, RequestStatus } from '../const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.FetchOffers,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingRequestStatus(RequestStatus.Loading));
    const response = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(response.data));
    dispatch(setOffersLoadingRequestStatus(RequestStatus.Success));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.FetchFavoriteOffers,
  async (_arg, { dispatch, getState, extra: api }) => {
    const state = getState();

    if (state.authorizationStatus === AuthorizationStatus.Auth) {
      const response = await api.get<Offers>(APIRoute.Favorite);
      dispatch(loadFavoriteOffers(response.data));
    }
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
      const response = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserName(response.data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
    dispatch(fetchOffersAction());
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.Login,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      dispatch(setLoginCheckRequestStatus(RequestStatus.Loading));
      const response = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(response.data.token);
      dispatch(setLoginCheckRequestStatus(RequestStatus.Success));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserName(response.data.email));
      dispatch(fetchOffersAction());
    } catch {
      dispatch(setLoginCheckRequestStatus(RequestStatus.Failed));
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.Logout,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(fetchOffersAction());
  },
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
      const response = await api.get<DetailOffer>(route);
      dispatch(loadDetailOffer(response.data));
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
    const response = await api.get<Offers>(route);
    dispatch(loadOfferNearOffers(response.data));
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
    const response = await api.get<Reviews>(route);
    dispatch(loadOfferReviews(response.data));
  }
);

export const postOfferReviewAction = createAsyncThunk<void, OfferBaseReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.Login,
  async ({ offerId, comment, rating }, { dispatch, extra: api }) => {
    try {
      dispatch(setReviewPostingRequestStatus(RequestStatus.Loading));
      const response = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
      dispatch(loadOfferReview(response.data));
      dispatch(setReviewPostingRequestStatus(RequestStatus.Success));
    } catch {
      dispatch(setReviewPostingRequestStatus(RequestStatus.Failed));
    }
  }
);

export const postOfferFavoriteAction = createAsyncThunk<void, OfferFavorite, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ActionName.Login,
  async ({ id, status }, { dispatch, extra: api }) => {
    const response = await api.post<DetailOffer>(`${APIRoute.Favorite}/${id}/${Number(status)}`);
    dispatch(changeDetailOffer(response.data));
  }
);
