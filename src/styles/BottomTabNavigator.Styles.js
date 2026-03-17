import { StyleSheet } from 'react-native';
import { fonts } from '../config/Typography';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#2D2D2D',
    height: 80,
    elevation: 0,
  },
  tabBarItem: {
    paddingVertical: 8,
    justifyContent: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    borderRadius: 16,
    minWidth: 100,
    minHeight: 60,
  },
  tabItemFocused: {
    backgroundColor: '#FF6B3520',
    borderRadius: 16,
  },
  tabEmoji: {
    fontSize: 24,
    paddingTop: 0,
  },
  tabLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
    fontWeight: '600',
    fontFamily: fonts.semiBold,
    textAlign: 'center',
    width: 70,
  },
  tabLabelFocused: {
    color: '#FF6B35',
  },
});
