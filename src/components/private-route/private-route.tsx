import AccessRoute from '../access-route/access-route';
import { AppRouteProps } from '../../type';
import { AppRoute, AuthorizationStatus } from '../../const';

function PrivateRoute({ authorizationStatus, children }: AppRouteProps): JSX.Element {
  return (
    <AccessRoute authorizationStatus={authorizationStatus} checkAuthorizationStatus={AuthorizationStatus.Auth} route={AppRoute.Login}>
      {children}
    </AccessRoute>
  );
}

export default PrivateRoute;
