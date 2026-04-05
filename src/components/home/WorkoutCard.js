import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/WorkoutCard.Styles';

export default function WorkoutCard({ workout, isToday = false, onStart }) {
  return (
    <View style={[styles.container, isToday && styles.containerToday]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.label}>
            {isToday ? 'WORKOUT HARI INI' : workout.day.toUpperCase()}
          </Text>
          <Text style={styles.title}>{workout.title}</Text>
        </View>
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>⏱ {workout.duration}</Text>
        </View>
      </View>

      {/* Exercise count */}
      <Text style={styles.exerciseCount}>{workout.exercises.length} latihan</Text>

      {/* Exercise List */}
      {workout.exercises.map((exercise, index) => (
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

      {/* Button - hanya tampil kalau ada onStart */}
      {onStart && (
        <TouchableOpacity style={styles.startButton} onPress={onStart}>
          <Text style={styles.startButtonText}>Mulai Workout →</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}