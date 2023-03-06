import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title({ children, style, fontSize }) {
  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontFamily: "roboto-bold",
  },
});
