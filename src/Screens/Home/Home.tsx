import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './Home.style';
import HomeCard from '../../Components/HomeCard/HomeCard';
import useGetCustomFetch from '../../Hooks/useGetCustomFetch';
import useValidateUser from '../../Hooks/useValidateUser';
import { useUpdated } from '../../Context/UpdatedContext';
import Filter from '../../Components/Filter/Filter';
import { CarType } from '../../Utils/Types';
import filterConstants from './FilterConstants';

const Home: React.FC = () => {
    const { updated, setUpdated, carsUrl } = useUpdated();
    const [carList, setCarList] = useState<CarType[]>([]);
    const { response, fetcher: carFetch } = useGetCustomFetch<CarType[], string>(carsUrl);
    const { token } = useValidateUser();

    useEffect(() => {
        if (token !== null) {
            carFetch(token);
            setUpdated(false);
        }
    }, [token, carsUrl, updated]);

    useEffect(() => {
        if (response) {
            setCarList(response);
        }
    }, [response, updated]);

    return (
        <SafeAreaView style={styles.rootContainer}>
            <Filter filters={filterConstants} />
            <ScrollView>
                {carList.map((item: CarType) => (
                    <HomeCard
                        key={item.id}
                        licensePlate={item.license_plate}
                        imageUri={item.image_url}
                        damageSeverity={item.damage_severity}
                        carEntryDate={item.car_entry_date}
                        carLeaveDate={item.car_leave_date}
                        isDone={item.done}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
