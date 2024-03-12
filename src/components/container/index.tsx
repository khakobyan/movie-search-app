import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleProp, ViewStyle } from 'react-native';
import styles from './styles';

interface MAContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const MAContainer: React.FC<MAContainerProps> = ({ children, style }) => {
  return (
    <SafeAreaView
      style={[styles.container, style]} // Merge styles with additional style prop if provided
      edges={['top', 'bottom']}
    >
      {children}
    </SafeAreaView>
  );
}
