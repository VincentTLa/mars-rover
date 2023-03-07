import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InformationText({ children }) {
  return (
    <View>
      <Text style={styles.info}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    fontFamily: 'roboto-light',
    fontSize: 16,
  },
});
