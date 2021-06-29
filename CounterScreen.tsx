import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FAB, Position} from './FAB';

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  const onClick = useCallback(
    (value: number) => {
      setCounter(counter + value);
    },
    [setCounter, counter],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {counter}</Text>
      <FAB title="+1" onPress={() => onClick(1)} position={Position.right} />
      <FAB title="-1" onPress={() => onClick(-1)} position={Position.left} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

export default CounterScreen;
