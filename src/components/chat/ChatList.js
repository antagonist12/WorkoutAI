import React, { useRef, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatBubble from './ChatBubble';

export default function ChatList({ messages }) {
  const flatListRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChatBubble message={item.text} isUser={item.isUser} />
      )}
      contentContainerStyle={styles.content}
      onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 12,
  },
});