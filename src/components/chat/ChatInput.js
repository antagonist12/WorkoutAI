import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/ChatInput.Styles';

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() === '' || disabled) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Ketik pesan..."
        placeholderTextColor="#6B7280"
        editable={!disabled}
        onSubmitEditing={handleSend}
        returnKeyType="send"
        submitBehavior="submit"
      />
      <TouchableOpacity
        style={[styles.button, (text.trim() === '' || disabled) && styles.buttonDisabled]}
        onPress={handleSend}
        disabled={text.trim() === '' || disabled}
      >
        <Text style={styles.buttonText}>Kirim</Text>
      </TouchableOpacity>
    </View>
  );
}