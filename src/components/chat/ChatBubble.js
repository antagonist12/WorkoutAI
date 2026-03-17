import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubble({ message, isUser }) {
  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.aiContainer]}>
      <Text style={[styles.text, isUser ? styles.userText : styles.aiText]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  userContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#4F46E5',
    borderBottomRightRadius: 4,
  },
  aiContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3F4F6',
    borderBottomLeftRadius: 4,
  },
  text: { fontSize: 15, lineHeight: 21 },
  userText: { color: '#FFFFFF' },
  aiText: { color: '#111827' },
});