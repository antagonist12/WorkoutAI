import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/ChatBubble.Styles';
import { useNavigation } from '@react-navigation/native';
import { resetChatRef } from '../../screens/AIChatScreen';


export default function ChatBubble({ message, isUser, isWorkoutPlan }) {
  const navigation = useNavigation();

  if (isWorkoutPlan) {
    return (
      <View style={styles.planCard}>
        <Text style={styles.planText}>{message}</Text>
        <TouchableOpacity
          style={styles.planButton}
          onPress={() => {
            resetChatRef.current?.();
            navigation.navigate('Home')
          }}
        >
          <Text style={styles.planButtonText}>Lihat di Home →</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.aiContainer]}>
      {!isUser && <Text style={styles.aiLabel}>🤖 AI Coach</Text>}
      <Text style={[styles.text, isUser ? styles.userText : styles.aiText]}>
        {message}
      </Text>
    </View>
  );
}