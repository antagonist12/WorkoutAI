import { StyleSheet } from 'react-native';
import { fonts } from '../config/Typography';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#2D2D2D',
    backgroundColor: '#1A1A1A',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    backgroundColor: '#2D2D2D',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: fonts.regular,
    color: '#FFFFFF',
    marginRight: 10,
    letterSpacing: 0.3,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF6B35',
    borderRadius: 26,
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#3D2A20',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
});
