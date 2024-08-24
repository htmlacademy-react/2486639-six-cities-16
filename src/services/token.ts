import { Token } from '../types';
import { AUTH_TOKEN_KEY_NAME } from '../const';

//! временно
/*
export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);

  return token ?? '';
};
*/

export const getToken = (): Token => 'YWFhQGFhYS5hYWE=';

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
