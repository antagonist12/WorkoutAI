import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import ChatList from '../components/chat/ChatList';
import ChatInput from '../components/chat/ChatInput';

export default function AiChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Halo! Saya adalah AI fitness coach kamu. Sebelum kita mulai, boleh saya tahu umur kamu berapa?',
      isUser: false,
    },
  ]);

  const handleSend = (text) => {
    const userMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
    };

    // hardcode AI response dulu, nanti diganti Gemini API
    const aiMessage = {
      id: (Date.now() + 1).toString(),
      text: 'Oke, saya catat! Ceritakan lebih lanjut tentang tujuan fitness kamu.',
      isUser: false,
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <ChatList messages={messages} />
      <ChatInput onSend={handleSend} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});