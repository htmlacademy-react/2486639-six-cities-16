import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, PASSWORD_REGEXP, RequestStatus } from '../../const';

function LoginFrom(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const loginCheckRequestStatus = useAppSelector((state) => state.loginCheckRequestStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (loginCheckRequestStatus === RequestStatus.Success) {
    navigate(AppRoute.Main);
  }

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const login = loginRef.current.value;
      const password = passwordRef.current.value;
      if (PASSWORD_REGEXP.test(password)) {
        dispatch(loginAction({ login, password }));
      }
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default LoginFrom;
