import { Picker, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import Api from "../../Api/Api";
import { WeatherInfo } from "../WeatherInfo/WeatherInfo";

export function PickerView() {
  const [pickerValue, setPickerValue] = useState('New York');
  const [data, setData] = useState({});
  useEffect(() => {
    Api.getData(pickerValue).then((r) => setData(r));
  }, [pickerValue]);
  return (
    <View style={styles.container}>
      <WeatherInfo data={data}></WeatherInfo>
      <Picker
        style={styles.picker}
        selectedValue={pickerValue}
        onValueChange={(itemValue, itemIndex) => {
          setPickerValue(itemValue);
          Api.getData(itemValue).then((r) => setData(r));
        }}
      >
        <Picker.Item label="NYC" value="New York"></Picker.Item>
        <Picker.Item label="WN" value="Washington"></Picker.Item>
        <Picker.Item label="Msc" value="Moscow"></Picker.Item>
        <Picker.Item label="Spb" value="Saint Petersburg"></Picker.Item>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: 200,
    height: 50,
  },
});
