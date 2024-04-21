import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

export type CountersProps = {
  finished: number;
  add: number;
};

export const Counters = ({ add, finished }: CountersProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.add}>Criadas</Text>
        <Text style={styles.counter}>{add} </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.finished}>Concluidas</Text>
        <Text style={styles.counter}>{finished}</Text>
      </View>
    </View>
  );
};
