import { Navigate } from 'react-router-dom';
import { AppRouteProps } from '../../type';
import { AuthorizationStatus } from '../../const';

type AccessRouteProps = AppRouteProps & { checkAuthorizationStatus: AuthorizationStatus; route: string }

function AccessRoute({ authorizationStatus, checkAuthorizationStatus, children, route }: AccessRouteProps): JSX.Element {
  switch (authorizationStatus) {
    case AuthorizationStatus.Unknown:
      return <p>Loading...</p>;
    case checkAuthorizationStatus:
      return children;
  }

  return <Navigate to={route} />;
}

export default AccessRoute;
