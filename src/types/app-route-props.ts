import { AuthorizationStatus } from '../const';

export type AppRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}
