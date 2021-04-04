import { PickerView } from "./src/components/PickerView/PickerView";
import React from "react";
import { StyleSheet } from "react-native";

export default function App() {
  return <PickerView></PickerView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
