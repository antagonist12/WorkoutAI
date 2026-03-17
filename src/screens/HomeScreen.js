import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/HomeScreen.Styles'

export default function HomeScreen() {
  const userName = 'Aditya';
  const streak = 5;
  const todayWorkout = {
    title: 'Upper Body Strength',
    duration: '45 min',
    exercises: 6,
    completed: 2,
  };

  const progress = todayWorkout.completed / todayWorkout.exercises;


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Halo, {userName} 👋</Text>
          <Text style={styles.subGreeting}>Siap workout hari ini?</Text>
        </View>
        <View style={styles.streakBadge}>
          <Text style={styles.streakFire}>🔥</Text>
          <Text style={styles.streakCount}>{streak}</Text>
          <Text style={styles.streakLabel}>streak</Text>
        </View>
      </View>

      <View style={styles.workoutCard}>
        <View style={styles.workoutCardHeader}>
          <Text style={styles.workoutCardLabel}>WORKOUT HARI INI</Text>
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>⏱ {todayWorkout.duration}</Text>
          </View>
        </View>

        <Text style={styles.workoutTitle}>{todayWorkout.title}</Text>
        <Text style={styles.workoutExercises}>
          {todayWorkout.exercises} latihan
        </Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressInfo}>
            <Text style={styles.progressText}>Progress</Text>
            <Text style={styles.progressText}>
              {todayWorkout.completed}/{todayWorkout.exercises}
            </Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
          </View>
        </View>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>
            {todayWorkout.completed > 0 ? 'Lanjutkan →' : 'Mulai Workout →'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>💪</Text>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Total Sesi</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>⚡</Text>
          <Text style={styles.statValue}>3.2k</Text>
          <Text style={styles.statLabel}>Kalori</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statEmoji}>🏆</Text>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Badge</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Action</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={[styles.quickActionCard, { backgroundColor: '#FF6B35' }]}>
          <Text style={styles.quickActionEmoji}>🤖</Text>
          <Text style={styles.quickActionText}>Chat AI Coach</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.quickActionCard, { backgroundColor: '#7C3AED' }]}>
          <Text style={styles.quickActionEmoji}>📋</Text>
          <Text style={styles.quickActionText}>Lihat Program</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}