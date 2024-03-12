import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

import styles from './styles';

interface MATextButtonProps extends TouchableOpacityProps {
  title?: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
}

export const MATextButton: React.FC<MATextButtonProps> = ({ title, onPress, titleStyle, buttonStyle }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
