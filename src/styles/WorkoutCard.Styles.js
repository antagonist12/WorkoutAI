import { StyleSheet } from 'react-native';
import { fonts } from '../config/Typography';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A2E',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
  containerToday: {
    borderColor: '#FF6B35',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  label: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    color: '#FF6B35',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF',
    maxWidth: 200,
  },
  durationBadge: {
    backgroundColor: '#FF6B3520',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  durationText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#FF6B35',
  },
  exerciseCount: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#9CA3AF',
    marginBottom: 16,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  exerciseNumber: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FF6B35',
    width: 28,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  exerciseDetail: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#9CA3AF',
  },
  startButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 16,
  },
});