import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/HomeScreen.Styles'
import { useWorkout } from '../context/WorkoutContext';
import { loadWorkoutPlan } from '../storage/chatStorage';
import WorkoutCard from '../components/home/WorkoutCard';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { workoutPlan, setWorkoutPlan } = useWorkout();
  const streak = 5;

  const userName = 'Aditya';
  const todayName = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  const todayWorkout = workoutPlan?.days?.find(d => d.day.toLowerCase() === todayName.toLowerCase());

  useEffect(() => {
    const loadPlan = async () => {
      const savedPlan = await loadWorkoutPlan();
      if (savedPlan) {
        setWorkoutPlan(savedPlan);
      }
    };
    loadPlan();
  }, []);

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
        <WorkoutCard
          workout={todayWorkout}
          isToday={true}
          onStart={() => console.log('mulai workout!')}
        />
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
        <TouchableOpacity style={[styles.quickActionCard, { backgroundColor: '#FF6B35' }]} onPress={() => navigation.navigate('AI Chat')}>
          <Text style={styles.quickActionEmoji}>🤖</Text>
          <Text style={styles.quickActionText}>Chat AI Coach</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.quickActionCard, { backgroundColor: '#7C3AED' }]} onPress={() => navigation.navigate('Program')}>
          <Text style={styles.quickActionEmoji}>📋</Text>
          <Text style={styles.quickActionText}>Lihat Program</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}