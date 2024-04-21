import { TextInput, View } from 'react-native';
import { Add } from '../IconButton';
import { styles } from './styles';

export type InputProps = {
  onPress: () => void;
  onChangeText: (text: string) => void;
  text: string;
  disabled?: boolean;
};

const Input = ({ onPress, onChangeText, text, disabled }: InputProps) => {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        cursorColor="#F2F2F2"
      />
      <Add onPress={onPress} disabled={disabled} />
    </View>
  );
};

export default Input;
