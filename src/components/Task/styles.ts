import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  task: {
    width: '100%',
    flexDirection: 'row',
    minHeight: 64,
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#262626',
    alignItems: 'center',
    padding: 12,
    gap: 8,
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  text: {
    color: '#F2F2F2',
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    textAlign: 'left',
  },
  textChecked: {
    color: '#F2F2F2',
    textDecorationLine: 'line-through',
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    textAlign: 'left',
  },
});
