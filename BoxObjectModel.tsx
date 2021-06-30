import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This indicates that it must take the entire height of the parent, in this case the parent is the App.tsx component
    backgroundColor: 'red',
  },
  title: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
  },
});
