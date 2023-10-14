import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./HomeCard.style";

const HomeCard = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://pps.whatsapp.net/v/t61.24694-24/322276126_265056459844057_4804512518629504874_n.jpg?ccb=11-4&oh=01_AdQlPS1qrf_46kTb1fxaHUdKyLXcOlaz3kaZcMqA_91ITw&oe=6532EE60&_nc_sid=000000&_nc_cat=100",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Card Template</Text>
          <Text style={styles.cardLabel}>Subtitle Template</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            debitis dolor dolorem ex fugiat in iusto nesciunt quaerat sapiente
            similique soluta vero. Dolore eos error excepturi nisi quae, saepe
            soluta.
          </Text>
          <Text style={styles.cardFooter}>footer if needed</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;
