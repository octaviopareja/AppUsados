import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Desde AboutUs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default AboutUs;
