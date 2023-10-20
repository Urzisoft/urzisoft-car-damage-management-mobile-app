import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styles from "./Home.style";
import HomeCard from "../../Components/HomeCard/HomeCard";
import useGetCustomFetch from "../../Hooks/useGetCustomFetch";
import requestUrls from "../../Backend/requestUrls";
import useValidateUser from "../../Hooks/useValidateUser";

const Home: React.FC = () => {
  const [carList, setCarList] = useState<any[]>([]);
  const { response, fetcher: carFetch } = useGetCustomFetch<any, any>(
    requestUrls.requestCars
  );
  const { token } = useValidateUser();

  useEffect(() => {
    // console.log("token is ", token);
    if (token !== null) {
      carFetch(token);
    }
  }, [token]);

  useEffect(() => {
    // console.log("Response is ", response);
  }, [response]);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        {carList.map((item: any) => (
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
