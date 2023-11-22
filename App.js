import React from 'react';
import { View, StyleSheet } from 'react-native';
import CountdownTimer from './CountdownTimer';
import PomodoroTimer from './PomodoroTimer';

const App = () => {
  return (
    <View style={styles.container}>
      <PomodoroTimer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
