/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, StyleSheet, View, Platform } from 'react-native';
import { Colors } from '../constants/styles';

export default function Submit({ title, onPress }) {
  return (
    <View style={styles.btnContainer}>
      <Button
        color={Platform.OS === 'ios' ? 'white' : Colors.primary200}
        title={title}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.primary200,
    borderColor: '#cdcdcd',
    borderWidth: 1,
    borderRadius: 8,
    width: '75%',
    padding: 8,
  },
});
