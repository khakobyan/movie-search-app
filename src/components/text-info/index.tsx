import React from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';

import styles from './styles';

interface MATextInfoProps {
  label: string;
  info?: string | number;
  labelStyle?: TextStyle;
  infoStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

export const MATextInfo: React.FC<MATextInfoProps> = ({ label, info, labelStyle, infoStyle, containerStyle }) => {
  return (
    <Text style={[styles.text, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}: </Text>
      <Text style={[styles.info, infoStyle]}>{info}</Text>
    </Text>
  );
}

