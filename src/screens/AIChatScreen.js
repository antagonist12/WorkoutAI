import React, { useState, useCallback, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Text, TouchableOpacity } from 'react-native';
import ChatList from '../components/chat/ChatList';
import ChatInput from '../components/chat/ChatInput';
import { sendMessage, extractWorkoutPlan } from '../services/aiService';
import { styles } from '../styles/AIChatScreen.Styles';
import { saveChatHistory, loadChatHistory, saveWorkoutPlan, clearChatHistory } from '../storage/chatStorage';

const INITIAL_MESSAGE = {
  id: '1',
  text: 'Halo! Saya adalah AI fitness coach kamu. Sebelum kita mulai, boleh saya tahu umur kamu berapa?',
  isUser: false,
};

export const resetChatRef = { current: null };

export default function AiChatScreen() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE,]);
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = useCallback(async () => {
    await clearChatHistory();
    setMessages([INITIAL_MESSAGE]);
  }, []);

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

      const workoutPlan = extractWorkoutPlan(aiResponse);
      if (workoutPlan) {
        await saveWorkoutPlan(workoutPlan);
        console.log('Workout plan saved:', workoutPlan);
      }

      const cleanResponse = aiResponse.replace(/\[WORKOUT_PLAN\][\s\S]*?\[\/WORKOUT_PLAN\]/g, '').trim();

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: cleanResponse,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);

      if (workoutPlan) {
        const planSummaryMessage = {
          id: (Date.now() + 2).toString(),
          text: `🎉 Program workout kamu sudah siap!\n\n📋 ${workoutPlan.name}\n🎯 ${workoutPlan.goal}\n📅 ${workoutPlan.days.map(d => d.day).join(' & ')}\n\nYuk lihat programnya di Home!`,
          isUser: false,
          isWorkoutPlan: true,
        };
        setMessages((prev) => [...prev, planSummaryMessage]);
      }

    } catch (error) {
      console.log('Error detail:', error);
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

  useEffect(() => {
    const loadHistory = async () => {
      const savedHistory = await loadChatHistory();
      if (savedHistory && savedHistory.length > 0) {
        setMessages(savedHistory);
      }
    };
    loadHistory();
  }, []);

  // Save chat history setiap kali messages berubah
  useEffect(() => {
    if (messages.length > 1) {
      saveChatHistory(messages);
    }
  }, [messages]);

  useEffect(() => {
    resetChatRef.current = handleReset;
  }, [handleReset]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={90}
    >
      <ChatList messages={messages} isLoading={isLoading} />
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </KeyboardAvoidingView>
  );
}