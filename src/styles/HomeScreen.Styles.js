import { StyleSheet } from 'react-native';
import { fonts } from '../config/Typography';

export const styles = StyleSheet.create({
  // ── Layout ──────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
  },

  // ── Header ──────────────────────────────────────────────
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 26,
    fontFamily: fonts.extraBold,
    color: '#FFFFFF',
  },
  subGreeting: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
    marginTop: 2,
  },

  // ── Streak Badge ─────────────────────────────────────────
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
    fontFamily: fonts.extraBold,
    color: '#FF6B35',
  },
  streakLabel: {
    fontSize: 10,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
  },

  // ── Plan Info Card ────────────────────────────────────────
  planInfoCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#7C3AED',
  },
  planInfoLabel: {
    fontSize: 11,
    fontFamily: fonts.bold,
    color: '#7C3AED',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  planInfoName: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  planInfoGoal: {
    fontSize: 13,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
  },

  // ── Workout Card ─────────────────────────────────────────
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
    fontFamily: fonts.semiBold,
    color: '#FF6B35',
  },
  workoutTitle: {
    fontSize: 22,
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

  // ── Exercise List ─────────────────────────────────────────
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
    fontFamily: fonts.bold,
    color: '#FF6B35',
    width: 28,
  },
  exerciseInfo: { flex: 1 },
  exerciseName: {
    fontSize: 14,
    fontFamily: fonts.semiBold,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  exerciseDetail: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
  },

  // ── Start Button ──────────────────────────────────────────
  startButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontFamily: fonts.extraBold,
    fontSize: 16,
  },

  // ── Empty Card ────────────────────────────────────────────
  emptyCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: 24,
    padding: 32,
    marginBottom: 20,
    alignItems: 'center',
  },
  emptyEmoji: { fontSize: 48, marginBottom: 12 },
  emptyTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 22,
  },
  // ── Quick Actions ─────────────────────────────────────────
  sectionTitle: {
    fontSize: 18,
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
    fontFamily: fonts.bold,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});