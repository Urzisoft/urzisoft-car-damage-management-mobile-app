import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import styles from "./Home.style";
import HomeCard from "../../Components/HomeCard/HomeCard";

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <HomeCard />
        <HomeCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
