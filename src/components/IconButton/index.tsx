import { View, TouchableOpacity, Pressable } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  checked?: boolean;
};

export const Remove = ({ onPress, checked }: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <AntDesign
          name="delete"
          size={24}
          color={checked ? '#E25858' : '#808080'}
        />
      </TouchableOpacity>
    </View>
  );
};

export const Add = ({ onPress, disabled }: ButtonProps) => {
  return (
    <View style={disabled ? styles.disabled : styles.add}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Ionicons name="add-circle-outline" size={24} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
};
