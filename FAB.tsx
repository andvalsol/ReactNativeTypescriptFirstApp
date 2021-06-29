import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: Position;
}

export enum Position {
  right,
  left,
}

export const FAB = ({title, onPress, position = Position.right}: Props) => {
  const fabPositionStyle = [
    styles.fabLocation,
    position === Position.left ? styles.fabLeft : styles.fabRight,
  ];

  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={fabPositionStyle}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={fabPositionStyle}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('gray', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fabRight: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLeft: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
});
