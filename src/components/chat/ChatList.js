import React, { useRef, useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import ChatBubble from './ChatBubble';
import { styles } from '../../styles/ChatList.Styles';

export default function ChatList({ messages, isLoading }) {
  const flatListRef = useRef(null);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages, isLoading]);

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
      ListFooterComponent={
        isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#4F46E5" />
          </View>
        ) : null
      }
    />
  );
}