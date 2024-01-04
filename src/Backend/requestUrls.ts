export const backendEnvironment = 'http://localhost:8000';
const routeBase = 'car-manager';

const requestUrls = {
    authLogin: `${backendEnvironment}/${routeBase}/login-account/`,
    authLogout: `${backendEnvironment}/${routeBase}/logout/`,
    requestCars: `${backendEnvironment}/${routeBase}/cars/`,
    cars: `${backendEnvironment}/${routeBase}/cars/`,

    carsDone: `${backendEnvironment}/${routeBase}/cars/?is_car_service_done=True`,
    carsNotDone: `${backendEnvironment}/${routeBase}/cars/?is_car_service_done=False`,

    carsDamageMinor: `${backendEnvironment}/${routeBase}/cars/?damage_severity=minor`,
    carsDamageModerate: `${backendEnvironment}/${routeBase}/cars/?damage_severity=moderate`,
    carsDamageSevere: `${backendEnvironment}/${routeBase}/cars/?damage_severity=severe`,

    carsOldest: `${backendEnvironment}/${routeBase}/cars/?field_to_order_by=car_entry_date&&element_to_order_by=oldest`,
    carsNewest: `${backendEnvironment}/${routeBase}/cars/?field_to_order_by=car_entry_date&&element_to_order_by=newest`,
};

export default requestUrls;
