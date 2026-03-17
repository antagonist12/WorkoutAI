import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/ChatBubble.Styles';

export default function ChatBubble({ message, isUser }) {
  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.aiContainer]}>
      {!isUser && <Text style={styles.aiLabel}>🤖 AI Coach</Text>}
      <Text style={[styles.text, isUser ? styles.userText : styles.aiText]}>
        {message}
      </Text>
    </View>
  );
}