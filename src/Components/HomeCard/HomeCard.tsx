import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./HomeCard.style";

export interface HomeCardProps {
  licensePlate: string;
  imageUri: string;
  damageSeverity: string;
  carEntryDate: string;
  carLeaveDate: string | null;
  isDone: boolean;
}

const HomeCard: React.FC<HomeCardProps> = ({
  licensePlate,
  imageUri,
  damageSeverity,
  carEntryDate,
  carLeaveDate,
  isDone,
}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>License Plate: {licensePlate}</Text>
          <Text style={styles.cardLabel}>
            Damage Severity: {damageSeverity}
          </Text>
          <Text style={styles.cardLabel}>Car Entry Date: {carEntryDate}</Text>
          {carLeaveDate && (
            <Text style={styles.cardLabel}>Car Leave Date: {carLeaveDate}</Text>
          )}
          <Text style={styles.cardFooter}>
            Status: {isDone ? "Done" : "Not Done"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;
