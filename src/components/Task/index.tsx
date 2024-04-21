import { FC, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { styles } from './styles';
import { Remove } from '../IconButton';

type TaskProps = {
  item: Todo;
  changeTodoItemStatus: () => void;
  onPress: () => void;
};

interface Todo {
  text: string;
  checked: boolean;
}

export const Task: FC<TaskProps> = ({
  item,
  changeTodoItemStatus,
  onPress,
}) => {
  const isChecked = item.checked;
  return (
    <View style={styles.task}>
      <BouncyCheckbox
        onPress={changeTodoItemStatus}
        fillColor={isChecked ? '#5E60CE' : '#4EA8DE'}
        unFillColor="#262626"
        iconStyle={{ borderColor: isChecked ? '#5E60CE' : '#4EA8DE' }}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={item.checked}
      />
      <Text style={isChecked ? styles.textChecked : styles.text}>
        {item.text}
      </Text>
      <Remove onPress={onPress} checked={isChecked} />
    </View>
  );
};
