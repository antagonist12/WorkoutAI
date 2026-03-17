import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import ChatList from '../components/chat/ChatList';
import ChatInput from '../components/chat/ChatInput';
import { sendMessage } from '../services/geminiService';
import { styles } from '../styles/AIChatScreen.Styles';

export default function AiChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Halo! Saya adalah AI fitness coach kamu. Sebelum kita mulai, boleh saya tahu umur kamu berapa?',
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);


  const handleSend = async (text) => {
    const userMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const aiResponse = await sendMessage(updatedMessages);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Maaf, terjadi kesalahan. Coba lagi ya!',
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <ChatList messages={messages} isLoading={isLoading} />
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </KeyboardAvoidingView>
  );
}