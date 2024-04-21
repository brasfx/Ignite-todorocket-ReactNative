import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    gap: 8,
  },
  add: {
    color: '#4EA8DE',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  finished: {
    color: '#8284FA',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  counter: {
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
});
