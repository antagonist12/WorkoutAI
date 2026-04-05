import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import WorkoutCard from '../components/home/WorkoutCard';
import { useWorkout } from '../context/WorkoutContext';
import { styles } from '../styles/ProgramScreen.Styles';

export default function ProgramScreen() {
  const { workoutPlan } = useWorkout();
  const todayName = new Date().toLocaleDateString('id-ID', { weekday: 'long' });

  if (!workoutPlan) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>🤖</Text>
        <Text style={styles.emptyTitle}>Belum ada program</Text>
        <Text style={styles.emptySubtitle}>
          Chat dengan AI Coach untuk membuat program workout personalmu!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Plan Info */}
      <View style={styles.planInfo}>
        <Text style={styles.planName}>{workoutPlan.name}</Text>
        <Text style={styles.planGoal}>🎯 {workoutPlan.goal}</Text>
        <Text style={styles.planDuration}>📅 {workoutPlan.durationWeeks} minggu</Text>
      </View>

      {/* Workout List */}
      {workoutPlan.days.map((day, index) => (
        <WorkoutCard
          key={index}
          workout={day}
          isToday={day.day.toLowerCase() === todayName.toLowerCase()}
        />
      ))}
    </ScrollView>
  );
}