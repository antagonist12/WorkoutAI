import React, { useCallback, useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/HomeScreen.Styles'
import { loadWorkoutPlan } from '../storage/chatStorage';

export default function HomeScreen() {
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const streak = 5;

  useFocusEffect(
    useCallback(() => {
      const loadPlan = async () => {
        const plan = await loadWorkoutPlan();
        setWorkoutPlan(plan);
      };
      loadPlan();
    }, [])
  );

  const userName = 'Aditya';
  const todayName = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  const todayWorkout = workoutPlan?.days?.find(d => d.day.toLowerCase() === todayName.toLowerCase());

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Halo, {userName}! 👋</Text>
          <Text style={styles.subGreeting}>Siap workout hari ini?</Text>
        </View>
        <View style={styles.streakBadge}>
          <Text style={styles.streakFire}>🔥</Text>
          <Text style={styles.streakCount}>{streak}</Text>
          <Text style={styles.streakLabel}>streak</Text>
        </View>
      </View>

      {workoutPlan && (
        <View style={styles.planInfoCard}>
          <Text style={styles.planInfoLabel}>PROGRAM AKTIF</Text>
          <Text style={styles.planInfoName}>{workoutPlan.name}</Text>
          <Text style={styles.planInfoGoal}>🎯 {workoutPlan.goal}</Text>
        </View>
      )}

      {todayWorkout ? (
        <View style={styles.workoutCard}>
          <View style={styles.workoutCardHeader}>
            <Text style={styles.workoutCardLabel}>WORKOUT HARI INI</Text>
            <View style={styles.durationBadge}>
              <Text style={styles.durationText}>⏱ {todayWorkout.duration}</Text>
            </View>
          </View>
          <Text style={styles.workoutTitle}>{todayWorkout.title}</Text>
          <Text style={styles.workoutExercises}>
            {todayWorkout.exercises.length} latihan
          </Text>

          {/* Exercise List */}
          {todayWorkout.exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <Text style={styles.exerciseNumber}>{index + 1}</Text>
              <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDetail}>
                  {exercise.sets} set × {exercise.reps} • rest {exercise.rest}
                </Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Mulai Workout →</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.emptyCard}>
          {workoutPlan ? (
            <>
              <Text style={styles.emptyEmoji}>😴</Text>
              <Text style={styles.emptyTitle}>Hari Istirahat</Text>
              <Text style={styles.emptySubtitle}>Tidak ada workout hari ini. Nikmati istirahatmu!</Text>
            </>
          ) : (
            <>
              <Text style={styles.emptyEmoji}>🤖</Text>
              <Text style={styles.emptyTitle}>Belum ada program</Text>
              <Text style={styles.emptySubtitle}>Chat dengan AI Coach untuk membuat program workout personalmu!</Text>
            </>
          )}
        </View>
      )}

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