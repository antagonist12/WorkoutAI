import { StyleSheet } from 'react-native';
import { fonts } from '../config/Typography';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 20,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  userContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#FF6B35',
    borderBottomRightRadius: 4,
  },
  aiContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#1F1F1F',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
  aiLabel: {
    fontSize: 11,
    color: '#FF6B35',
    fontWeight: '700',
    fontFamily: fonts.bold,
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 15,
    lineHeight: 23,
    letterSpacing: 0.3,
    fontFamily: fonts.regular,
  },
  userText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontFamily: fonts.medium,
  },
  aiText: {
    color: '#E5E7EB',
    fontWeight: '400',
    fontFamily: fonts.regular,
  },
  planCard: {
    marginHorizontal: 16,
    marginVertical: 6,
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  planText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#E5E7EB',
    lineHeight: 22,
    marginBottom: 14,
  },
  planButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  planButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
});
