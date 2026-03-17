import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAT_HISTORY_KEY = 'chat_history';
const WORKOUT_PLAN_KEY = 'workout_plan';

// Chat History
export async function saveChatHistory(messages) {
  try {
    await AsyncStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving chat history:', error);
  }
}

export async function loadChatHistory() {
  try {
    const data = await AsyncStorage.getItem(CHAT_HISTORY_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading chat history:', error);
    return null;
  }
}

export async function clearChatHistory() {
  try {
    await AsyncStorage.removeItem(CHAT_HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing chat history:', error);
  }
}

// Workout Plan
export async function saveWorkoutPlan(plan) {
  try {
    await AsyncStorage.setItem(WORKOUT_PLAN_KEY, JSON.stringify(plan));
  } catch (error) {
    console.error('Error saving workout plan:', error);
  }
}

export async function loadWorkoutPlan() {
  try {
    const data = await AsyncStorage.getItem(WORKOUT_PLAN_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading workout plan:', error);
    return null;
  }
}