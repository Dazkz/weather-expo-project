import { StyleSheet, Text, View } from "react-native";

import Api from "../../Api/Api";
import React from "react";

export function WeatherInfo({ data }) {
  if (!!data.main) {
  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <Text>{data.weather[0].main}</Text>
      <Text>{data.main.temp}℃</Text>
    </View>
  );
  } else {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
});
