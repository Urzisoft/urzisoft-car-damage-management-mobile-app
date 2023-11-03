export const backendEnvironment = 'http://localhost:8000';
const routeBase = 'car-manager';

const requestUrls = {
  authLogin: `${backendEnvironment}/${routeBase}/login-account/`,
  authLogout: `${backendEnvironment}/${routeBase}/logout/`,
  requestCars: `${backendEnvironment}/${routeBase}/cars/`,
  sendCars: `${backendEnvironment}/${routeBase}/cars/`,
};

export default requestUrls;
