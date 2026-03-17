import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AiChatScreen, { resetChatRef } from '../screens/AIChatScreen';
import { styles } from '../styles/BottomTabNavigator.Styles';

const Tab = createBottomTabNavigator();

function TabIcon({ emoji, label, focused }) {
  return (
    <View style={[styles.tabItem, focused && styles.tabItemFocused]}>
      <Text style={styles.tabEmoji}>{emoji}</Text>
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
        {label}
      </Text>
    </View>
  );
}

export default function BottomTabNavigator() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#2D2D2D',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '800', fontSize: 20 },
        tabBarStyle: isKeyboardVisible ? { display: 'none' } : styles.tabBar,
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: '⚡ FitAI',
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🏠" label="Home" focused={focused} />
          ),
        }} />
      <Tab.Screen
        name="AI Chat"
        component={AiChatScreen}
        options={{
          headerTitle: '🤖 AI Coach',
          tabBarHideOnKeyboard: true,
          headerRight: () => (
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => { resetChatRef.current?.(); }}
            >
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon emoji="🤖" label="AI Chat" focused={focused} />
          ),
        }} />
    </Tab.Navigator>
  );
}