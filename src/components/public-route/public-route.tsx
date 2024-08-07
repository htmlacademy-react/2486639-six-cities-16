import AccessRoute from '../access-route/access-route';
import { AppRouteProps } from '../../types/app-route-props';
import { AppRoute, AuthorizationStatus } from '../../const';

function PublicRoute({ authorizationStatus, children }: AppRouteProps): JSX.Element {
  return (
    <AccessRoute authorizationStatus={authorizationStatus} checkAuthorizationStatus={AuthorizationStatus.NoAuth} route={AppRoute.Main}>
      {children}
    </AccessRoute>
  );
}

export default PublicRoute;
