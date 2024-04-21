import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

export const EmptyState = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      <MaterialCommunityIcons
        name="clipboard-text-outline"
        size={120}
        color="#575757"
      />
      <Text style={styles.primaryText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.secondaryText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
