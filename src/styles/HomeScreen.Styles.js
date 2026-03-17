import { StyleSheet } from 'react-native';
import { fonts } from '../config/Typography';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 26,
    fontWeight: '800',
    fontFamily: fonts.extraBold,
    color: '#FFFFFF',
  },
  subGreeting: {
    fontSize: 14,
    color: '#9CA3AF',
    fontFamily: fonts.regular,
    marginTop: 2,
  },
  streakBadge: {
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  streakFire: {
    fontSize: 20,
  },
  streakCount: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: fonts.extraBold,
    color: '#FF6B35',
  },
  streakLabel: {
    fontSize: 10,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
  },
  workoutCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  workoutCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  workoutCardLabel: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: '#FF6B35',
    letterSpacing: 1.5,
  },
  durationBadge: {
    backgroundColor: '#FF6B3520',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  durationText: {
    fontSize: 12,
    color: '#FF6B35',
    fontWeight: '600',
    fontFamily: fonts.semiBold,
  },
  workoutTitle: {
    fontSize: 22,
    fontWeight: '800',
    fontFamily: fonts.extraBold,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  workoutExercises: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#2D2D2D',
    borderRadius: 4,
  },
  progressBarFill: {
    height: 8,
    backgroundColor: '#FF6B35',
    borderRadius: 4,
  },
  startButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontFamily: fonts.extraBold,
    fontSize: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: fonts.extraBold,
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 11,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: fonts.extraBold,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  quickActionCard: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  quickActionEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});