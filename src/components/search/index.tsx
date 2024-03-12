import React, { useState } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';
import { Search } from '@assets';
import styles from './styles';
import { colors } from 'src/utils';

interface MASearchProps {
  value: string;
  onChange: (text: string) => void;
  onSearchPress: () => void;
  loading?: boolean;
}

export const MASearch: React.FC<MASearchProps> = ({ value, onChange, onSearchPress, loading }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, { borderColor: isFocused ? colors.primary40 : colors.gray30 }]}
        placeholderTextColor={colors.gray30}
        placeholder='Movie name'
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={[
          styles.button,
          { justifyContent: 'center', backgroundColor: !value.length ? colors.gray20 : colors.primary40 }
        ]}
        onPress={onSearchPress}
        disabled={!value.length}
      >
        {loading ? (
          <ActivityIndicator size='large' color={colors.white} />
        ) : (
          <Search width={20} height={20} color={colors.white} />
        )}
      </TouchableOpacity>
    </View>
  );
};
