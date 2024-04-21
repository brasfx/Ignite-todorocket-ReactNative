import { Image, View } from 'react-native';
import { styles } from './styles';

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} />
    </View>
  );
};
