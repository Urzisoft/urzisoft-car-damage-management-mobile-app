import requestUrls from '../../Backend/requestUrls';

const filterConstants = [
    { name: 'done', label: 'Done', request: requestUrls.carsDone },
    { name: 'not done', label: 'Not Done', request: requestUrls.carsNotDone },
    { name: 'oldest', label: 'Oldest', request: requestUrls.carsOldest },
    { name: 'newest', label: 'Newest', request: requestUrls.carsNewest },
    { name: 'damage minor', label: 'Damage Minor', request: requestUrls.carsDamageMinor },
    { name: 'damage moderate', label: 'Damage Moderate', request: requestUrls.carsDamageModerate },
    { name: 'damage severe', label: 'Damage Severe', request: requestUrls.carsDamageSevere },
];

export default filterConstants;
